import React from 'react'

import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, ProgressBar, ButtonGroup, ToggleButton, Form} from 'react-bootstrap'
import QuestionComponent from './QuestionComponent'

interface Props {
    
}

const WebFormBahav = (props: Props) => {

    const [now, setNow] = useState(40) 
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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

                        <div style={{ marginBottom: "20px",
                                     textAlign: "center",
                                     position: "sticky",
                                     top: "10rem",
                                    

                                    }}>
                                <h6> Progress Bar: {now}%</h6>
                        

                        <ProgressBar 
                            now = {now} 
                            label = {`${now}%`} 
                            visuallyHidden
                            animated
                            
                            variant="success"
                            
                        />
                        </div>

                    </Col>
                    

                    <Col md = {9}>
                        <div>
                            <h4>
                                Questions regarding the studying styles
                            </h4>
                            <QuestionComponent
                                now = {now}
                                setNow = {setNow}
                                question = {1}
                                choices = {['Alone', 'In a group']}
                                content = "Do you prefer studying alone or in a group?"
                            />
                            <QuestionComponent
                                now = {now}
                                setNow = {setNow}
                                question = {2}
                                choices = {['Reading', 'Watching videos', 'Discussing with others']}
                                content = "How do you typically approach a new or complex topic?"
                            />
                            <QuestionComponent
                                now = {now}
                                setNow = {setNow}
                                question = {3}
                                choices = {['Taking notes', 'Creating mind maps', 'Discussing with others']}
                                content = "How do you usually organize information?"
                            />
                            <QuestionComponent
                                now = {now}
                                setNow = {setNow}
                                question = {4}
                                choices = {['Structured learning with clear goals and deadlines', 'Flexible and self-paced approach']}
                                content = "Are you more inclined towards structured learning with clear goals and deadlines, or do you prefer a more flexible and self-paced approach?"
                            />
                        </div>


                        <div>

                        <div>
                            
                            <button
                                className='webFormButton'
                                type = "submit"
                                aria-label = "Submit"
                                onClick = {()=> navigate('/progresspage')}
                                style = {{ top: "-3rem" }}
                            > 
                                <b> Generate Study Plan </b>
                            </button>
                        </div>

                        <div>
                            <h2> <br/> </h2>
                            <button
                                className='webFormButton'
                                type = "submit"
                                aria-label = "Submit"
                                onClick = {()=> navigate('/webform')}
                                style = {{position: "relative", left: "17rem", top: "-6rem" }}
                            > 
                                <b> Previous Page </b>
                            </button>
                        </div>

                        </div>
                      
                        <h2> <br/> </h2>
                        <h2> <br/> </h2>

                    </Col>
                
                </Row>
                
            </Container>

        </div>
    )
}

export default WebFormBahav
