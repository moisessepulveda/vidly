import React, {Component} from 'react';
import _ from 'lodash';

import {getMovies} from "../services/fakeMovieService";
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
        pageSize: 3,
        sortColumn: {path: "title", order: "asc"}
    }

    componentDidMount() {
        const genres = [{_id: "", name: "all genres"}, ...getGenres()];
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

    handleSort = (sortColumn) => {
        this.setState({sortColumn});
    }

    moviesByGenre(movies, selectedGenre) {

        return (selectedGenre && selectedGenre._id)
            ? movies.filter(m => m.genre._id === selectedGenre._id)
            : movies;
    }

    paginateResults(movies, selectedPage, pageSize) {
        return paginate(movies, selectedPage, pageSize);
    }

    getPageData() {
        const {selectedGenre, selectedPage, pageSize, sortColumn} = this.state;
        let {movies} = this.state;

        movies = this.moviesByGenre(movies, selectedGenre);
        const itemsCount = movies.length;

        const sorted = _.orderBy(movies, [sortColumn.path], [sortColumn.order]);

        movies = this.paginateResults(sorted, selectedPage, pageSize);

        return {totalCount: itemsCount, data: movies};
    }

    render() {
        const {data, totalCount} = this.getPageData();

        if (data.length === 0) return (<p>no hay peliculas en la lista</p>);

        return (
            <>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-4">
                            <ListGroup
                                items={this.state.genres}
                                selectedItem={this.state.selectedGenre}
                                onChangeItem={this.handleGenreChange}
                            />
                        </div>
                        <div className="col-8">
                            <p>Mostrando un total de {totalCount} películas</p>

                            <MoviesTable
                                sortColumn={this.state.sortColumn}
                                movies={data}
                                onLike={this.handleLike}
                                onDelete={this.handleDelete}
                                onSort={this.handleSort}
                            />

                            <div className="d-flex justify-content-center">
                                <Pagination
                                    itemsCount={totalCount}
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
