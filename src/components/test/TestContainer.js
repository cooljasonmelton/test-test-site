import React, {useState} from 'react';

// styling
import './TestContainer.css';
import Question from './Question';

// components

const TestContainer = () => {
  const [allAnswers, setAllAnswers] = useState([])
  return (
    <div className="TestContainer">
      <Question/>

    </div>
  );
}

export default TestContainer;
