import React, { useState } from 'react';

// styling
import './TestContainer.css';

// data
import {testQuestions} from '../../db/fakeDb'

const ResultItem = props => {
    const {aData, qData} = props
    const {id, directions, question, choices, correct } = qData
    const answer = aData.choice

    let mapKey = -1
    let letterArr = ["a", "b", "c", "d"]

    const setChoiceClass = letter =>{
        if (letter === correct && letter === answer) return 'r-answered-correct'
        if (letter === correct) return "r-correct-option"
        if (letter === answer) return "r-answer-option"
    }

    return (
        // same css as Question.js
        <div className="Question cfb"> 
            <h3 className="cfb">
                {answer === correct ? "Correct!" : "Incorrect"}
            </h3>
            <h3 className="q-directions"><i>{directions}</i></h3>
            <div className="q-container">
                <h3>{id + ". " + question}</h3>
                {choices.map(choice=> {
                    mapKey++
                    return(
                        <p className={setChoiceClass(letterArr[mapKey])}>
                            {letterArr[mapKey] + ". " + choice}
                        </p>
                    )
                })}
            </div>
        </div>
    );
}

export default ResultItem;
