import React, { useEffect, useState } from 'react';
import { ProgressBar, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProgressPage = () => {
    const [progress, setProgress] = useState(0); 
    const [finished, setFinished] = useState(false);
    const navigate = useNavigate();
    const [progressText, setProgressText] = useState("0% Completed");

    useEffect(() => {
        if (finished === true) {
            setTimeout(() => {
                navigate('/chat'); // Navigate to the new page
            }, 500); // Set a timeout to wait for the progress bar animation to finish
        }
        // Set an interval to update the progress
        const interval = setInterval(() => {
            setProgress((oldProgress) => {
                const newProgress = oldProgress + Math.random() * 35;
                setProgressText(Math.round(newProgress) + '% Completed')
                if (newProgress >= 100) {
                    setProgressText("100% Completed");
                    clearInterval(interval); // Clear the interval if the progress has reached 100%
                    setFinished(true);
                }
                return newProgress;
            });
        }, 500);

        return () => clearInterval(interval); // Clear the interval when the component unmounts
    }, [finished]);

    return (
        <Container style={{ height: '100vh' }}>
            <Row className="align-items-center justify-content-center" style={{ height: '100%' }}>
                <Col md="auto">
                    <h3>{progressText}</h3>
                    <ProgressBar now={progress} />
                </Col>
            </Row>
        </Container>
    );
}

export default ProgressPage;