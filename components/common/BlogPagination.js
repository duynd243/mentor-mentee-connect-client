

const BlogPagination = ({ toltalBlogs, blogPerPage, currentPage,paginate }) => {
   const pageNumbers = [];
   for (let i = 1; i <= Math.ceil(toltalBlogs / blogPerPage); i++) {
      pageNumbers.push(i)
   }
   return (
      <>
         <nav>
            <ul>
               {
                  pageNumbers.map(number => (
                     <li key={number}>
                        <button onClick={() => paginate(number)} className={currentPage === number ? 'current' : ''}>
                           {number}
                        </button>
                     </li>
                  ))
               }
            </ul>
         </nav>
      </>
   );
};

export default BlogPagination;