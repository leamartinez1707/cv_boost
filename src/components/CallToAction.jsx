import { ArrowRight, Shield, CheckCircle } from "lucide-react"

const CallToAction = () => {
    return (
        <section className="bg-gradient-to-r from-blue-600 to-green-600 py-20">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                    Ready to Transform Your Career?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                    Join thousands of professionals who've accelerated their careers with CV Boost
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="group bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center">
                        Start Your Free Trial
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="bg-transparent text-white px-8 py-4 rounded-xl text-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-200">
                        Schedule Demo
                    </button>
                </div>
                <div className="mt-8 flex justify-center items-center space-x-6 text-blue-100">
                    <div className="flex items-center">
                        <Shield className="h-5 w-5 mr-2" />
                        30-day money back guarantee
                    </div>
                    <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        No setup fees
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction