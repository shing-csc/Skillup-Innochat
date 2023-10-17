import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, ProgressBar, ButtonGroup, ToggleButton, Form} from 'react-bootstrap'
import QuestionComponent from './QuestionComponent'
import './styles.css'

const WebForm = () => {

    const [now, setNow] = useState(0) 
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();

    return (
        < div style = {{backgroundColor: "white"}}>
            <Container >
                <Row>
                    <h2> <br/></h2>
                    <h2>Here is a form for us to know more about you. </h2>
                    <h2> <br/></h2>
                </Row>

                <Row>

                    <Col md ={3} >

                        <div style={{ marginBottom: "20px", textAlign: "center"}}>
                                <h6> Progress Bar: {now}%</h6>
                        </div>

                        <ProgressBar 
                            now = {now} 
                            label = {`${now}%`} 
                            visuallyHidden
                            animated
                            variant="success"
                            style = {{ 
                                position: "sticky"
                                
                        }}  
                        />

                    </Col>
                    

                    <Col md = {9}>
                        <div>
                            <h4>
                                Behavioral questions
                            </h4>
                            <QuestionComponent 
                                now = {now}
                                setNow = {setNow}
                                question = {1}
                                choices = {['Technology', 'Business', 'Lanaguages']}
                                content = "Which field are you more interested?"
                            />
                            <QuestionComponent
                                now = {now}
                                setNow = {setNow}
                                question = {2}
                                choices = {['Leverage your knowledge in a particular field', 
                                'For re-entering the labour market', 
                                'Learning for interest']}
                                content = "Do you have any specific goals for your study?"
                            />
                            <QuestionComponent
                                now = {now}
                                setNow = {setNow}
                                question = {3}
                                choices = {['Below 6 hours', 
                                'Between 6 - 10 hours', 
                                'More than 10 hours']}
                                content = "How many hours per week do you plan to dedicate to studying?"
                            />
                            
                        </div>

                        <div>
                            <h4>
                                Resume Submission
                            </h4>
                            <Form.Group controlId="formFile" className="mb-3" style = {{width: "40rem"}}>
                                <Form.Label> We will analysis your skills based on the file you submitted </Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                        </div>

                        <div>
                            <h2> <br/> </h2>
                            <button
                                className='webFormButton'
                                type = "submit"
                                aria-label = "Submit"
                                onClick = {()=> navigate('/chat')}
                            > 
                                <b> Proceed to our Personal Planner </b>
                            </button>
                        </div>
                        
                    </Col>
                
                </Row>
                
            </Container>
            

            
        </div>
    )
}

export default WebForm
