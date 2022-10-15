import React from 'react'
import { useState } from 'react';
import { useContext } from 'react'

import {connect } from 'react-redux'


export const Answer = (props) => {

  
  const [isTrue, setIsTrue] = useState("none");
  const [disabled, setDisabled] = useState("none");

  const checkAnswer = (ans) => {
    if(ans === props.correctAnswer)
    {
      setIsTrue("correct");
      document.querySelectorAll(".option").forEach((o)=>o.classList.add("disabled"));
      document.querySelector(".button-next").style.display = "block";
    }
    else
    {
      setIsTrue("wrong");
      document.querySelectorAll(".option").forEach((o)=>o.classList.add("disabled"));
      document.querySelector(".button-next").style.display = "block";
    }
  }
  
  
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

const mapStateToProps = (state) => {
  return {
    correctAnswer : state.correctAnswer
  }
}

export default connect(mapStateToProps)(Answer);


