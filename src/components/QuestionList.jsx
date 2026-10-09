import React, { useState } from "react";
import QuestionCard from "./QuestionCard";

const QuestionList = ({
  questions,
  onAddQuestion,
  onToggleQuestion,
  onDeleteQuestion,
}) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [errorField, setErrorField] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [status, setStatus] = useState("Pending");
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [difficultyFilter, setDifficultyFilter] = useState("All");

  const filteredQuestions = questions.filter((question) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      question.title.toLowerCase().includes(search) ||
      question.category.toLowerCase().includes(search) ||
      question.difficulty.toLowerCase().includes(search);

    const matchesCategory =
      categoryFilter === "All" || question.category === categoryFilter;

    const matchesStatus =
      statusFilter === "All" || (question.status || "Pending") === statusFilter;

    const matchesDifficulty =
      difficultyFilter === "All" || question.difficulty === difficultyFilter;

    return (
      matchesSearch && matchesCategory && matchesStatus && matchesDifficulty
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Please enter a question title.");
      setErrorField("title");
      return;
    }

    if (!category) {
      setError("Please select a category.");
      setErrorField("category");
      return;
    }

    setError("");
    setErrorField("");

    setError("");

    onAddQuestion({
      title: title.trim(),
      category: category.trim(),
      difficulty,
      status,
    });

    setTitle("");
    setCategory("");
    setDifficulty("Easy");
    setStatus("Pending");
    setShowForm(false);
  };

  return (
    <section className="mt-10">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">Your Questions</h2>

          <input
            type="text"
            placeholder="Search questions by title or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mt-4 w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
          />
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white outline-none focus:border-blue-500"
          >
            <option value="All">All Categories</option>
            <option value="DSA">DSA</option>
            <option value="Git">Git</option>
            <option value="Technical">Technical</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white outline-none focus:border-blue-500"
          >
            <option value="All">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>

          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
            className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white outline-none focus:border-blue-500"
          >
            <option value="All">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="shrink-0 rounded-lg bg-blue-600 px-4 py-2 font-medium transition hover:bg-blue-500"
        >
          + Add Question
        </button>
      </div>
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mb-6 space-y-4 rounded-xl border border-slate-800 bg-slate-900 p-5"
        >
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Question
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g build a CRUD app"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
            />
            {errorField === "title" && (
              <p className="mt-2 text-sm text-red-400">{error}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
            >
              <option value="">Select Category</option>
              <option value="DSA">DSA</option>
              <option value="Git">Git</option>
              <option value="Technical">Technical</option>
            </select>
            {errorField === "category" && (
              <p className="mt-2 text-sm text-red-400">{error}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Difficulty
            </label>

            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">Status</label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-5 py-2 font-medium hover:bg-blue-500"
          >
            Save Question
          </button>
        </form>
      )}

      {questions.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-700 p-10 text-center">
          <h3 className="text-lg font-semibold text-slate-300">
            No questions yet
          </h3>
          <p className="mt-2 text-sm text-slate-400">
            Add your first interview question to get started!
          </p>
        </div>
      ) : filteredQuestions.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-700 p-10 text-center">
          <h3 className="text-lg font-semibold text-slate-300">
            No matching questions found
          </h3>
          <p className="mt-2 text-sm text-slate-400">
            Try changing your search or filters.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {filteredQuestions.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
              onToggleQuestion={onToggleQuestion}
              onDeleteQuestion={onDeleteQuestion}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default QuestionList;
