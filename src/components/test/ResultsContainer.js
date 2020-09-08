import React, { useState } from 'react';

// styling
import './TestContainer.css';

// components
import ResultItem from './ResultItem'

// data
import {testQuestions} from '../../db/fakeDb'

const ResultsContainer = props => {
    const {allAnswers} = props
    return (
        <div className="ResultsContainer cfb">
            {testQuestions.map(qData => {
                const aData = allAnswers.filter(a => a.id === qData.id)[0]
                return <ResultItem qData={qData} aData={aData}/>
            })}
        </div>
    );
}

export default ResultsContainer;
