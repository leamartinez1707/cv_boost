const ScoreCircle = ({ score, label }) => (
    <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-2">
            <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                />
                <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke={score >= 80 ? "#10b981" : score >= 60 ? "#f59e0b" : "#ef4444"}
                    strokeWidth="2"
                    strokeDasharray={`${score}, 100`}
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-gray-900">{score}</span>
            </div>
        </div>
        <p className="text-sm text-gray-600">{label}</p>
    </div>
);
export default ScoreCircle;