import { useState } from 'react';
import axios from 'axios';
import {
    FileText,
    Briefcase,
    Zap,
    CheckCircle,
    ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const EditorVieww = () => {
    const [role, setRole] = useState('');
    const [cv, setCv] = useState('');
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResult("");
        try {
            const res = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/generate`,
                {
                    cv,
                    role,
                }
            );
            setResult(res.data.result);
        } catch (err) {
            console.error(err);
            setResult("Upload failed. Please try again.");
        } finally {
            setLoading(false);
        }
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
                            Back
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
                        Optimize your CV with AI
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Paste your current CV and tell us the position you are applying for. Our AI will optimize it to increase your chances of getting hired.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* CV Text Section */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                        <div className="flex items-center mb-6">
                            <FileText className="h-6 w-6 text-blue-600 mr-3" />
                            <h2 className="text-xl font-semibold text-gray-900">Paste your CV</h2>
                        </div>
                        <div>
                            <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-3">
                                Paste the text of your CV below
                            </label>
                            <textarea
                                id="cv"
                                value={cv}
                                onChange={(e) => setCv(e.target.value)}
                                placeholder="Paste your CV here..."
                                rows={12}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-lg resize-vertical"
                                required
                            />
                            <p className="text-sm text-gray-600 mt-2">
                                Only plain text is supported for now.
                            </p>
                        </div>
                    </div>

                    {/* Job Position Section */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                        <div className="flex items-center mb-6">
                            <Briefcase className="h-6 w-6 text-blue-600 mr-3" />
                            <h2 className="text-xl font-semibold text-gray-900">Target Position</h2>
                        </div>
                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-3">
                                What position are you applying for?
                            </label>
                            <input
                                type="text"
                                id="role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                placeholder="e.g. Frontend Developer, Marketing Manager, Accountant..."
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-lg"
                            />
                            <p className="text-sm text-gray-600 mt-2">
                                Be specific to get better optimization results.
                            </p>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            disabled={!cv.trim() || !role.trim() || loading}
                            className={`inline-flex items-center px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 ${!cv.trim() || !role.trim() || loading
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                : 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 hover:shadow-lg'
                                }`}
                        >
                            {loading ? (
                                <>
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                                    Optimizing CV...
                                </>
                            ) : (
                                <>
                                    <Zap className="h-5 w-5 mr-3" />
                                    Optimize my CV
                                </>
                            )}
                        </button>

                        {cv.trim() && role.trim() && !loading && (
                            <div className="mt-4 flex items-center justify-center text-sm text-green-600">
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Ready to optimize
                            </div>
                        )}
                    </div>
                </form>
                {result && (
                    <div className="mt-6 p-4 bg-gray-100 rounded shadow">
                        <h2 className="font-semibold mb-2">Result:</h2>
                        <pre className="whitespace-pre-wrap">{result}</pre>
                    </div>
                )}
                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                        <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                            <Zap className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Fast</h3>
                        <p className="text-gray-600 text-sm">
                            Optimization in less than 2 minutes
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                        <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                            <CheckCircle className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Secure</h3>
                        <p className="text-gray-600 text-sm">
                            Your data is protected
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                        <div className="bg-orange-100 p-3 rounded-full w-fit mx-auto mb-4">
                            <FileText className="h-6 w-6 text-orange-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Effective</h3>
                        <p className="text-gray-600 text-sm">
                            Improve your chances of getting hired
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditorVieww;