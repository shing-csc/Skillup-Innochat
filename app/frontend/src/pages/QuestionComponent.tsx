import { IntentRecognitionResult } from 'microsoft-cognitiveservices-speech-sdk'
import React from 'react'
import { Container, ButtonGroup, ToggleButton, Form} from 'react-bootstrap'

interface Props {
    now: number;
    setNow: (value: number) => void;
    question: number;
}

const QuestionComponent = ({now, setNow, question}: Props) => {
    return (
        <div>
            <Form>
                <label style = {{fontSize:"large"}}>Question {question}: </label>
                <Form.Check
                    
                    label="1"
                    name="group1"
                    type={'radio'}
                    id={`reverse-radio-1`}
                    onChange = {(e) => 
                        /** e.target: element that triggers the event:  itself */
                        setNow(now + 10)
                    }
                />
                <Form.Check
                    label="2"
                    name="group1"
                    type={'radio'}
                    id={`reverse-radio-2`}
                    onChange = {(e) => 
                        /** e.target: element that triggers the event:  itself */
                        setNow(now + 10)
                    }
                />
                <Form.Check
                    label="3"
                    name="group1"
                    type={'radio'}
                    id={`reverse-radio-3`}
                    onChange = {(e) => 
                        /** e.target: element that triggers the event:  itself */
                        setNow(now + 10)
                    }
                />
                <div> <h2 > <br/> </h2></div>
            </Form>
            
        </div>
    )
}

export default QuestionComponent

