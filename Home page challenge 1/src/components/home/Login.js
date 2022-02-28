import React from "react";
import "./Login.css";
import amazon from '../images/amazon.png'
import tree from '../images/tree_img.png'
import ValiationForm from "./ValiationForm";
import google from '../images/google.png'
import facebook from '../images/facebook.png'

function Login() {

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 2,
                width: '100%'
            }}
        />
    );

    return (
        <div className="main">
                
            <img className="amazon" src={amazon} alt="" />
            <ColoredLine color="rgb(177, 174, 174)" />
            <text className="login" >Login</text>
            <br/>

            <img className="tree" src={tree} alt="" />

            <ValiationForm />

            <br/>

            <button className="social" >CONTINUE WITH GOOGLE</button>
            <img className="socialimg" src={google} alt="" />
            <br/>
            <button className="social" >CONTINUE WITH FACEBOOK</button>
            <img className="socialimg" src={facebook} alt="" />
        </div>
    );
}

export default Login;