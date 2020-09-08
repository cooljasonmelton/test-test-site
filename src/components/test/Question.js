import React, {useState} from 'react';

// styling
import './TestContainer.css';

const Question = props => {
    // props
    const { submitAnswer, qData } = props
    const { id, directions, question, choices, correct } = qData

    // state
    const [answer, setAnswer] = useState('')
    
    const handleSubmit = e => {
        e.preventDefault()
        submitAnswer({
            id: id,
            choice: answer.charAt(0),
            correct: correct,
        })
    }

    // as choices maped, each given a number as key 
    // and letter from letterArr
    let mapKey = -1
    let letterArr = ["a", "b", "c", "d"]

    return (
        <div className="Question cfb">
            <h3 className="q-directions"><i>{directions}</i></h3>
            <div className="q-container">
                <form className="cfb" onSubmit={e =>handleSubmit(e)}>
                    <label> 
                        <h3>{id + ". " + question}</h3>
                        <select size={4} 
                            onClick={e => setAnswer(e.target.value)}
                            value={answer}
                            className="q-select">
                            {choices.map(choice => {
                                mapKey++
                                return (
                                    <option key={mapKey}
                                        className="q-option">
                                        {letterArr[mapKey] + ". " + choice}
                                    </option>
                                )
                            })}
                        </select>
                        <br/>
                    </label>
                    <input className="q-submit" type="submit"  />
                </form>
            </div>
        </div>
    );
}

export default Question;
