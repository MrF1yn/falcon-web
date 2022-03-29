import React from 'react';
import './NavBar.css';
import './CoolBtn.css';


function NavBar() {
    return (
        <div className="NavBar">
                <span className={"logoSpan"}></span>
                <span className={"logoSpan"}></span>
                <span className={"logoSpan"}></span>
                <span className={"logoSpan"}></span>
                <header className="NavBar-header">
                    vectlabs
                </header>
            <div className={"ButtonDiv"}>
                <button className={"coolBtn"}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>HomePage</button>
                <button className={"coolBtn"}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>Resources</button>
                <button className={"coolBtn"}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>About Us</button>

            </div>
        </div>
    );
}

export default NavBar;