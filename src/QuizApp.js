import AnswerList  from "./components/AnswerList";
import CardHeader from "./components/CardHeader";
import { connect } from 'react-redux'

function QuizApp(props) {
  return (
       <>
          <CardHeader/>
          <AnswerList/>
            {/* <TimeStamp/> */}
        </>
  );
}



export default connect()(QuizApp);
