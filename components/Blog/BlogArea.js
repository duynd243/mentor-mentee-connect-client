import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BlogPagination from '../common/BlogPagination';
import BlogRightSide from './BlogRightSide';
import SingleBlog from './SingleBlog';

const BlogArea = () => {
   // all blogs
   const blogs = useSelector(state => state.blogs.allBlogs);
   // status
   const status = useSelector(state => state.blogs.status);
   // current page
   const [currentPage,setCurrentPage] = useState(1);
   // per page
   const [blogPerPage,setBlogPerPage] = useState(2);
   // index of last page
   const indexOfLastPage = currentPage * blogPerPage;
   // index of first page
   const indexOfFirstPage = indexOfLastPage - blogPerPage;
   // current blogs
   const currentBlogs = blogs.slice(indexOfFirstPage,indexOfLastPage);
   // paginate
   const paginate = (number) => {
      setCurrentPage(number)
   }
   // loader
   useEffect(() => {
      if (status === 'pending') {
         return <div id="loading">
         <div id="loading-center">
            <div id="loading-center-absolute">
               <svg id="loader">
               <path id="corners" d="m 0 12.5 l 0 -12.5 l 50 0 l 0 50 l -50 0 l 0 -37.5" />
               </svg>
               <img src="assets/img/favicon.png" alt="" />
            </div>
         </div>
         </div>
      }
   },[status]);

   return (
      <>
         <section className="blog__area pt-120 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 col-xl-8 col-lg-8">
                     <div className="postbox__wrapper pr-20">
                        {
                           currentBlogs.map(blog => <SingleBlog key={blog?._id} blog={blog} />)
                        }
                        <div className="basic-pagination">
                          <BlogPagination blogPerPage={blogPerPage} toltalBlogs={blogs.length} 
                          currentPage={currentPage} paginate={paginate} />
                        </div>
                     </div>
                  </div>
                  <BlogRightSide blogs={blogs} />
               </div>
            </div>
         </section>
      </>
   );
};

export default BlogArea;