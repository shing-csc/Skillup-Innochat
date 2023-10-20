import React from 'react'
import { Container, Row, Col, Image, Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

interface Props {
    
    title: string,
    level: string,
    number: string;
    company: string
    
}

const VideoBox = ({title, level, number, company}: Props) => {

    const navigate = useNavigate();

    return (
        <div>
            {/**<Row>
                <h3>
                    Day {day}
                </h3>
    </Row>*/}
            <Row>
                
                <Col>
                    
                <Card style={{ width: '38rem' }}>
                <div 
                    style= {{
                        maxWidth: '38rem',
                        backgroundSize: "cover",
                    }}
                />
                    <Card.Body>
                    <Card.Title> {title} </Card.Title>
                    <Card.Text>
                        <h5> {level} </h5>
                        <br/>
                        <h5> {company} </h5>
                    </Card.Text>

                    <button>Job Description</button>
                    </Card.Body>
                </Card>

               
                </Col>

                {/** Clickable Link */}
                <Col>
                    


                </Col>
                <h3> <br/> </h3>
            </Row>
        </div>
    )
}

export default VideoBox
