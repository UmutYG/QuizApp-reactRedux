import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import QuizAppContext from './context/quizapp-context';

const TimeStamp = () => {
    const {correctAnswer} = useContext(QuizAppContext);
    let lineWidth = 0;

 
    setInterval(()=>{
        document.querySelector(".progress-bar").style.width = lineWidth + 'px';
        lineWidth += 7.7;
        
    },100);
    
    return (
        <div className="progress">
        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" aria-label="Warning striped example" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    )
    }

export default TimeStamp