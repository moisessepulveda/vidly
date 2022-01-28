import {Component} from 'react';
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";

class Form extends Component {

    state = {
        data: {},
        errors: {}
    }

    validate = () => {
        const options = {abortEarly: false};
        const result = Joi.validate(this.state.data, this.schema, options);

        if (!result.error) return null;

        const errors = {};

        for (let item of result.error.details) errors[item.path[0]] = item.message;

        return errors;
    }

    validateProperty = ({name, value}) => {
        const obj = {[name]: value};
        const singleSchema = {[name]: this.schema[name]}

        const {error} = Joi.validate(obj, singleSchema);

        return error ? error.details[0].message : null;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate();
        this.setState(({errors: errors || {}}));
        if (errors) return;
        this.doSubmit();
    }

    handleChange = ({currentTarget: input}) => {
        const errorsCopy = {...this.state.errors};
        const errorMessage = this.validateProperty(input);

        if (errorMessage) errorsCopy[input.name] = errorMessage; else delete errorsCopy[input.name];

        const dataCopy = {...this.state.data};
        dataCopy[input.name] = input.value;
        this.setState({data: dataCopy, errors: errorsCopy})
    }

    renderButton(label) {
        return (
            <button className="btn btn-primary" disabled={this.validate()}>{label}</button>
        );
    }

    renderInput(name, label, type = "text",) {
        return (
            <Input
                type={type}
                onChange={this.handleChange}
                name={name}
                label={label}
                error={this.state.errors[name]}
                value={this.state.data[name]}/>
        );
    }

    renderSelect(name, label, options) {
        return (
            <Select
                onChange={this.handleChange}
                name={name}
                label={label}
                error={this.state.errors[name]}
                value={this.state.data[name]}
                options={options} />
        );
    }

}

export default Form;
