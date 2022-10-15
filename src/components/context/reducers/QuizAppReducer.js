import QuizAppContext from "../quizapp-context";
import {  useEffect, useReducer } from 'react';
import Axios from 'axios';

const QuizAppReducer = (state, action) => {
  switch (action.type) {
    case "SET_ANSWERS":
        // always return same type as the state has.
      return {
        ...state,
        answers : action.payload
      }
    case "SET_QUESTION":
        return {
            ...state,
            question : action.payload
        }
    default:
      return state;
  }
};

const QuizAppState = (props) => {
  const initialState = {
    question: "",
    answers: [],
  };

  const [state, dispatch] = useReducer(QuizAppReducer, initialState);

  useEffect(()=>{
    Axios.get(
    "https://the-trivia-api.com/api/questions?limit=1"
    ).then((res) => {
      dispatch({
        type:"SET_QUESTION",
        payload: res.data[0].question
      });
    dispatch({
      type:"SET_ANSWERS",
      payload: [...res.data[0].incorrectAnswers, res.data[0].correctAnswer]
    });
    });
},[]);

  return (
    <QuizAppContext.Provider
      value={{ question: state.question, answers: state.answers }}
    >{props.children}
    </QuizAppContext.Provider>
  );
};



export default QuizAppState;
