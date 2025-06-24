import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import Logo from "../Logo"

const EditorHeader = () => {
    return (
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
                    <Logo />
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default EditorHeader