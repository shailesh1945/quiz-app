import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";

export default function QuizPage() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/questions")
      .then((res) => setQuestions(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleAnswer = (questionId, optionId) => {
    setAnswers({ ...answers, [questionId]: optionId });
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:8080/submit", answers)
      .then((res) => navigate("/result", { state: res.data }))
      .catch((err) => console.error(err));
  };

  if (questions.length === 0) {
    return <p className="text-center mt-20 text-gray-600">Loading...</p>;
  }

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-8 animate-fadeIn">
        {/* Progress */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Question Card */}
        <QuestionCard
          question={currentQuestion}
          selected={answers[currentQuestion.id]}
          onSelect={handleAnswer}
        />

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => setCurrentIndex(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="px-6 py-3 bg-gray-300 rounded-xl disabled:opacity-50 hover:bg-gray-400 transition"
          >
            Previous
          </button>

          {currentIndex < questions.length - 1 ? (
            <button
              onClick={() => setCurrentIndex(currentIndex + 1)}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
            >
              Submit
            </button>
          )}
        </div>

        <p className="mt-4 text-center text-gray-500 text-sm">
          Question {currentIndex + 1} of {questions.length}
        </p>
      </div>
    </div>
  );
}
