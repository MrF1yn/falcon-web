import React, {Component, useState, useEffect } from "react";
import './FakeNavBar.css'

function FakeNavBar() {
    let OnHeight = "7.365vh"
    let OffHeight = "0px";
    // console.log(window.innerWidth);
    // if(window.innerWidth<860){
    //     OnHeight = "50.365vh";
    // }
    const [navSize, setnavSize] = useState(OffHeight);
    const [navColor, setnavColor] = useState("transparent");
    const listenScrollEvent = () => {
        let heightBuffer = null;
        heightBuffer = document.getElementById("NB1");
        if(heightBuffer!=null){
            OnHeight = heightBuffer.clientHeight.toString()+"px";
        }
        window.scrollY > 10 ? setnavColor("rgba(0, 0, 0, 0.83)") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize(OnHeight) : setnavSize(OffHeight);
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
            minHeight: navSize,
            transition: "all 1s"
        }}>
        </div>
    );
}

export default FakeNavBar;

