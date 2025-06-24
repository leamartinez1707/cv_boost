import { Zap, CheckCircle, FileText } from 'lucide-react';

const InfoCards = () => {
    return (
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
    )
}

export default InfoCards