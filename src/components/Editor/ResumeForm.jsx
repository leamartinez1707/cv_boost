import { CheckCircle, FileText, Briefcase, Zap } from "lucide-react"
const ResumeForm = ({ handleSubmit, cv, setCv, role, setRole, loading }) => {
    return (
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
    )
}

export default ResumeForm