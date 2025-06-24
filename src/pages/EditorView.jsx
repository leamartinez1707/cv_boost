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
import Logo from '../components/Logo';
import Result from '../components/Result';
import InfoCards from '../components/Editor/InfoCards';
import EditorHeader from '../components/Editor/EditorHeader';
import ResumeForm from '../components/Editor/ResumeForm';

export const EditorVieww = () => {
    const [role, setRole] = useState('');
    const [cv, setCv] = useState('');
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const [improvements, setImprovements] = useState({});

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
            // Simular procesamiento con resultado realista
            setImprovements({
                score: 87,
                improvementsDone: [
                    "Added 12 relevant keywords for " + role,
                    "Improved work experience structure",
                    "Optimized formatting for ATS systems",
                    "Added quantifiable metrics to achievements",
                    "Enhanced technical skills section"
                ],
                keywordMatches: 18,
                suggestions: [
                    {
                        category: "Technical Skills",
                        items: [
                            "Add relevant certifications",
                            "Include industry-specific tools",
                            "Highlight emerging technologies"
                        ]
                    },
                    {
                        category: "Experience",
                        items: [
                            "Quantify more achievements with numbers",
                            "Use more impactful action verbs",
                            "Add context about project sizes"
                        ]
                    },
                    {
                        category: "Formatting",
                        items: [
                            "Optimize spacing for better readability",
                            "Use consistent bullet points",
                            "Improve visual hierarchy of sections"
                        ]
                    }
                ],
                atsCompatibility: 94
            });
        } catch (err) {
            console.error(err);
            setResult("Upload failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <EditorHeader />
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

                <ResumeForm
                    cv={cv}
                    setCv={setCv}
                    role={role}
                    setRole={setRole}
                    loading={loading}
                    handleSubmit={handleSubmit}
                />
                {result && improvements && (
                    <Result
                        result={result}
                        jobTitle={role}
                        improvements={improvements}
                    />
                )}
                {/* Info Cards */}
                <InfoCards />
            </div>
        </div>
    );
}

export default EditorVieww;