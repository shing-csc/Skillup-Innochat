import {useState, useEffect} from 'react'
import { Container, Row, Col, ProgressBar, ButtonGroup, ToggleButton, Form} from 'react-bootstrap'
import QuestionComponent from './QuestionComponent'

const WebForm = () => {

    const [now, setNow] = useState(0) 
    const [checked, setChecked] = useState(false);

    return (
        <>
            <Container>
                <Row>
                    <h2> <br/></h2>
                    <h2>Here is a form for us to know more about you. </h2>
                    <h2> <br/></h2>
                </Row>
                <Row>

                    <Col md ={3}>
                        <ProgressBar 
                            now = {now} 
                            label = {`${now}%`} 
                            visuallyHidden
                            style = {{ position: "sticky"}}
                            />
                    </Col>

                    <Col md = {9}>
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
                    
                    </Col>
                
                </Row>
            </Container>
        
        
        
        
        
        </>
    )
}

export default WebForm
