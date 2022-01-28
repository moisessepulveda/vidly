import React from 'react';

function Select({
                    name,
                    label,
                    error,
                    options,
                    textProp = "name",
                    valueProp = "_id",
                    ...rest
                }) {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name} {...rest} className="form-control">
                {options.map(option =>
                    <option key={option[valueProp]} value={option[valueProp]}>{option[textProp]}</option>
                )}
            </select>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default Select;
