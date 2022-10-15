import React from 'react'
import { useState } from 'react';
import { useContext } from 'react'
import QuizAppContext from './context/quizapp-context'



export const Answer = (props) => {

  const {correctAnswer} = useContext(QuizAppContext);
  
  const [isTrue, setIsTrue] = useState("none");
  const [disabled, setDisabled] = useState("none");

  const checkAnswer = (ans) => ans == correctAnswer ?
  (setIsTrue("correct"), document.querySelectorAll(".option").forEach((o)=>o.classList.add("disabled")))
  :
  (setIsTrue("wrong") ,document.querySelectorAll(".option").forEach((o)=>o.classList.add("disabled")));
  
  
  return (
    <li className={'list-group-item option ' + isTrue + ' ' + disabled} onClick={()=>checkAnswer(props.answer)}>
        <div>
        <span >{String.fromCharCode(65+props.index)}: </span>
            <span id="answerText">
                {props.answer}
            </span>
        </div>
      </li>
  )
}


