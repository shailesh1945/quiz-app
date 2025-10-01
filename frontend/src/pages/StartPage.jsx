import { useNavigate } from "react-router-dom";

export default function StartPage() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-12 max-w-md text-center animate-fadeIn">
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-6">
          Welcome to the Quiz!
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Test your knowledge and have fun! Click below to start the challenge.
        </p>
        <button
          onClick={() => navigate("/quiz")}
          className="w-full py-3 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:from-purple-600 hover:to-indigo-500"
        >
          Start Quiz
        </button>
        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          Made with ❤️ for learning
        </p>
      </div>
    </div>
  );
}
