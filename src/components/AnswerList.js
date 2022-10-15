
import React from 'react'
import { useContext } from 'react'
import { Answer } from './Answer'
import QuizAppContext from './context/quizapp-context'
export const AnswerList = () => {
  const {correctAnswer, wrongAnswers} = useContext(QuizAppContext);
  const answers = [...wrongAnswers, correctAnswer];

  return (
    <ul className="list-group list-group-flush" id="ansList"> 
      {
        answers.map((a,index)=> {
          return <Answer key={a} answer={a} index = {index}></Answer>
        })
      }
        
    </ul>
  )
}
