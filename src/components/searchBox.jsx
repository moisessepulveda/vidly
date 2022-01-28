import React from "react";

export function SearchBox(props) {
    return <input type="search"
                  className="form-control"
                  placeholder="Search..."
                  onChange={props.onChange}
                  value={props.value}/>;
}
