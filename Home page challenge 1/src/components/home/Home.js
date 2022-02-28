import React from "react";
import "./Home.css";
import baground from '../images/baground.jpg'
import Login from "./Login";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src={baground}
                    alt=""
                />

                <div className="home__row">
                    <Login />
                </div>

            </div>
        </div>
    );
};

export default Home