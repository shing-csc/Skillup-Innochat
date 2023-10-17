import { IntentRecognitionResult } from 'microsoft-cognitiveservices-speech-sdk'
import {useState} from 'react'
import {Form} from 'react-bootstrap'

interface Props {
    now: number;
    setNow: (value: number) => void;
    question: number;
    choices: string[];
    content: string;
}

const QuestionComponent = ({now, setNow, question, choices, content}: Props) => {
    
    const [checked, setChecked] = useState(false);

    return (
        <div>
            <Form>
            
                <label>
                    Question {question}: {content}
                </label>
                {
                    choices.map((choice, index) => (
                        <Form.Check
                            key={index}
                            label={choice}
                            name={`group${question}`}
                            type={'radio'}
                            id={`reverse-radio-${index}`}
                            onChange = {(e) =>{
                                if (checked == false){
                                    setChecked(true)
                                    setNow(now + 13)
                                }
                            }}
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

