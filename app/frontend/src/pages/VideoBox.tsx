import React from 'react'
import { Container, Row, Col, Image, Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

interface Props {
    
    day: number,
    theme: string,
    resource: string;
    
}

const VideoBox = ({day, theme, resource}: Props) => {

    const navigate = useNavigate();

    let videoId = resource.split('v=')[1];

    if(videoId.indexOf('&') !== -1) {
        videoId = videoId.substring(0, videoId.indexOf('&'));
    }

    const thumbNailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

    return (
        <div>
            {/**<Row>
                <h3>
                    Day {day}
                </h3>
    </Row>*/}
            <Row>
                
                <Col>
                    
                <Card style={{ width: '18rem' }}>
                <div 
                    style= {{
                        maxWidth: '18rem',
                        background: `url(${thumbNailUrl}) no-repeat center center`,
                        backgroundSize: "cover",
                        aspectRatio:"16/9"
                    }}
                />
                    <Card.Body>
                    <Card.Title> Lesson {day}</Card.Title>
                    <Card.Text>
                        <h5> {theme} </h5>
                        <br/>
                    </Card.Text>
                    <button onClick={() => navigate(`/video/${videoId}`)}>Lesson</button>
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