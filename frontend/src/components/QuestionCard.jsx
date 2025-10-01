export default function QuestionCard({ question, selected, onSelect }) {
  return (
    <div className="w-full max-w-xl p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">{question.text}</h2>
      <ul className="space-y-2">
        {question.options.map((opt) => (
          <li key={opt.id}>
            <button
              onClick={() => onSelect(question.id, opt.id)}
              className={`w-full px-4 py-2 text-left border rounded-lg 
                ${selected === opt.id ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-200"}
              `}
            >
              {opt.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
