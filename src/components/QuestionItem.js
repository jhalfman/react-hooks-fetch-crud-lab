import React from "react";

function QuestionItem({ question, onDeleteQuestion, onEditAnswer }) {
  const { id, prompt, answers, correctIndex } = question;

  const handleDelete = () => {
    fetch(`http://localhost:4000/questions/${id}`, {
    method: "DELETE",
  })
    .then((resp) => resp.json())
    .then(() => onDeleteQuestion(id));
  }

  const handleAnswerchange = (e) => {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
       "Content-Type": "application/json",
    },
      body: JSON.stringify({
        "correctIndex": e.target.value,
      }),
    })
    .then(resp => resp.json())
    .then(data => onEditAnswer(data))
  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleAnswerchange}>{options}</select>
      </label>
      <button onClick={(e) => handleDelete()}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
