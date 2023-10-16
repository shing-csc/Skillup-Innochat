import React from 'react'
import { Link, Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react'


const Main = () => {

    /**
     * const [username, setUsername] = useState('')
     *  - We will try to pass the username and the setUsername to the /login path
     *  - Now this will be placed in the /login path directly for better testing
     */

    return (
        <div>
            This is the main page
            {/**
             * <ul>
                <li> <Link to = "/login"> Login Page </Link>  </li>
                <li> <Link to = "/webform"> Web Form Page </Link> </li>
                <li> <Link to = "/chat"> Chat Page </Link> </li>
                <li> <Link to = "/studyplan"> Study Plan Page </Link> </li>
            </ul>  
             */}                     
        </div>
    )
}

export default Main
