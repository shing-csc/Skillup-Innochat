import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, ProgressBar, ButtonGroup, ToggleButton, Form} from 'react-bootstrap'
import QuestionComponent from './QuestionComponent'
import './styles.css'

const Quiz = () => {

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
                    <h2>Quiz: Chapter 1 </h2>
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
                                choices = {[
                                    'TruAccent™ Speech Recognition', 
                                    'Dynamic Immersion', 
                                    'Extended Learning Features', 
                                    'All of the above'
                                ]}
                                content = "Rosetta Stone is a widely recognized platform for learning new languages. Which of the following features does Rosetta Stone offer to enhance your language learning experience?"
                            />

                            <QuestionComponent
                                now = {now}
                                setNow = {setNow}
                                question = {2}
                                choices = {[
                                    'Use the interactive subtitles', 
                                    'Take advantage of the quizzes', 
                                    'Use the "learn mode"', 
                                    'All of the above'
                                ]}
                                content = "FluentU is a language learning platform that uses real-world videos to immerse users in a language. How can you best utilize FluentU to improve your language skills?"
                            />
                        </div>

                        <div>
                            <h2> <br/> </h2>
                            <button
                                className='webFormButton'
                                type = "submit"
                                aria-label = "Submit"
                                onClick = {()=> {navigate('/main');
                                            window.scrollTo(0, 0);}}
                            > 
                                <div style = {{fontFamily: " 'Times New Roman', Times, serif"}}> <b> Submit </b></div>
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

export default Quiz