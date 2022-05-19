import React from 'react';

const Pagination = ({ coursePerPage, totalCourse, paginate, currentPage }) => {
   const pageNumbers = [];

   for (let i = 1; i <= Math.ceil(totalCourse / coursePerPage); i++) {
      pageNumbers.push(i)
   }

   return (
      <>
         <div className="col-xxl-12">
            <div className="basic-pagination text-center mt-20">
               <ul>
                  {
                     pageNumbers.map(number => (
                        <li key={number}>
                           <button onClick={() => paginate(number)} className={currentPage === number ? 'active' : ''}>
                              {number}
                           </button>
                        </li>
                     ))
                  }
               </ul>
            </div>
         </div>
      </>
   );
};

export default Pagination;