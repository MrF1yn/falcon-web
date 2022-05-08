import React, {Component} from 'react';
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import NavBar from "./components/NavBar";

import Resources from "./pages/Resources";
import HomePage from "./pages/HomePage";
import FakeNavBar from "./components/FakeNavBar";

export default class App extends Component <{}> {
    render() {
        return (
            <div className="App">
                <NavBar/>
                <FakeNavBar/>
                <div className="filter"/>
                <BrowserRouter>
                    <Routes>
                        <Route path="Resources/*" element={<Resources/>}/>
                        <Route path="/*" element={<HomePage/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}



// export default App;
