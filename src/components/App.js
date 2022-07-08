import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:4000/questions")
    .then(resp => resp.json())
    .then(data => setQuestions(data));
  },[])

  const onSubmitForm = (newQuestion) => {
    setQuestions([...questions, newQuestion])
  }

  const onDeleteQuestion = (id) => {
    const newQuestions = questions.filter(question => question.id !== id)
    setQuestions(newQuestions);
  }

  const onEditAnswer = (edit) => {
    const editedQuestionList = questions.map(question => {
      if (question.id === edit.id){
        return edit;
      }
      else {
        return question;
      }
    })
    setQuestions(editedQuestionList);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onSubmitForm={onSubmitForm}/> : <QuestionList onEditAnswer={onEditAnswer} onDeleteQuestion={onDeleteQuestion} questions={questions}/>}
    </main>
  );
}

export default App;
