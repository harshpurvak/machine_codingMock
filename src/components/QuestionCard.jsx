import React from "react";

const QuestionCard = ({ question, onToggleQuestion, onDeleteQuestion }) => {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{question.title}</h3>

          <p className="mt-2 text-sm text-slate-400">{question.category}</p>
        </div>

        <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
          {question.difficulty}
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-4">
        <span
          className={`text-sm ${
            question.status === "Completed"
              ? "text-green-400"
              : question.status === "In Progress"
                ? "text-blue-400"
                : "text-yellow-400"
          }`}
        >
          {question.status || "Pending"}
        </span>

        <select
          value={question.status || "Pending"}
          onChange={(e) => onToggleQuestion(question.id, e.target.value)}
          className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-blue-500"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button
          onClick={() => onDeleteQuestion(question.id)}
          className="rounded-lg border border-slate-700 px-3 py-2 text-sm hover:bg-slate-800"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
