import React, {Component} from 'react';
import {getMovies} from "../services/fakeMovieService";
import Like from "./like";
import Pagination from "./pagination";
import {paginate} from "../utils/paginate";
import ListGroup from "./listGroup";
import {getGenres} from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        selectedPage: 1,
        selectedGenre: null,
        pageSize: 3
    }

    componentDidMount() {
        const genres = [{name: "all genres"}, ...getGenres()];
        this.setState({movies: getMovies(), genres: genres});
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

    handlePageChange = (page) => {
        this.setState({selectedPage: page});
    }

    handleGenreChange = (genre) => {
        this.setState({selectedPage: 1});
        this.setState({selectedGenre: genre});
    }

    moviesByGenre(movies, selectedGenre) {

        return (selectedGenre && selectedGenre._id)
            ? movies.filter(m => m.genre._id === selectedGenre._id)
            : movies;
    }

    paginateResults(movies, selectedPage, pageSize) {
        return paginate(movies, selectedPage, pageSize);
    }

    render() {
        const {genres, selectedGenre, selectedPage, pageSize} = this.state;
        let {movies} = this.state;

        movies = this.moviesByGenre(movies, selectedGenre);
        const itemsCount = movies.length;

        movies = this.paginateResults(movies, selectedPage, pageSize);

        if (movies.length === 0) return (<p>no hay peliculas en la lista</p>);

        return (
            <>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-4">
                            <ListGroup
                                items={genres}
                                selectedItem={selectedGenre}
                                onChangeItem={this.handleGenreChange}
                            />
                        </div>
                        <div className="col-8">
                            <p>Mostrando un total de {itemsCount} películas</p>

                            <MoviesTable
                                movies={movies}
                                onLike={this.handleLike}
                                onDelete={this.handleDelete}
                            />

                            <div className="d-flex justify-content-center">
                                <Pagination
                                    itemsCount={itemsCount}
                                    onPageChange={this.handlePageChange}
                                    pageSize={this.state.pageSize}
                                    selectedPage={this.state.selectedPage}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default Movies;
