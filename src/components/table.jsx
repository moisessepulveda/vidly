import React, {Component} from 'react';
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

class Table extends Component {
    render() {
        const {columns, sortColumn, onSort, data} = this.props;
        return (
            <table className="table">
                <TableHeader
                    onSort={onSort}
                    sortColumn={sortColumn}
                    columns={columns}/>

                <TableBody
                    data={data}
                    columns={columns}
                />
            </table>
        );
    }
}

export default Table;
