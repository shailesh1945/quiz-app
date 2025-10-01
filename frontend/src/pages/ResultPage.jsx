import { useLocation, useNavigate } from "react-router-dom";

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 0 };

  // Calculate percentage for progress circle
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-10 text-center max-w-md animate-fadeIn">
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-4">
          Quiz Completed!
        </h1>
        <div className="my-6">
          <div className="w-32 h-32 mx-auto rounded-full bg-gray-100 flex items-center justify-center shadow-lg">
            <span className="text-3xl font-bold text-blue-600">{percentage}%</span>
          </div>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          You scored {score} out of {total}!
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:from-purple-600 hover:to-indigo-500 transition transform"
        >
          Go Home
        </button>
        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          Well done! Keep practicing to improve your score.
        </p>
      </div>
    </div>
  );
}
