import React from 'react';

const UserListPagination = ({ total, page, handlePageChange }) => {

    if (!total || total < 1) {
        return null;
    }

    const paginate = (total, page_number) => {

        const pages = Array.from(new Array(total), (x,i) => i+1);

        page_number = page_number > total || page_number < 0 ? 1 : page_number;

        return pages.slice(
            page_number <= 2 ? 0 : page_number + 2 >= total ? total -5 : page_number - 3,
            page_number <= 2 ? 5 : page_number + 2);
    };

    return (
        <ul className="pagination justify-content-center">

            <li className="page-item" onClick={() => handlePageChange(page-1)}>
                <button className="page-link" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                </button>
            </li>

            {paginate(total, page).map((value, index) => {
                return (
                    <li key={value} onClick={() => handlePageChange(value)} className={value === page ? "page-item active" : "page-item"}>
                        <button className="page-link custom-link">{value}</button>
                    </li>
                );
            })}

            <li className="page-item" onClick={() => handlePageChange(page+1)}>
                <button className="page-link" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                </button>
            </li>
        </ul>
    );
};

export default UserListPagination;
