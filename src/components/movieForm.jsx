import React from "react";
import Joi from "joi-browser";
import Form from "./form";
import {getGenres} from "../services/fakeGenreService";
import {getMovie, saveMovie} from "../services/fakeMovieService";

class MovieForm extends Form {

    state = {
        data: {
            title: '',
            genreId: '',
            numberInStock: '',
            dailyRentalRate: ''
        },
        genres: [],
        errors: {}
    }

    componentDidMount() {
        this.setState({genres: getGenres()});
        const params = this.props.params;
        const navigate = this.props.navigate;

        const movieId = params.id;
        if (movieId === "new") return;

        const movie = getMovie(movieId);
        if (!movie) return navigate("/not-found");

        this.setState({data: this.mapToViewModel(movie)});

    }

    mapToViewModel(movie) {
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genreId,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate
        }
    }


    schema = {
        title: Joi.string().required().label("Title"),
        genreId: Joi.string().required().label("Genre"),
        numberInStock: Joi.number().required().label("Number in stock"),
        dailyRentalRate: Joi.number().required().label("Rate")
    }


    doSubmit() {
        saveMovie(this.state.data);

        this.props.navigate("/movies");

    }


    render() {
        return (
            <div className="container">
                <h1>Movie Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title", "Title")}
                    {this.renderSelect("genreId", "genreId", this.state.genres)}
                    {this.renderInput("numberInStock", "Number in Stock", "number")}
                    {this.renderInput("dailyRentalRate", "Rage", "number")}

                    <div className="d-flex justify-content-end mt-5">
                        {this.renderButton("Save")}
                    </div>
                </form>
            </div>
        )
    }


}

export default MovieForm



