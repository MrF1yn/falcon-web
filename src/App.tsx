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
        <BrowserRouter>
            <Routes>
                <Route path="Resources/*" element={<Resources />} />
                <Route path="/*" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
      <footer className="App-footer">

      </footer>

    </div>
  );
}


export default App;
