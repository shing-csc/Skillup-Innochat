import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Form, Image, Row, Col} from 'react-bootstrap';

import './styles.css';
import loginIcon from './Images/tree.jpeg';

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const navigate = useNavigate();

    return (
        <div style = {{backgroundColor: "white"}}>
            
            <Container >
                <Row>
                    <h1 > <br/> </h1>
                    <h1 > Make it Happen with SkillUp </h1>
                    <h2 > <br/> </h2>
                </Row>
                <Row>
                    
                    <Col sm = {0} lg = {7}>
                        <Image 
                            src = {loginIcon} 
                            rounded
                            style = {{width: "40rem", height: "30rem"}}/>
                    </Col>

                    <Col xs = {12} lg = {4} >
                        
                        <h2> Join today. </h2>
                        <Form className = "formContainer">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    placeholder="name@example.com" 
                                    required
                                    style = {{width: "16rem"}}
                                /></Form.Group>
                            
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    type = "text" 
                                    required
                                    style = {{width: "16rem"}}
                                /></Form.Group>

                            <button
                                className='registerButton'
                                type = "submit"
                                aria-label = "Submit"
                                onClick = {()=> navigate('/webform')}
                            > 
                                Register
                            </button>

                            <button
                                className='submitButton'
                                type = "submit"
                                aria-label = "Submit"
                                onClick = {()=> navigate('/webform')}
                            > 
                                Sign In
                            </button>

                                                   

                        </Form>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Login