import { Users, Star } from 'lucide-react';

const Testimonials = () => {
    return (
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
    )
}

export default Testimonials