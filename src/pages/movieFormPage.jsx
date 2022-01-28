import React, {Component} from 'react';
import withRouter from "../components/withRouter";
import {useNavigate, useParams} from "react-router-dom";
import MovieForm from "../components/movieForm";


const MovieFormPage = () => {
    const params = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <h1>movie form {params.id} </h1>
            <MovieForm params={params}
                       navigate={navigate}/>
        </div>
    );
}


export default withRouter(MovieFormPage);
