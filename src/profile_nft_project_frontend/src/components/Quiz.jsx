import React, { useState } from "react";
//import { profile_nft_backend } from "../../../declarations/profile_nft_backend";
import { getPrincipalId } from "../auth/auth";

const Quiz = () => {
  const [answers, setAnswers] = useState([]);
  const [message, setMessage] = useState("");

  const questions = [
    {
      id: 1,
      question: "What is blockchain?",
      options: ["A database", "A programming language", "A network protocol"],
    },
    {
      id: 2,
      question: "What does ICP stand for?",
      options: ["Internet Computer Protocol", "Internet Communication Platform", "Internal Control Process"],
    },
  ];

  const handleAnswer = (questionId, optionIndex) => {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[questionId - 1] = optionIndex;
      return newAnswers;
    });
  };

  const submitQuiz = async () => {
    const pid = await getPrincipalId();
    const isValid = await profile_nft_backend.validateQuiz(pid, answers);
    if (isValid) {
      setMessage("Quiz validated successfully! Generating VC...");
      // Generate VC after quiz validation
      const credential = JSON.stringify({
        quizId: 1,
        date: new Date().toISOString(),
        result: "Passed",
      });
      await profile_nft_backend.generateVC(pid, credential);
      setMessage("Verifiable Credential generated and stored.");
    } else {
      setMessage("Quiz validation failed.");
    }
  };

  return (
    <div>
      <h2>Quiz</h2>
      {questions.map((q) => (
        <div key={q.id}>
          <p>{q.question}</p>
          {q.options.map((opt, idx) => (
            <label key={idx}>
              <input
                type="radio"
                name={`question-${q.id}`}
                onChange={() => handleAnswer(q.id, idx)}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}
      <button onClick={submitQuiz}>Submit Quiz</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Quiz;
