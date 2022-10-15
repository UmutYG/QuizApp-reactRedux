import React from 'react'

import { useContext } from 'react';
import QuizAppContext from './context/quizapp-context';

const CardHeader = () => {
    const {question} = useContext(QuizAppContext);
    console.log(question);
    return (
        <>
            <div className='card-body'>
                <div>
                    <h5 className="card-title " id="qTitle">Question</h5>
                    <p className="card-text" id="qText">{question}</p>
                </div>
            </div>
            <div className="time-bar">
                <span></span>
                <strong className="seconds"></strong>
            </div>
            <div className="button-next">
                <button className="btn btn-primary">Next Question</button>
            </div>
        </>
    )
}


export default CardHeader