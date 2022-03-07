import React from "react";
import './ValiationForm.css'

const initialState = {
    email: "",
    password: "",
    emailError: "",
    passwordError: ""
};

export default class ValiationForm extends React.Component {
    state = initialState;

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        });
    };

    validate = () => {
        let emailError = "";
        let passwordError = "";

        if (!this.state.password) {
            passwordError = "password cannot be blank";
        }

        if (!this.state.email.includes("@")) {
            emailError = "invalid email";
        }

        if (emailError || passwordError) {
            this.setState({ emailError, passwordError });
            return false;
        }

        return true;
    };

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            // clear form
            this.setState(initialState);
        }
    };

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <div className="vmain">
                <div>
                    <input
                        className="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.emailError}
                    </div>
                </div>
                <div>
                    <input
                        className="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.passwordError}
                    </div>
                </div>
                <button className="submit" type="submit">Sign In</button>
                <div className="row">
                    <text className="for">Forgot Password?</text>
                    <text className="new">New User? Sign Up</text>
                </div>
                <text className="or">or</text>
            </div>
        </form>
        );
    }
}