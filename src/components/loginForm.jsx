import React, {Component, useState} from "react";
import Input from "./input";
import Joi from "joi-browser";
import Form from "./form";

class LoginForm extends Form {

    state = {
        data: {
            username: '',
            password: ''
        },
        errors: {}
    }


    schema = {
        username: Joi.string().required().label("Username"), password: Joi.string().required().label("Password")
    }


    doSubmit() {
        console.log("submmited");
    }


    render() {
        return (
            <div className="container">
                <h1>login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}


                    <div className="d-flex justify-content-end mt-5">
                        {this.renderButton("Login")}
                    </div>
                </form>
            </div>
        )
    }

}

export default LoginForm



