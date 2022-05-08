import React, {Component, useState, useEffect } from "react";
import './NavBar.css';
import './CoolBtn.css';

export default class NavBar extends Component <{}> {
    // componentDidMount() {
    //     window.addEventListener('scroll', this.handleScroll);
    // }
    //
    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.handleScroll);
    // }
    //
    // handleScroll(event: any) {
    //     if (window.scrollY > 70) {
    //         console.log(window.scrollY);
    //
    //     }
    // }
    render() {

        return (
            <div className="NavBar" id="NB1">
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
                        <span></span>HomePage
                    </button>
                    <button className={"coolBtn"}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>Resources
                    </button>
                    <button className={"coolBtn"}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>About Us
                    </button>

                </div>
            </div>
        );
    }
}

