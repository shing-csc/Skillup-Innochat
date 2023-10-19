import React, { useEffect, useState } from 'react';
import { ProgressBar, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProgressPage = () => {
    const [progress, setProgress] = useState(0); 
    const [finished, setFinished] = useState(false);
    const [fetched, setFetched] = useState(false);
    const navigate = useNavigate();
    const [progressText, setProgressText] = useState("0% Completed");

    useEffect(() => {
        // Fetch data asynchronously
        const fetchData = async () => {
            try {
                const response = await fetch('/json');
                if (response.status === 200) { // if status code is 200
                    setFetched(true);
                    console.log("Fetched")
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
    
        fetchData();
    
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
    }, []); // Removed fetched from the dependency array
    
    useEffect(() => {
        if (finished === true && fetched === true) {
            setProgressText("Generated Study Plan!")
            setTimeout(() => {
                navigate('/main'); // Navigate to the new page
            }, 1000);
        }
        else if (finished === true && fetched === false) {
            setProgressText("Generating Study Plan...")
        }
    }, [finished, fetched]);

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