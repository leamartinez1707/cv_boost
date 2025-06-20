import {
    ChevronRight,
    FileText,
    TrendingUp,
    Users,
    Award,
    CheckCircle,
    Star,
    ArrowRight,
    Target,
    Zap,
    Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-2">
                            <Link to={'/'} className="bg-blue-600 p-2 rounded-lg">
                                <FileText className="h-6 w-6 text-white" />
                            </Link>
                            <span className="text-xl font-bold text-gray-900">CV Boost</span>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
                            <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Reviews</a>
                            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
                            <Link to={'/editor'} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
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
                            <button className="group bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center">
                                Boost My CV Now
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </button>
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

            {/* Stats Section */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">250K+</div>
                            <div className="text-gray-600">CVs Enhanced</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-green-600 mb-2">3x</div>
                            <div className="text-gray-600">Faster Hiring</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-orange-600 mb-2">94%</div>
                            <div className="text-gray-600">Success Rate</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-purple-600 mb-2">4.9★</div>
                            <div className="text-gray-600">User Rating</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
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
                            <div className="flex items-center text-blue-600 font-medium">
                                Learn more <ChevronRight className="ml-1 h-4 w-4" />
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                            <div className="bg-green-100 p-3 rounded-xl w-fit mb-6">
                                <TrendingUp className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Suggestions</h3>
                            <p className="text-gray-600 mb-6">
                                Get AI-powered recommendations for skills, experience descriptions, and achievements that recruiters love.
                            </p>
                            <div className="flex items-center text-green-600 font-medium">
                                Learn more <ChevronRight className="ml-1 h-4 w-4" />
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                            <div className="bg-orange-100 p-3 rounded-xl w-fit mb-6">
                                <Award className="h-8 w-8 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Templates</h3>
                            <p className="text-gray-600 mb-6">
                                Choose from 50+ industry-specific templates designed by HR experts and approved by top companies.
                            </p>
                            <div className="flex items-center text-orange-600 font-medium">
                                Learn more <ChevronRight className="ml-1 h-4 w-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Loved by Job Seekers Worldwide
                        </h2>
                        <p className="text-xl text-gray-600">
                            See what our users have to say about their success stories
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-8 rounded-2xl">
                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6">
                                "I got 3 interview calls within a week of using CV Boost. The AI suggestions were spot-on and helped me highlight my achievements perfectly."
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                    <Users className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">Sarah Chen</div>
                                    <div className="text-gray-600">Marketing Manager</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl">
                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6">
                                "The ATS optimization feature is incredible. My CV started getting past the initial screening and I landed my dream job at a Fortune 500 company."
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                    <Users className="h-6 w-6 text-green-600" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">Michael Rodriguez</div>
                                    <div className="text-gray-600">Software Engineer</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl">
                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6">
                                "As a career changer, CV Boost helped me translate my skills effectively. The professional templates made all the difference in my job search."
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                                    <Users className="h-6 w-6 text-orange-600" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">Emily Johnson</div>
                                    <div className="text-gray-600">Project Manager</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
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

            {/* CTA Section */}
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

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="bg-blue-600 p-2 rounded-lg">
                                    <FileText className="h-6 w-6 text-white" />
                                </div>
                                <span className="text-xl font-bold">CV Boost</span>
                            </div>
                            <p className="text-gray-400">
                                Empowering careers with AI-powered CV optimization and professional templates.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Product</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Support</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 CV Boost. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;