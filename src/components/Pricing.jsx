import {
    CheckCircle,
} from 'lucide-react';

const Pricing = () => {
    return (
        <section id="pricing" className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Choose Your Success Plan
                    </h2>
                    <p className="text-xl text-gray-600">
                        Start free and upgrade when you're ready to accelerate your career
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
                        <div className="text-4xl font-bold text-gray-900 mb-6">$0<span className="text-lg text-gray-600">/month</span></div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                <span className="text-gray-700">1 CV template</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                <span className="text-gray-700">Basic AI suggestions</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                <span className="text-gray-700">PDF download</span>
                            </li>
                        </ul>
                        <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors">
                            Get Started Free
                        </button>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-500 relative">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                        <div className="text-4xl font-bold text-gray-900 mb-6">$19<span className="text-lg text-gray-600">/month</span></div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                <span className="text-gray-700">50+ premium templates</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                <span className="text-gray-700">Advanced AI optimization</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                <span className="text-gray-700">ATS score analysis</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                <span className="text-gray-700">Cover letter generator</span>
                            </li>
                        </ul>
                        <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105">
                            Start Pro Trial
                        </button>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                        <div className="text-4xl font-bold text-gray-900 mb-6">$99<span className="text-lg text-gray-600">/month</span></div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                <span className="text-gray-700">Everything in Pro</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                <span className="text-gray-700">Team collaboration</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                <span className="text-gray-700">Priority support</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                <span className="text-gray-700">Custom branding</span>
                            </li>
                        </ul>
                        <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing