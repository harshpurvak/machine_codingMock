import React from "react";
import StatCard from "./components/StatCard";
import QuestionList from "./components/QuestionList";
import { useState, useEffect } from "react";

const App = () => {
  const [questions, setQuestions] = useState(() => {
    const savedQuestions = localStorage.getItem("interviewQuestions");

    if (!savedQuestions) return [];

    return JSON.parse(savedQuestions).map((question) => ({
      ...question,
      status: question.status || (question.completed ? "Completed" : "Pending"),
    }));
  });

  const [machineCodingStatus, setMachineCodingStatus] = useState(
    () => localStorage.getItem("machineCodingStatus") || "Not Started",
  );

  useEffect(() => {
    localStorage.setItem("machineCodingStatus", machineCodingStatus);
  }, [machineCodingStatus]);

  useEffect(() => {
    localStorage.setItem("interviewQuestions", JSON.stringify(questions));
  }, [questions]);

  const addQuestion = (newQuestion) => {
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      {
        ...newQuestion,
        id: crypto.randomUUID(),
        status: newQuestion.status || "Pending",
      },
    ]);
  };

  const deleteQuestion = (id) => {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== id),
    );
  };

  const toggleQuestionStatus = (id, newStatus) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === id ? { ...question, status: newStatus } : question,
      ),
    );
  };
  const totalQuestions = questions.length;

  const completedQuestions = questions.filter(
    (question) => question.status === "Completed",
  ).length;

  const completedDSAQuestions = questions.filter(
    (question) =>
      question.category === "DSA" && question.status === "Completed",
  ).length;

  const completedInterviewQuestions = questions.filter(
    (question) =>
      question.category === "Git" && question.status === "Completed",
  ).length;

  const completedTechnicalQuestion = questions.filter(
    (question) =>
      question.category === "Technical" && question.status === "Completed",
  ).length;

  const pendingQuestions = questions.filter(
    (question) => question.status === "Pending",
  ).length;

  const completionRate =
    totalQuestions === 0
      ? 0
      : Math.round((completedQuestions / totalQuestions) * 100);
  const stats = [
    {
      title: "Total Questions",
      value: totalQuestions,
      color: "text-white",
    },
    {
      title: "Pending Questions",
      value: pendingQuestions,
      color: "text-yellow-400",
    },
    {
      title: "Completed DSA Problems",
      value: completedDSAQuestions,
      color: "text-green-400",
    },
    {
      title: "Completed Interview Questions",
      value: completedInterviewQuestions,
      color: "text-blue-400",
    },
    {
      title: "Completed Machine Coding Status",
      value: completedTechnicalQuestion,
      color: "text-yellow-400",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 px-6 py-4">
        <h1 className="text-2xl font-bold">Interview Practice Tracker</h1>
      </header>

      <main className="p-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              color={stat.color}
            />
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-5">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Overall Progress</h2>
            <span className="text-sm font-medium text-blue-400">
              {completionRate}%
            </span>
          </div>

          <div className="h-3 w-full overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-blue-500 transition-all duration-500"
              style={{ width: `${completionRate}%` }}
            ></div>
          </div>

          <p className="mt-3 text-sm text-slate-400">
            {completedQuestions} out of {totalQuestions} questions completed
          </p>
        </div>

        <section className="mt-10">
          <QuestionList
            questions={questions}
            onAddQuestion={addQuestion}
            onToggleQuestion={toggleQuestionStatus}
            onDeleteQuestion={deleteQuestion}
          />
        </section>
      </main>
    </div>
  );
};

export default App;
