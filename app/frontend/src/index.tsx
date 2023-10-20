import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { initializeIcons } from "@fluentui/react";


import "./index.css";

//The first page: Login page
import Login from "./pages/Login"

// The sub-pages
import WebForm from "./pages/WebForm"
import Main from "./pages/Main"
import StudyPlan from "./pages/StudyPlan"
import Chat from "./pages/chat/Chat"
import ProgressPage from "./pages/ProgressPage"
import WebFormBahav from "./pages/WebFormBahav";
import { Video } from "./pages/Video";
import ToDoList from "./pages/ToDoList";
import Quiz from "./pages/Quiz"
import Dashboard from "./pages/DashBoard"


initializeIcons();

export default function App() {
    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/webform" element={<WebForm />} />
                <Route path="/webform2" element={<WebFormBahav />} />
                <Route path="/progresspage" element={<ProgressPage />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/studyplan" element={<StudyPlan />} />
                <Route path="/main" element= {<Main/>}/>
                <Route path="/video/:videoId" element= {<Video/>}/>
                <Route path="/todolist" element = {<ToDoList/>}/>
                <Route path="/dashboard" element = {<Dashboard/>}/>
            </Routes>

        </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
