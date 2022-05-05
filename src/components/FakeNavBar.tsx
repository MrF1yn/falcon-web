import React, {Component, useState, useEffect } from "react";
import './FakeNavBar.css'

function FakeNavBar() {
    const [navSize, setnavSize] = useState("1%");
    const [navColor, setnavColor] = useState("transparent");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("rgba(0, 0, 0, 0.83)") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize("7.365%") : setnavSize("1%");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);
    return (
        <div className="FakeNavBar" style={{
            backgroundColor: navColor,
            height: navSize,
            transition: "all 1s"
        }}>
        </div>
    );
}

export default FakeNavBar;

