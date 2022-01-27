import React, {Component} from 'react';
import withRouter from "../components/withRouter";
import {useNavigate, useParams} from "react-router-dom";


const MovieForm = () => {
    const params = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <h1>movie form {params.id} </h1>
            <button
                onClick={()=>{navigate("/movies")}}
                className="btn btn-primary">Save
            </button>
        </div>
    );
}


export default withRouter(MovieForm);
