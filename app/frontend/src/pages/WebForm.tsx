import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, ProgressBar, ButtonGroup, ToggleButton, Form} from 'react-bootstrap'
import QuestionComponent from './QuestionComponent'
import './styles.css'

const WebForm = () => {

    const [now, setNow] = useState(0) 
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
                                
                                <h6 style = {{textAlign: "left", textDecoration: "underline"}}> Progress Bar </h6>
                                <h6 > Ongoing: {now}%</h6>
                        

                        <ProgressBar 
                            now = {now} 
                            label = {`${now}%`} 
                            visuallyHidden
                            animated
                            
                            variant="success"
                            
                        />

                        <div> <h1> <br/> </h1></div>
                        <div> <h1> <br/> </h1></div>

                        <div>
                            <h6 style = {{textAlign: "left", textDecoration: "underline"}}>
                                Resume Submission
                            </h6>
                            <Form.Group controlId="formFile" className="mb-3" style = {{width: "20rem"}}>
                                <Form.Label style = {{textAlign: "left"}}> 
                                    We will analysis your skills based on the file you submitted 
                                    </Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                        </div>
                        </div>

                    </Col>

                    <Col md = {1} lg = {1}>
                            
                    </Col>
                    

                    <Col md = {8}>
                        <div>
                            <h4>
                                Questions regarding the learning subjects
                            </h4>
                            <QuestionComponent
                                now = {now}
                                setNow = {setNow}
                                question = {1}
                                choices = {['Student', 'Technology', 'Healthcare', 'Finance', 'Education', 'Other']}
                                content = "What is your current occupation or industry background?"
                            />
                            <QuestionComponent
                                now = {now}
                                setNow = {setNow}
                                question = {2}
                                choices = {['Software Developer', 'Data Scientist', 'Product Manager', 'Designer', 'Other']}
                                content = "Are there any specific job roles or positions that you aspire to?"
                            />
                            <QuestionComponent
                                now = {now}
                                setNow = {setNow}
                                question = {3}
                                choices = {['Programming Languages', 'Graphic Design', 'Video Editing', 'Language Learning']}
                                content = "Which specific topics are you interested in learning?"
                            />
                            <QuestionComponent
                                now = {now}
                                setNow = {setNow}
                                question = {4}
                                choices = {['Python', 'JavaScript', 'React.js', 'Adobe Photoshop', 'Other']}
                                content = "Are there any programming languages, software tools or frameworks you want to focus on?"
                            />
                           <QuestionComponent
                                now = {now}
                                setNow = {setNow}
                                question = {5}
                                choices = {['Beginner', 'Intermediate', 'Advanced']}
                                content = "What is your current level of experience or knowledge in the topic(s) you want to learn?"
                            />
                            <QuestionComponent
                                now = {now}
                                setNow = {setNow}
                                question = {6}
                                choices = {['Yes', 'No']}
                                content = "Have you had any past learning experience in the topic(s) you want to learn?"
                            />
                            <QuestionComponent
                                now = {now}
                                setNow = {setNow}
                                question = {7}
                                choices = {['Understanding Concepts', 'Lack of Practice', 'Lack of Resources', 'Time Management', 'Other']}
                                content = "Are there any difficulties you have encountered in the past while learning similar topics?"
                            />
                            <QuestionComponent
                                now = {now}
                                setNow = {setNow}
                                question = {8}
                                choices = {['Building a Website', 'Creating Professional Design', 'Becoming Fluent in a Language', 'Other']}
                                content = "Are there any specific goals or outcomes you wish to achieve by learning these topics?"
                            />
                        </div>

                        <div>
                            <h2> <br/> </h2>
                            <button
                                className='webFormButton'
                                type = "submit"
                                aria-label = "Submit"
                                onClick = {()=> {navigate('/webform2');
                                            window.scrollTo(0, 0);}}
                            > 
                                <div style = {{fontFamily: " 'Times New Roman', Times, serif"}}> <b> Behaviour questions </b></div>
                            </button>
                            <h2> <br/> </h2>
                            <h2> <br/> </h2>
                            
                        </div>

                    </Col>
                
                </Row>
                
            </Container>

        </div>
    )
}

export default WebForm