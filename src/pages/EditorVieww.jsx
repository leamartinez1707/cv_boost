import { useState } from 'react';
import axios from 'axios';
import {
    Upload,
    FileText,
    Briefcase,
    Zap,
    CheckCircle,
    ArrowRight,
    X
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const EditorVieww = () => {
    const [role, setRole] = useState('');
    const [dragActive, setDragActive] = useState(false);
    const [cv, setCv] = useState(null)
    const [result, setResult] = useState("")
    const [loading, setLoading] = useState(false)

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const droppedFile = e.dataTransfer.files[0];
            if (droppedFile.type === 'application/pdf' || droppedFile.name.endsWith('.pdf')) {
                setCv(droppedFile);
            }
        }
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setCv(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setResult("")

        try {
            const res = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/generate`,
                {
                    cv,
                    role,
                }
            )

            setResult(res.data.result)
        } catch (err) {
            console.error(err)
            setResult("Ocurrió un error al procesar el CV.")
        } finally {
            setLoading(false)
        }
    }

    const removeFile = () => {
        setCv(null);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link
                            to={"/"}
                            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <ArrowRight className="h-5 w-5 mr-2 rotate-180" />
                            Volver
                        </Link>
                        <div className="flex items-center space-x-2">
                            <div className="bg-blue-600 p-2 rounded-lg">
                                <FileText className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-lg font-semibold text-gray-900">CV Boost Editor</span>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        Optimiza tu CV con IA
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Sube tu CV actual y dinos para qué posición estás aplicando. Nuestra IA lo optimizará para aumentar tus posibilidades de ser contratado.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
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
                    {/* File Upload Section */}
                    {/* <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                        <div className="flex items-center mb-6">
                            <Upload className="h-6 w-6 text-blue-600 mr-3" />
                            <h2 className="text-xl font-semibold text-gray-900">Sube tu CV</h2>
                        </div>

                        {!cv ? (
                            <div
                                className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-200 ${dragActive
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-gray-300 hover:border-gray-400'
                                    }`}
                                onDragEnter={handleDrag}
                                onDragLeave={handleDrag}
                                onDragOver={handleDrag}
                                onDrop={handleDrop}
                            >
                                <div className="bg-gray-100 p-4 rounded-full w-fit mx-auto mb-4">
                                    <FileText className="h-8 w-8 text-gray-600" />
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">
                                    Arrastra tu CV aquí o haz clic para seleccionar
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Acepta archivos PDF únicamente
                                </p>
                                <label className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors cursor-pointer">
                                    <Upload className="h-5 w-5 mr-2" />
                                    Seleccionar archivo
                                    <input
                                        type="file"
                                        accept=".pdf"
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />
                                </label>
                            </div>
                        ) : (
                            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="bg-green-100 p-2 rounded-lg mr-4">
                                            <FileText className="h-6 w-6 text-green-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900">{cv.name}</h3>
                                            <p className="text-sm text-gray-600">
                                                {(cv.size / 1024 / 1024).toFixed(2)} MB
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={removeFile}
                                        className="text-gray-400 hover:text-gray-600 transition-colors"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div> */}

                    {/* Job Position Section */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                        <div className="flex items-center mb-6">
                            <Briefcase className="h-6 w-6 text-blue-600 mr-3" />
                            <h2 className="text-xl font-semibold text-gray-900">Posición objetivo</h2>
                        </div>

                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-3">
                                ¿Para qué posición estás aplicando?
                            </label>
                            <input
                                type="text"
                                id="role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                placeholder="Ej: Desarrollador Frontend, Marketing Manager, Contador..."
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-lg"
                            />
                            <p className="text-sm text-gray-600 mt-2">
                                Sé específico para obtener mejores resultados de optimización
                            </p>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            disabled={!cv || !role.trim() || loading}
                            className={`inline-flex items-center px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 ${!cv || !role.trim() || loading
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                : 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 hover:shadow-lg'
                                }`}
                        >
                            {loading ? (
                                <>
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                                    Optimizando CV...
                                </>
                            ) : (
                                <>
                                    <Zap className="h-5 w-5 mr-3" />
                                    Optimizar mi CV
                                </>
                            )}
                        </button>

                        {cv && role.trim() && !loading && (
                            <div className="mt-4 flex items-center justify-center text-sm text-green-600">
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Todo listo para optimizar
                            </div>
                        )}
                    </div>
                </form>
                {result && (
                    <div className="mt-6 p-4 bg-gray-100 rounded shadow">
                        <h2 className="font-semibold mb-2">Resultado:</h2>
                        <pre className="whitespace-pre-wrap">{result}</pre>
                    </div>
                )}
                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                        <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                            <Zap className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Rápido</h3>
                        <p className="text-gray-600 text-sm">
                            Optimización en menos de 2 minutos
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                        <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                            <CheckCircle className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Seguro</h3>
                        <p className="text-gray-600 text-sm">
                            Tus datos están protegidos
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                        <div className="bg-orange-100 p-3 rounded-full w-fit mx-auto mb-4">
                            <FileText className="h-6 w-6 text-orange-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Efectivo</h3>
                        <p className="text-gray-600 text-sm">
                            Mejora tus posibilidades de contratación
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditorVieww;