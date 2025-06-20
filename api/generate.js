// Mapa en memoria para rastrear IPs (se reinicia al reiniciarse la función)
const cooldownMap = new Map()


export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not available" })
    }

    const { cv, role } = req.body

    if (!cv || !role) {
        return res.status(400).json({ error: "Complete all fields" })
    }
    // Rate limiting 
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress
    const now = Date.now()

    // Verificar si la IP ya está en el map y si ha pasado menos de 60 segundos desde la última solicitud
    if (cooldownMap.has(ip) && now - cooldownMap.get(ip) < 60_000) {
        return res.status(429).json({ error: "You have to wait a minute to be able to make a new request." })
    }

    cooldownMap.set(ip, now) // registramos la IP

    const messages = [
        {
            role: "system",
            content:
                "Sos un experto en Recursos Humanos y mentor profesional de ingenieria de software y vas a ayudar a los usuarios a mejorar su currículum para el puesto al que aspiran. Respondé en el idioma que este el curriculum, la respuesta tiene que ser el curriculum que te envio el usuario pero con las mejoras aplicadas para que solo tenga que copiar y pegar. Utiliza la menor cantidad de tokens posible pero de forma optimizada para una buena respuesta.",
        },
        {
            role: "user",
            content: `Estoy aplicando a un puesto de ${role}. Este es mi currículum:\n\n${cv}\n\n¿Podés corregirme el curriculum para mejorarlo?Gracias, por favor, no me des consejos, solo devolveme el curriculum corregido.`,
        },
    ]

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages,
                temperature: 0.7,
            }),
        })

        const data = await response.json()

        if (data.error) {
            return res.status(500).json({ error: data.error.message })
        }

        const result = data.choices[0].message.content
        return res.status(200).json({ result })
    } catch (err) {
        console.error(err)
        return res.status(500).json({ error: "Internal server error" })
    }
}
