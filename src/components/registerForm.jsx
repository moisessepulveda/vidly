import React from "react";
import Joi from "joi-browser";
import Form from "./form";

class RegisterForm extends Form {

    state = {
        data: {
            username: '',
            password: '',
            name: ''
        },
        errors: {}
    }


    schema = {
        username: Joi.string().required().email().label("Username"),
        password: Joi.string().required().label("Password"),
        name: Joi.string().required().label("Name"),
    }


    doSubmit() {
        console.log("submmited");
    }


    render() {
        return (
            <div className="container">
                <h1>login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username", "email")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderInput("name", "Name", "name")}


                    <div className="d-flex justify-content-end mt-5">
                        {this.renderButton("Login")}
                    </div>
                </form>
            </div>
        )
    }

}

export default RegisterForm



