import React from 'react'
import { Container, Row, Col, Image, Card} from 'react-bootstrap'

interface Props {
    
    day: number,
    theme: string,
    resource: string;
    
}

const VideoBox = ({day, theme, resource}: Props) => {
    let videoId = resource.split('v=')[1];

    if(videoId.indexOf('&') !== -1) {
        videoId = videoId.substring(0, videoId.indexOf('&'));
    }

    const thumbNailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`

    return (
        <div>
            <Row>
                <h3>
                    Day {day}
                </h3>
            </Row>
            <Row>
                {/** The Image/Thumbnail */}
                <Col>
                    
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={thumbNailUrl} />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <button>Go somewhere</button>
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
