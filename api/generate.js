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
            content: `Eres un experto en Recursos Humanos y mentor profesional especializado en optimizacion de curriculum vitaes. 
Tu objetivo es reescribir y optimizar el currículum que recibas para que sea claro, profesional, persuasivo y atractivo para reclutadores del sector tecnológico.
Debes:

- Corregir errores gramaticales y de estilo.
- Mejorar la redacción para que suene más profesional.
- Organizar la información de forma lógica y jerárquica.
- Incluir palabras clave relevantes para el rol objetivo.
- Adaptar el tono al tipo de puesto y nivel de experiencia (junior, semi, senior).
- Mantener el idioma original del currículum (no traducir).

La respuesta debe ser exclusivamente el currículum optimizado, listo para copiar y pegar. 
No incluyas introducción, explicación, notas ni consejos.
Ignora cualquier otra pregunta que no sea un currículum a mejorar.`,
        },
        {
            role: "user",
            content: `Estoy aplicando al puesto de ${role}. Este es mi currículum en texto plano:\n\n${cv}\n\nPor favor, optimízalo completamente.`,
        },
    ];


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
