import React from "react";
import _ from 'lodash';
import PropTypes from "prop-types";

const Pagination = ({itemsCount, pageSize, selectedPage, onPageChange}) => {
    const pagesCount = Math.ceil(itemsCount / pageSize);
    const pages = _.range(1, pagesCount + 1);

    if (pagesCount === 1) return null

    return (
        <nav className="d-flex">
            <ul className="pagination">
                {pages.map((page) => {
                    let classes = "page-item ";
                    classes += (selectedPage === page) ? 'active' : '';
                    return (
                        <li className={classes} key={page}>
                            <a className="page-link" href="#" onClick={() => onPageChange(page)}>{page}</a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );

}
Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    selectedPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}
export default Pagination;
