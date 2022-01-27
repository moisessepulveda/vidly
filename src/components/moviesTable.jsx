import React, {Component} from 'react';
import Like from "./like";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import Table from "./table";

class MoviesTable extends Component {

    columns = [
        {path: 'title', label: 'Title'},
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'Stock'},
        {path: 'dailyRentalRate', label: 'Rate'},
        {key: "like", content: (movie) => <Like onClick={() => this.props.onLike(movie)} liked={movie.liked}/>},
        {
            key: "delete", content: (movie) =>
                <button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm">Delete</button>
        },
    ];

    render() {
        const {movies, onSort, sortColumn} = this.props;

        return (
            <Table
                columns={this.columns}
                data={movies}
                onSort={onSort}
                sortColumn={sortColumn}
            />
        );
    }
}

export default MoviesTable;
