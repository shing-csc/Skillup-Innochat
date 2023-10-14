import React from 'react'
import { Link, Routes, Route } from "react-router-dom";


import Login from "./Login"
import WebForm from "./WebForm"
import StudyPlan from "./StudyPlan"

import Chat from "./chat/Chat";

const Main = () => {
    return (
        <div>
            This is the main page
            <ul>
                <li> <Link to = "/login"> Logn Page </Link>  </li>
                <li> <Link to = "/webform"> Web Form Page </Link> </li>
                <li> <Link to = "/chat"> Chat Page </Link> </li>
                <li> <Link to = "/studyplan"> Study Plan Page </Link> </li>
            </ul>

            <Routes>
                
                <Route path = "/login" element = {<Login/>} /> 
                <Route path = "/webform" element = {<WebForm/>} /> 
                <Route path = "/chat" element = {<Chat/>} />
                <Route path = "/studyplan" element = {<StudyPlan/>} /> 

            </Routes>
                       
        </div>
    )
}

export default Main
