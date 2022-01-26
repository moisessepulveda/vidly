import React, {Component} from 'react';
import {getMovies} from "../services/fakeMovieService";
import Like from "./like";

class Movies extends Component {
    state = {
        movies: getMovies()
    }
    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies: movies});
    }

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movie};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
    }

    render() {
        const {length: count} = this.state.movies;
        if (this.state.movies.length === 0)
            return <p>no hay peliculas en la lista</p>

        return (
            <>
                <p>Mostrando un total de {count} películas</p>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th/>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <Like
                                    onClick={() => this.handleLike(movie)}
                                    liked={movie.liked}/>
                            </td>
                            <td>
                                <button
                                    onClick={() => this.handleDelete(movie)}
                                    className="btn btn-danger btn-sm">Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </>
        );
    }
}

export default Movies;
