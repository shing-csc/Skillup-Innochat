import React from 'react'
import { Link, Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react'
import { Container, Row, Col} from 'react-bootstrap'

import topics from "./Topics/topics.json"
import VideoBox from './VideoBox';

const Main = () => {

    /**
     * We will first do the week 1 instead of passing in week by week in a for loop 
     *  - As we do not have enough data
     *  - For simplicity
     *  */ 


    return (<>
        
        <div style={{backgroundColor: "white"}}>
            
            <Container>
                <h1> Week {topics.blender[0].week} </h1>

                {/** Course List: Date, Topic(Clickable Link), Thumbnail */}
                
                <div >
                    <Row style = {{display: "flex"}}>
                    {   
                        topics.python[0].content.slice(0,3).map((contentItem, index) => {
                            
                            return (
                                <Col>
                                    <VideoBox
                                        
                                        day = {contentItem.day}
                                        theme = {contentItem.theme}
                                        resource = {contentItem.resource}
                                        
                                    />
                                </Col>
                                )
                        })
                        
                    }
                    </Row>
                </div>
                <div>
                    <Row style = {{display: "flex"}}>
                    {
                        topics.python[0].content.slice(3,6).map((contentItem, index) => {
                            
                            return (
                                
                                <Col>
                                    <VideoBox
                                        
                                        day = {contentItem.day}
                                        theme = {contentItem.theme}
                                        resource = {contentItem.resource}
                                        
                                    />
                                </Col>
                                )
                        })
                    }
                    </Row>
                </div>

            </Container>                        
        </div>
        </>
    )
}

export default Main
