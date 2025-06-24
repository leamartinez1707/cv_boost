import { Link } from "react-router-dom"
import { ArrowRight, Zap, CheckCircle } from "lucide-react"

const Hero = () => {
    return (
        <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 pt-16 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
                        <Zap className="h-4 w-4 mr-2" />
                        Transform Your Career in Minutes
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Land Your Dream Job with
                        <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> AI-Powered CVs</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Get hired 3x faster with professionally optimized resumes. Our AI analyzes job descriptions and tailors your CV to beat ATS systems and impress recruiters.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link to={'/editor'} className="group bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center">
                            Boost My CV Now
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <button className="bg-white text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold border-2 border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-md">
                            Watch Demo
                        </button>
                    </div>
                    <div className="mt-12 flex justify-center items-center space-x-8 text-sm text-gray-500">
                        <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            No Credit Card Required
                        </div>
                        <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            Free Trial Available
                        </div>
                        <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            Instant Results
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero