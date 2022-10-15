import { AnswerList } from "./components/AnswerList";
import CardHeader from "./components/CardHeader";
import QuizAppContext from "./components/context/quizapp-context";
import { useState, useEffect } from 'react';
import Axios from 'axios';

function QuizApp() {

  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);

  useEffect(()=>{
      Axios.get(
      "https://the-trivia-api.com/api/questions?limit=1"
      ).then((res) => {
      setQuestion(res.data[0].question);
      setAnswers([...res.data[0].incorrectAnswers, res.data[0].correctAnswer]);
      });
  },[]);

  return (
    <QuizAppContext.Provider value = {{question, answers}}>
        <CardHeader/>
        <AnswerList/>
      </QuizAppContext.Provider>

  );
}

export default QuizApp;
