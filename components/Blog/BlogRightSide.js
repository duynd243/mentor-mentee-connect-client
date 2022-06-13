import Link from 'next/link';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchText } from '../../redux/features/coursesSlice';
import { useRouter } from 'next/router';

const BlogRightSide = ({ blogs, dynamicPage = false }) => {
   // searchValue
   const [searchValue, setSearchValue] = useState('');
   // dispatch
   const dispatch = useDispatch();
   // router
   const router = useRouter();
   // handleSubmit
   const handleSubmit = e => {
      e.preventDefault();
      if (!searchValue) {

      }
      else {
         dispatch(searchText(searchValue))
         router.push('/search-courses')
      }
   }
   return (
      <>
         <div className="col-xxl-4 col-xl-4 col-lg-4">
            <div className="blog__sidebar pl-70">
               <div className="sidebar__widget mb-60">
                  <div className="sidebar__widget-content">
                     <div className="sidebar__search p-relative">
                        <form onSubmit={handleSubmit}>
                           <input onChange={(e) => setSearchValue(e.target.value)} type="text"
                              placeholder="Search for courses..." />
                           <button type="submit">
                              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                 viewBox="0 0 584.4 584.4" style={{ enableBackground: "new 0 0 584.4 584.4" }} xmlSpace="preserve">
                                 <g>
                                    <path className="st0" d="M565.7,474.9l-61.1-61.1c-3.8-3.8-8.8-5.9-13.9-5.9c-6.3,0-12.1,3-15.9,8.3c-16.3,22.4-36,42.1-58.4,58.4    c-4.8,3.5-7.8,8.8-8.3,14.5c-0.4,5.6,1.7,11.3,5.8,15.4l61.1,61.1c12.1,12.1,28.2,18.8,45.4,18.8c17.1,0,33.3-6.7,45.4-18.8    C590.7,540.6,590.7,499.9,565.7,474.9z" />
                                    <path className="st1" d="M254.6,509.1c140.4,0,254.5-114.2,254.5-254.5C509.1,114.2,394.9,0,254.6,0C114.2,0,0,114.2,0,254.5    C0,394.9,114.2,509.1,254.6,509.1z M254.6,76.4c98.2,0,178.1,79.9,178.1,178.1s-79.9,178.1-178.1,178.1S76.4,352.8,76.4,254.5    S156.3,76.4,254.6,76.4z" />
                                 </g>
                              </svg>
                           </button>
                        </form>
                     </div>
                  </div>
               </div>
               <div className="sidebar__widget mb-55">
                  <div className="sidebar__widget-head mb-35">
                     <h3 className="sidebar__widget-title">Recent posts</h3>
                  </div>
                  <div className="sidebar__widget-content">
                     <div className="rc__post-wrapper">
                        {
                           blogs.slice(0, 3).map(blog => {
                              return <div key={blog?._id} className="rc__post d-flex align-items-start">
                                 <div className="rc__thumb mr-20">
                                    <Link href={`/blog-details/${blog?._id}`}>
                                       <a >
                                          <img src={blog?.img} alt="" style={{ objectFit: 'cover' }} />
                                       </a>
                                    </Link>
                                 </div>
                                 <div className="rc__content">
                                    <div className="rc__meta">
                                       <span>{blog?.date}</span>
                                    </div>
                                    <h6 className="rc__title">
                                       <Link href={`/blog-details/${blog?._id}`}>
                                          <a>{blog?.title?.substring(0, 35)}...</a>
                                       </Link>
                                    </h6>
                                 </div>
                              </div>
                           })
                        }

                     </div>
                  </div>
               </div>
               <div className="sidebar__widget mb-55">
                  <div className="sidebar__widget-head mb-35">
                     <h3 className="sidebar__widget-title">Category</h3>
                  </div>
                  <div className="sidebar__widget-content">
                     <ul>
                        <li>
                           <Link href="/blog">
                              <a>Category</a>
                           </Link>
                        </li>
                        <li>
                           <Link href="/blog">
                              <a>Video & Tips  (4)</a>
                           </Link>
                        </li>
                        <li>
                           <Link href="/blog">
                              <a>Education  (8)</a>
                           </Link>
                        </li>
                        <li>
                           <Link href="/blog">
                              <a>Business  (5)</a>
                           </Link>
                        </li>
                        <li>
                           <Link href="/blog">
                              <a>UX Design  (3)</a>
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="sidebar__widget mb-55">
                  <div className="sidebar__widget-head mb-35">
                     <h3 className="sidebar__widget-title">Tags</h3>
                  </div>
                  <div className="sidebar__widget-content">
                     <div className="tagcloud">
                        <a href="#">Art & Design</a>
                        <a href="#">Course</a>
                        <a href="#">Videos</a>
                        <a href="#">App</a>
                        <a href="#">Education</a>
                        <a href="#">Data Science</a>
                        <a href="#">Machine Learning</a>
                        <a href="#">Tips</a>
                     </div>
                  </div>
               </div>
               <div className="sidebar__widget mb-55">
                  <div className="sidebar__banner w-img">
                     {
                        dynamicPage ? <img src={"/" + "assets/img/blog/banner/banner-1.jpg"} alt="" /> :
                           <img src="assets/img/blog/banner/banner-1.jpg" alt="" />
                     }
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default BlogRightSide;