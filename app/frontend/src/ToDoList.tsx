import { Container, Row, Col, Navbar, Nav} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';


import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCheckbox,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem,
    MDBRow,
    MDBTextArea,
    MDBTooltip,
  } from "mdb-react-ui-kit";

interface Props {
    
}

const ToDoList = (props: Props) => {

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
        
        <div>
        <section className="vh-100" style={{ backgroundColor: "#e2d5de" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol xl="10">
            <MDBCard style={{ borderRadius: "15px" }}>
              <MDBCardBody className="p-5">
                <h6 className="mb-3">Awesome Todo List</h6>
                <div className="d-flex justify-content-center align-items-center mb-4">
                  <MDBTextArea
                    label="What do you need to do today?"
                    id="textAreaExample"
                    rows={4}
                    wrapperClass="flex-fill"
                  />
                  <MDBBtn type="submit" size="lg" className="ms-2">
                    Add
                  </MDBBtn>
                </div>
                <MDBListGroup className="mb-0">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                    <div className="d-flex align-items-center">
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        id="flexCheckChecked"
                        className="me-3"
                      />
                      Language Course Lecture One Quiz
                    </div>
                    <MDBTooltip
                      tag="a"
                      wrapperProps={{ href: "#!" }}
                      title="Remove item"
                    >
                      <MDBIcon fas icon="times" color="primary" />
                    </MDBTooltip>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                    <div className="d-flex align-items-center">
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        id="flexCheckChecked"
                        className="me-3"
                        defaultChecked
                      />
                      <s>Language Course Lesson Two Review</s>
                    </div>
                    <MDBTooltip
                      tag="a"
                      wrapperProps={{ href: "#!" }}
                      title="Remove item"
                    >
                      <MDBIcon fas icon="times" color="primary" />
                    </MDBTooltip>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                    <div className="d-flex align-items-center">
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        id="flexCheck"
                        className="me-3"
                      />
                      Language Course Lecture Three Video
                    </div>
                    <MDBTooltip
                      tag="a"
                      wrapperProps={{ href: "#!" }}
                      title="Remove item"
                    >
                      <MDBIcon fas icon="times" color="primary" />
                    </MDBTooltip>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                    <div className="d-flex align-items-center">
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        id="flexCheck"
                        className="me-3"
                      />
                      Finance Course Lesson Four Video 
                    </div>
                    <MDBTooltip
                      tag="a"
                      wrapperProps={{ href: "#!" }}
                      title="Remove item"
                    >
                      <MDBIcon fas icon="times" color="primary" />
                    </MDBTooltip>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                    <div className="d-flex align-items-center">
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        id="flexCheckChecked"
                        className="me-3"
                        defaultChecked
                      />
                      Finance Course Lecture Five Quiz 
                    </div>
                    <MDBTooltip
                      tag="a"
                      wrapperProps={{ href: "#!" }}
                      title="Remove item"
                    >
                      <MDBIcon fas icon="times" color="primary" />
                    </MDBTooltip>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                    <div className="d-flex align-items-center">
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        id="flexCheck"
                        className="me-3"
                      />
                      Registration of Data Science Course
                    </div>
                    <MDBTooltip
                      tag="a"
                      wrapperProps={{ href: "#!" }}
                      title="Remove item"
                    >
                      <MDBIcon fas icon="times" color="primary" />
                    </MDBTooltip>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
        </div>
        
        
        
        </>
        
    )
}

export default ToDoList