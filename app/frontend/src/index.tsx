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
import Chat from "./pages/chat/Chat";

initializeIcons();

export default function App() {
    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/webform" element={<WebForm />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/studyplan" element={<StudyPlan />} />
                <Route path="/main" element= {<Main/>}/>
            </Routes>

        </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
