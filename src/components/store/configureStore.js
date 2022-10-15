import {createStore} from 'redux'

import React from 'react'
import QuizAppReducer from '../reducers/QuizAppReducer'

const configureStore = () => {
const store = createStore(QuizAppReducer);
  return store;
}

export default configureStore