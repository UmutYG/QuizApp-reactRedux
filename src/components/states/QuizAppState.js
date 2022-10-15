import QuizAppContext from '../context/quizapp-context'
import {  useEffect, useReducer } from 'react';
import Axios from 'axios';
import QuizAppReducer from '../reducers/QuizAppReducer';


const QuizAppState = (props) => {
    const initialState = {
      question: "",
      wrongAnswers: [],
      correctAnswer : ""
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
        type:"SET_WRONG_ANSWERS",
        payload: [...res.data[0].incorrectAnswers]
      });

      dispatch({
        type:"SET_CORRECT_ANSWER",
        payload: res.data[0].correctAnswer
      });
      
      });
  },[]);
  
    return (
      <QuizAppContext.Provider
        value={{ question: state.question, wrongAnswers: state.wrongAnswers, correctAnswer: state.correctAnswer }}
      >{props.children}
      </QuizAppContext.Provider>
    );
  };
  
  
  export default QuizAppState;
  