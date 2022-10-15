import React from 'react'



export const Answer = (props) => {
  console.log(props);
  return (
    <li className='list-group-item option'>
        <div>
        <span >{String.fromCharCode(65+props.index)}: </span>
            <span id="answerText">
                {props.answer}
            </span>
        </div>
      </li>
  )
}


