
import React, { Children } from 'react'
import { useContext } from 'react'
import { Answer } from './Answer'
import {connect} from 'react-redux'

export const AnswerList = (props) => {
  const {correctAnswer, wrongAnswers} = props;
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

const mapStateToProps = (state) => {
  return {
    correctAnswer : state.correctAnswer,
    wrongAnswers : state.wrongAnswers
  }
}

export default connect(mapStateToProps)(AnswerList);
