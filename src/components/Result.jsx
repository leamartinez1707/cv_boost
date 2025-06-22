import { Award, TrendingUp, Eye, Target, CheckCircle, Zap, ArrowRight } from "lucide-react"
import ScoreCircle from "./ScoreCircle"

const Result = ({ jobTitle, result, improvements }) => {

    console.log(improvements)
    console.log(result)
    console.log(jobTitle)
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Success Banner */}
            <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">¡CV Optimizado Exitosamente!</h1>
                        <p className="text-green-100 text-lg">
                            Tu CV para <span className="font-semibold">{jobTitle}</span> ha sido mejorado significativamente
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <div className="bg-white/20 p-4 rounded-xl">
                            <Award className="h-12 w-12 text-white" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-900">Puntuación General</h3>
                        <TrendingUp className="h-5 w-5 text-green-600" />
                    </div>
                    <ScoreCircle score={improvements.score} label="de 100" />
                    <p className="text-sm text-gray-600 mt-2 text-center">
                        Excelente puntuación para tu industria
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-900">Compatibilidad ATS</h3>
                        <Target className="h-5 w-5 text-blue-600" />
                    </div>
                    <ScoreCircle score={improvements.atsCompatibility} label="Compatible" />
                    <p className="text-sm text-gray-600 mt-2 text-center">
                        Pasará filtros automáticos
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-900">Palabras Clave</h3>
                        <Eye className="h-5 w-5 text-orange-600" />
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-gray-900 mb-2">{improvements.keywordMatches}</div>
                        <p className="text-sm text-gray-600">Coincidencias encontradas</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Improvements Made */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                        <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                        Mejoras Realizadas
                    </h3>
                    <div className="space-y-4">
                        {improvements.improvementsDone.map((improvement, index) => (
                            <div key={index} className="flex items-start">
                                <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                </div>
                                <p className="text-gray-700">{improvement}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Suggestions */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                        <Zap className="h-6 w-6 text-blue-600 mr-3" />
                        Sugerencias Adicionales
                    </h3>
                    <div className="space-y-6">
                        {improvements.suggestions.map((suggestion, index) => (
                            <div key={index}>
                                <h4 className="font-medium text-gray-900 mb-3">{suggestion.category}</h4>
                                <div className="space-y-2">
                                    {suggestion.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="flex items-start">
                                            <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                                                <ArrowRight className="h-3 w-3 text-blue-600" />
                                            </div>
                                            <p className="text-sm text-gray-600">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-8 bg-white border border-gray-200 rounded-xl shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">CV Optimizado</h2>
                <div className="prose max-w-none text-gray-700 whitespace-pre-wrap font-sans leading-relaxed">
                    {result}
                </div>
            </div>
        </div>
    )
}

export default Result