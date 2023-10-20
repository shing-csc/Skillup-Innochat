import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Link, Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react'
import { Container, Row, Col, Navbar, Nav} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Video = () => {
    const { videoId } = useParams();
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;
    const navigate = useNavigate();

    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid style = {{position:"relative", paddingLeft:"10%", paddingRight:"10%", paddingTop:"10px", paddingBottom:"10px"}}>
                <Navbar.Brand onClick={() => navigate("/main")}> SkillUp </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '150px' }}
                    navbarScroll
                >
                    <Nav.Link onClick={() => navigate("/chat")}>Chatbot</Nav.Link>
                    <Nav.Link onClick={() => navigate("/todolist")}>To-do List</Nav.Link>
                    <Nav.Link onClick={() => navigate("/lifelonglearning")}> </Nav.Link>
                    <NavDropdown title="Lifelong Learning" id="navbarScrollingDropdown">
                        <NavDropdown.Item onClick={() => navigate("/dashboard")}>
                            Learning Dashboard
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate("/job")}>
                            Job Openings
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        
                    </NavDropdown>
                </Nav>
                <Form className="d-flex" >
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <button >Search</button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <div style={{ maxWidth: '60rem', maxHeight: '60rem',margin: '0 auto' }}>
            <div style={{ overflow: 'hidden', paddingTop: '56.25%', position: 'relative' }}>
                <iframe 
                    src={videoUrl} 
                    title="YouTube video player" 
                    style={{
                        border: '0',
                        height: '100%',
                        left: '0',
                        position: 'absolute',
                        top: '0',
                        width: '100%',
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                />
            </div>
        </div>
                        <div>
                            <h2> <br/></h2>
                            <center>
                            <button
                                className='webFormButton'
                                type = "submit"
                                aria-label = "Submit"
                                onClick = {()=> {navigate('/quiz');
                                            window.scrollTo(0, 0);}}
                            > 
                                <div style = {{fontFamily: " 'Times New Roman', Times, serif"}}> <b> Quiz </b></div>
                            </button>
                            </center>
                        </div>
        </>
    );
}
