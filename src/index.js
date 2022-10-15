import React from 'react';
import ReactDOM from 'react-dom/client';
import configureStore from './components/store/configureStore';
import { Provider } from 'react-redux';
import QuizApp from './QuizApp';
import './styles/style.css'
import Axios from 'axios';
const store = configureStore();

Axios.get(
  "https://the-trivia-api.com/api/questions?limit=1"
  ).then((res) => {
    
    store.dispatch({
      type:"SET_QUESTION",
      payload: res.data[0].question
    });
    
  store.dispatch({
    type:"SET_WRONG_ANSWERS",
    payload: [...res.data[0].incorrectAnswers]
  });

  store.dispatch({
    type:"SET_CORRECT_ANSWER",
    payload: res.data[0].correctAnswer
  });

  
  });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <QuizApp />
  </Provider>
);


