import React from 'react';
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


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
        <body>
        <BrowserRouter>
            <Routes>
                <Route path="Resources/*" element={<Resources/>}/>
                <Route path="/*" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
        </body>
    </div>
  );
}


export default App;
