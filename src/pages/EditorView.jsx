import { useState } from "react"
import axios from "axios"

export const EditorView = () => {
    const [cv, setCv] = useState("")
    const [role, setRole] = useState("")
    const [result, setResult] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setResult("")

        try {
            const prompt = `Estoy aplicando a un puesto de ${role}. Este es mi currículum:\n${cv}\n\n¿Podés darme sugerencias para mejorarlo?`
            const res = await axios.post(
                "https://api.openai.com/v1/chat/completions",
                {
                    model: "gpt-3.5-turbo",
                    messages: [
                        { role: "user", content: prompt }
                    ],
                    temperature: 0.7,
                },
                {
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_KEY}`,
                    },
                }
            )

            setResult(res.data.choices[0].message.content)
        } catch (err) {
            console.error(err)
            setResult("Hubo un error 😔")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Mejorá tu CV con IA</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="¿A qué puesto apuntás?"
                    className="w-full p-2 border rounded"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Pegá tu currículum acá..."
                    className="w-full p-2 border rounded h-40"
                    value={cv}
                    onChange={(e) => setCv(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    disabled={loading}
                >
                    {loading ? "Analizando..." : "Mejorar CV"}
                </button>
            </form>

            {result && (
                <div className="mt-6 p-4 bg-gray-100 rounded shadow">
                    <h2 className="font-semibold mb-2">Resultado:</h2>
                    <pre className="whitespace-pre-wrap">{result}</pre>
                </div>
            )}
        </div>
    )
}

export default EditorView;
