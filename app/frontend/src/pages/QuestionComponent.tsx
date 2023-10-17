import { IntentRecognitionResult } from 'microsoft-cognitiveservices-speech-sdk'
import React from 'react'
import { Container, ButtonGroup, ToggleButton, Form} from 'react-bootstrap'

interface Props {
    now: number;
    setNow: (value: number) => void;
    question: number;
    choices: string[];
    content: string;
}

const QuestionComponent = ({now, setNow, question, choices, content}: Props) => {
    
    return (
        <div>
            <Form>
                <label style = {{fontSize:"large"}}>Question {question}: {content}</label>
                {
                    choices.map((choice, index) => (
                        <Form.Check
                            key={index}
                            label={choice}
                            name={`group${question}`}
                            type={'radio'}
                            id={`reverse-radio-${index}`}
                            onChange = {(e) => setNow(now + 10)}
                            />
                    )
                    )
                }
                <div> <h2 > <br/> </h2></div>
            </Form>
            
        </div>
    )
}

export default QuestionComponent

