import React from "react";

import Axios from "axios";
import { useContext } from "react";
import {connect} from 'react-redux'


const CardHeader = (props) => {
  const { question, dispatch } = props;

  const getNextQuestion = () => {
    Axios.get("https://the-trivia-api.com/api/questions?limit=1").then(
      (res) => {
        dispatch({
          type: "SET_QUESTION",
          payload: res.data[0].question,
        });
        dispatch({
          type: "SET_WRONG_ANSWERS",
          payload: [...res.data[0].incorrectAnswers],
        });

        dispatch({
          type: "SET_CORRECT_ANSWER",
          payload: res.data[0].correctAnswer,
        });
      }
    );
  };
  return (
    <>
      <div className="card-body">
        <div>
          <h5 className="card-title " id="qTitle">
            Question
          </h5>
          <p className="card-text" id="qText">
            {question}
          </p>
        </div>
        <div className="button-next">
        <button onClick={getNextQuestion} className="btn btn-primary">
          Next Question
        </button>
      </div>
      </div>
      <div className="time-bar">
        <span></span>
        <strong className="seconds"></strong>
      </div>
      
    </>
  );
};

const mapStateToProps = (state) => {
    return {
      question : state.question,
      dispatch : state.dispatch
    }
  }
export default connect(mapStateToProps)(CardHeader);
