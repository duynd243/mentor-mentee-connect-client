import React from "react";

const Pagination = ({coursePerPage, totalCourse, paginate, currentPage}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCourse / coursePerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            {pageNumbers.length > 1 &&
                <div className="col-xxl-12">
                    <div className="basic-pagination text-center white-bg mt-20 p-2">
                        <ul>
                            {pageNumbers.map((number) => (
                                <li key={number}>
                                    <button
                                        onClick={() => paginate(number)}
                                        className={currentPage === number ? "active" : ""}
                                    >
                                        {number}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            }
        </>
    );
};

export default Pagination;
