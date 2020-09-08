import React, {useState} from 'react';

// styling
import './TestContainer.css';

// data
import { testQuestions } from '../../db/fakeDb'

const Question = props => {
    // const {} = props
    const [answer, setAnswer] = useState('')
    const {id, directions, question, choices, correct } = testQuestions[0]
    let mapKey = -1
    let letterArr = ["a.", "b.", "c.", "d."]
    return (
        <div className="Question cfb">
            <h3><i>{directions}</i></h3>
            <div className="question-container">
                <h3>{id + ". " + question}</h3>
                <form>
                    <label> 
                        <select size={4} onClick={e => setAnswer(e.target.value)}>
                            {choices.map(choice => {
                                mapKey++
                                return (
                                    <option key={mapKey}>
                                        {letterArr[mapKey] + " " + choice}
                                    </option>
                                )
                            })}
                        </select>
                        <br/>
                        <input type="submit" />
                    </label>
                </form>
            </div>
        </div>
    );
}

export default Question;
