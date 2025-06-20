export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Método no permitido" })
    }

    const { cv, role } = req.body

    if (!cv || !role) {
        return res.status(400).json({ error: "Faltan datos (cv o role)" })
    }

    const messages = [
        {
            role: "system",
            content:
                "Sos un experto en Recursos Humanos y mentor profesional. Vas a ayudar a los usuarios a mejorar su currículum para el puesto al que aspiran. Respondé en el idioma que este el curriculum, de forma clara, profesional y amable. Solo respondé con sugerencias de mejora, no hagas preguntas adicionales. No respondas con emojis y nada que no tenga que ver con el currículum. Respondé con un texto que el usuario pueda copiar y pegar directamente en su currículum. Utiliza la menor cantidad de tokens posible.",
        },
        {
            role: "user",
            content: `Estoy aplicando a un puesto de ${role}. Este es mi currículum:\n\n${cv}\n\n¿Podés darme sugerencias para mejorarlo?`,
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
        return res.status(500).json({ error: "Error interno del servidor" })
    }
}
