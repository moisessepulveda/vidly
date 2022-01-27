import React from "react";

function Input({name, label, value, onChange, error, type = "text"}) {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                value={value}
                onChange={onChange}
                autoFocus
                type={type}
                name={name}
                id={name}
                className="form-control"
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
}

export default Input;


