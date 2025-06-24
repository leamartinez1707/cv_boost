import { Award, TrendingUp, Target } from "lucide-react"

const Features = () => {
    return (
        <section id="features" className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Everything You Need to Get Hired
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Our AI-powered platform provides all the tools you need to create compelling CVs that get results.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                        <div className="bg-blue-100 p-3 rounded-xl w-fit mb-6">
                            <Target className="h-8 w-8 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">ATS Optimization</h3>
                        <p className="text-gray-600 mb-6">
                            Beat applicant tracking systems with keyword optimization and formatting that gets past automated filters.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                        <div className="bg-green-100 p-3 rounded-xl w-fit mb-6">
                            <TrendingUp className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Suggestions</h3>
                        <p className="text-gray-600 mb-6">
                            Get AI-powered recommendations for skills, experience descriptions, and achievements that recruiters love.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                        <div className="bg-orange-100 p-3 rounded-xl w-fit mb-6">
                            <Award className="h-8 w-8 text-orange-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Templates</h3>
                        <p className="text-gray-600 mb-6">
                            Choose from 50+ industry-specific templates designed by HR experts and approved by top companies.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features