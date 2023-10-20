import React from 'react';
import { Pie, Line } from 'react-chartjs-2';
import { PieChart } from 'react-minimal-pie-chart';
import { Container, Row, Col, Navbar, Nav} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Bar } from "react-chartjs-2"; 


interface Props {
    
}

const DashBoard = (props: Props) => {

    const navigate =  useNavigate();
    const data = { 
        labels: ["Sunday", "Monday", "Tuesday", 
          "Wednesday", "Thursday", "Friday", "Saturday"], 
        datasets: [ 
          { 
            label: "Hours Studied in Geeksforgeeks", 
            data: [2, 5, 6, 7, 3, 3, 4], 
            backgroundColor: "#02b844", 
            borderWidth: 1, 
            borderColor: "#000000", 
          } 
        ] 
      } 



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

        

            <Container>
                <Col md = {4}>
                </Col>
                <Col md = {4}>

                    <h2> <br/> </h2>
                    <h2 style = {{textAlign: "center"}}> Time spend per course </h2>
                    <h2> <br/> </h2>

                    <PieChart
                        data={[
                            { title: 'Data Science', value: 25, color: '#E38627' },
                            { title: 'Finance', value: 30, color: '#C13C37' },
                            { title: 'Language', value: 45, color: '#6A2135' },
                        ]}
                        label={({ dataEntry }) => `${dataEntry.title}: ${dataEntry.value}`}
                        labelStyle={{
                            fill: '#fff',
                            fontSize: '5px',
                            
                        }}
                    />;
                </Col>
                <Col md = {4}>
                </Col>
               
                
            </Container>
        </>
    );
}

export default DashBoard;
