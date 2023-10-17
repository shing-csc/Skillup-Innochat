import React from 'react'
import { Link, Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react'
import { Container, Row, Col, ProgressBar, ButtonGroup, ToggleButton, Form} from 'react-bootstrap'

import topics from "./Topics/topics.json"

const Main = () => {


    return (<>
        
        <div style={{backgroundColor: "white"}}>
            
            <Container>
                <h1>{topics.blender[0].week} </h1>

                {/** Course List: Date, Topic(Clickable Link), Thumbnail */}
                <Col md = {6} lg = {6}>
                    {topics.blender[0].week}
                </Col>


                {/** Task List: Not Started, In Progress, Review */}
                <Col md = {6} lg = {6}>
                </Col>


            </Container>                        
        </div>
        </>
    )
}

export default Main
