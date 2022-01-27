import React, {useState} from "react";
import Input from "./input";
import Joi from "joi-browser";

function LoginForm() {

    const [account, setAccount] = useState({
        username: '', password: ''
    });
    const [errors, setErrors] = useState({});

    const schema = {
        username: Joi.string().required().label("Username"), password: Joi.string().required().label("Password")
    }


    const validate = () => {
        const options = {abortEarly: false};
        const result = Joi.validate(account, schema, options);

        if (!result.error) return null;

        const errors = {};

        for (let item of result.error.details) errors[item.path[0]] = item.message;

        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        setErrors(errors || {});
        if (errors) return;
    }

    const validateProperty = ({name, value}) => {
        const obj = {[name]: value};
        const singleSchema = {[name]: schema[name]}

        const {error} = Joi.validate(obj, singleSchema);

        return error ? error.details[0].message : null;
    }

    const handleChange = ({currentTarget: input}) => {
        const errorsCopy = {...errors};
        const errorMessage = validateProperty(input);

        if (errorMessage) errorsCopy[input.name] = errorMessage; else delete errorsCopy[input.name];

        const accountCopy = {...account};
        accountCopy[input.name] = input.value;
        setAccount(accountCopy);
        setErrors(errorsCopy);
    }

    return (<div className="container">
        <h1>login</h1>
        <form onSubmit={handleSubmit}>
            <Input
                onChange={handleChange}
                name="username"
                label="username"
                error={errors.username}
                value={account.username}/>

            <Input
                type="password"
                onChange={handleChange}
                name="password"
                label="password"
                error={errors.password}
                value={account.password}/>

            <div className="d-flex justify-content-end mt-5">
                <button type="submit"
                        disabled={validate()}
                        className="btn btn-primary">login
                </button>
            </div>
        </form>
    </div>);
}

export default LoginForm



