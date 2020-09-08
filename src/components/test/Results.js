import React, {useState} from 'react';

// styling
import './TestContainer.css';

// data
import {testQuestions} from '../../db/fakeDb'

const TestContainer = () => {
  const [allAnswers, setAllAnswers] = useState([])
  const [qNumber, setQNumber] = useState(1)

  const submitAnswer = answer => {
    setAllAnswers([answer, ...allAnswers]) 
    setQNumber(qNumber+1)
  }

  const currentQuestion = () => {
    let qData = testQuestions.filter(q => q.id === qNumber)[0]
    return <Question submitAnswer={submitAnswer} qData={qData}/>
  }

  return (
    <div className="TestContainer">
      {/* {qNumber < testQuestions.length ?
        currentQuestion() :
          <Results allAnswers={allAnswers}/>} */}
        <Results />
    </div>
  );
}

export default TestContainer;
