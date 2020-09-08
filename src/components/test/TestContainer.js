import React, {useState} from 'react';

// styling
import './TestContainer.css';

// components
import Question from './Question';

// data
import {testQuestions} from '../../db/fakeDb'
import ResultsContainer from './ResultsContainer';

const TestContainer = () => {
  const [allAnswers, setAllAnswers] = useState([])
  const [qNumber, setQNumber] = useState(0)

  const submitAnswer = answer => {
    setAllAnswers([...allAnswers, answer]) 
    setQNumber(qNumber + 1)
  }

  const currentQuestion = () => {
    const qData = testQuestions[qNumber]
    return <Question submitAnswer={submitAnswer} qData={qData}/>
  }

  return (
    <div className="TestContainer cfb">
      {qNumber < testQuestions.length ?
        currentQuestion() :
          <ResultsContainer allAnswers={allAnswers}/>}
    </div>
  );
}

export default TestContainer;
