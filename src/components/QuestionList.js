import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, onDeleteQuestion, onEditAnswer}) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(question => {
        return <QuestionItem question={question} key={question.id} onDeleteQuestion={onDeleteQuestion} onEditAnswer={onEditAnswer}/>
      })}</ul>
    </section>
  );
}

export default QuestionList;
