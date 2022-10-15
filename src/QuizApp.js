import { AnswerList } from "./components/AnswerList";
import CardHeader from "./components/CardHeader";

import QuizAppState from "./components/states/QuizAppState";

function QuizApp() {
  return (
        <QuizAppState>
          <CardHeader/>
          <AnswerList/>
        </QuizAppState>
      
  );
}

export default QuizApp;
