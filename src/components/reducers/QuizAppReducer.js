
const QuizAppReducer = (state, action) => {
  switch (action.type) {
    case "SET_WRONG_ANSWERS":
        // always return same type as the state has.
      return {
        ...state,
        wrongAnswers : action.payload
      }
    case "SET_CORRECT_ANSWER":
    
    return {
      ...state,
      correctAnswer : action.payload
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

export default QuizAppReducer