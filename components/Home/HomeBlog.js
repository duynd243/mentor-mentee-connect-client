import { useSelector } from 'react-redux';
import Link from 'next/link';

const HomeBlog = () => {
   // blogItems
   const blogItems = useSelector(state => state.blogs.allBlogs);
   return (
      <>
         <section className="blog__area pt-120 pb-85 p-relative">
            <div className="blog__shape">
               <img className="blog__shape-1" src="assets/img/blog/blog-shape-1.png" alt="" />
               <img className="blog__shape-2" src="assets/img/blog/blog-shape-2.png" alt="" />
               <img className="blog__shape-3" src="assets/img/blog/blog-shape-3.png" alt="" />
               <img className="blog__shape-4" src="assets/img/blog/blog-shape-4.png" alt="" />
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper mb-60 text-center">
                        <span className="section__title-pre">Latest News</span>
                        <h2 className="section__title section__title-44">The latest news from Educal</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                  {
                     blogItems.slice(0, 3).map((blog) => {
                        const { img, img_class, title, category, date, views, _id } = blog;
                        return img_class ? <div key={_id} className="col-xxl-6 col-xl-6">
                           <div className="blog__item-float blog__item-float-overlay p-relative fix transition-3 mb-30 d-flex align-items-end">
                              <div className="blog__thumb-bg w-img fix" style={{ background: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
                              <div className="blog__content-float">
                                 <div className="blog__tag-float mb-15">
                                    <Link href={`/blog-details/${_id}`}>
                                       <a>{category}</a>
                                    </Link>
                                 </div>
                                 <h3 className="blog__title-float">
                                    <Link href={`/blog-details/${_id}`}>
                                       <a >{blog?.title.substring(0, 35)}..</a>
                                    </Link>
                                 </h3>
                                 <div className="blog__meta-float">
                                    <ul>
                                       <li>
                                          <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M16.4998 9C16.4998 13.14 13.1398 16.5 8.99976 16.5C4.85976 16.5 1.49976 13.14 1.49976 9C1.49976 4.86 4.85976 1.5 8.99976 1.5C13.1398 1.5 16.4998 4.86 16.4998 9Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                             <path d="M11.7822 11.3848L9.45723 9.99732C9.05223 9.75732 8.72223 9.17982 8.72223 8.70732V5.63232" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                          </svg><a href="#">{date}</a></span>
                                       </li>
                                       <li>
                                          <span><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M10.6848 6.99994C10.6848 8.48494 9.48476 9.68494 7.99976 9.68494C6.51476 9.68494 5.31476 8.48494 5.31476 6.99994C5.31476 5.51494 6.51476 4.31494 7.99976 4.31494C9.48476 4.31494 10.6848 5.51494 10.6848 6.99994Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                             <path d="M7.99976 13.2025C10.6473 13.2025 13.1148 11.6425 14.8323 8.94254C15.5073 7.88504 15.5073 6.10754 14.8323 5.05004C13.1148 2.35004 10.6473 0.790039 7.99976 0.790039C5.35226 0.790039 2.88476 2.35004 1.16726 5.05004C0.492261 6.10754 0.492261 7.88504 1.16726 8.94254C2.88476 11.6425 5.35226 13.2025 7.99976 13.2025Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                          </svg><a href="#">{views}</a></span>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div> : <div key={blog?._id} className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                           <div className="blog__item mb-30 white-bg transition-3 mb-30">
                              <div className="blog__thumb w-img fix">
                                 <Link href={`/blog-details/${_id}`}>
                                    <a>
                                       <img src={img} alt="" />
                                    </a>
                                 </Link>
                              </div>
                              <div className="blog__content">
                                 <div className="blog__tag">
                                    <Link href={`/blog-details/${_id}`}>
                                       <a>{category}</a>
                                    </Link>
                                 </div>
                                 <h3 className="blog__title">
                                    <Link href={`/blog-details/${_id}`}>
                                       <a >{blog?.title.substring(0, 35)}..</a>
                                    </Link>
                                 </h3>
                                 <div className="blog__meta">
                                    <ul>
                                       <li>
                                          <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M16.4998 9C16.4998 13.14 13.1398 16.5 8.99976 16.5C4.85976 16.5 1.49976 13.14 1.49976 9C1.49976 4.86 4.85976 1.5 8.99976 1.5C13.1398 1.5 16.4998 4.86 16.4998 9Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                             <path d="M11.7822 11.3848L9.45723 9.99732C9.05223 9.75732 8.72223 9.17982 8.72223 8.70732V5.63232" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                          </svg><a href="#">{date}</a></span>
                                       </li>
                                       <li>
                                          <span><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M10.6848 6.99994C10.6848 8.48494 9.48476 9.68494 7.99976 9.68494C6.51476 9.68494 5.31476 8.48494 5.31476 6.99994C5.31476 5.51494 6.51476 4.31494 7.99976 4.31494C9.48476 4.31494 10.6848 5.51494 10.6848 6.99994Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                             <path d="M7.99976 13.2025C10.6473 13.2025 13.1148 11.6425 14.8323 8.94254C15.5073 7.88504 15.5073 6.10754 14.8323 5.05004C13.1148 2.35004 10.6473 0.790039 7.99976 0.790039C5.35226 0.790039 2.88476 2.35004 1.16726 5.05004C0.492261 6.10754 0.492261 7.88504 1.16726 8.94254C2.88476 11.6425 5.35226 13.2025 7.99976 13.2025Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                          </svg><a href="#">{views}</a></span>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     })
                  }


               </div>
            </div>
         </section>
      </>
   );
};

export default HomeBlog;