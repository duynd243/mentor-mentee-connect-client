import { useSelector } from "react-redux";
import Link from 'next/link';
import { useEffect } from "react";

const MyCoursesArea = () => {
   // myCourses
   const myCourses = useSelector(state => state.order.myOrders);
   // loaderStatus
   const loaderStatus = useSelector(state => state.order.status);
   // loading
   useEffect(() => {
      if (loaderStatus === 'pending') {
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
   },[loaderStatus])
   return (
      <>
         <section className="my__course pt-120 pb-90">
            <div className="container">
               <div className="row">
                  {
                     myCourses.map(course => {

                        return <div key={course?._id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                           <div className="course__item-2 transition-3 white-bg mb-30 fix">
                              <div className="course__thumb-2 w-img fix course_thumb_height">
                                 <Link href={`/course-details/${course?._id}`}>
                                    <a>
                                       <img src={course?.img_bg} alt="" />
                                    </a>
                                 </Link>
                              </div>
                              <div className="course__content-2">
                                 <div className="course__top-2 d-flex align-items-center justify-content-between">
                                    <div className="course__tag-2">
                                       <Link href={`/course-details/${course?._id}`}>
                                          <a >{course?.category}</a>
                                       </Link>
                                    </div>
                                    <div className="course__price-2">
                                       <span>${course?.price}</span>
                                    </div>
                                 </div>
                                 <h3 className="course__title-2">
                                    <Link href={`/course-details/${course?._id}`}>
                                       <a >{course?.title}</a>
                                    </Link>
                                 </h3>
                                 <div className="course__bottom-2 d-flex align-items-center justify-content-between">
                                    <div className="course__action">
                                       <ul>
                                          <li>
                                             <div className="course__action-item d-flex align-items-center">
                                                <div className="course__action-icon mr-5">
                                                   <span>
                                                      <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M5.00004 5.5833C6.28592 5.5833 7.32833 4.5573 7.32833 3.29165C7.32833 2.02601 6.28592 1 5.00004 1C3.71416 1 2.67175 2.02601 2.67175 3.29165C2.67175 4.5573 3.71416 5.5833 5.00004 5.5833Z" stroke="#5F6160" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                         <path d="M9 11.0001C9 9.22632 7.20722 7.79175 5 7.79175C2.79278 7.79175 1 9.22632 1 11.0001" stroke="#5F6160" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                      </svg>
                                                   </span>
                                                </div>
                                                <div className="course__action-content">
                                                   <span>{course?.enrolled?.substring(0, 3)}</span>
                                                </div>
                                             </div>
                                          </li>
                                          <li>
                                             <div className="course__action-item d-flex align-items-center">
                                                <div className="course__action-icon mr-5">
                                                   <span>
                                                      <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M9.01232 5.95416C9.01232 7.06709 8.11298 7.96642 7.00006 7.96642C5.88713 7.96642 4.98779 7.06709 4.98779 5.95416C4.98779 4.84123 5.88713 3.94189 7.00006 3.94189C8.11298 3.94189 9.01232 4.84123 9.01232 5.95416Z" stroke="#5F6160" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                                         <path d="M7 10.6026C8.98416 10.6026 10.8334 9.43342 12.1206 7.40991C12.6265 6.61737 12.6265 5.28523 12.1206 4.49269C10.8334 2.46919 8.98416 1.30005 7 1.30005C5.01584 1.30005 3.16658 2.46919 1.87941 4.49269C1.37353 5.28523 1.37353 6.61737 1.87941 7.40991C3.16658 9.43342 5.01584 10.6026 7 10.6026Z" stroke="#5F6160" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                                      </svg>
                                                   </span>
                                                </div>
                                                <div className="course__action-content">
                                                   <span>{course?.watching}</span>
                                                </div>
                                             </div>
                                          </li>
                                          <li>
                                             <div className="course__action-item d-flex align-items-center">
                                                <div className="course__action-icon mr-5">
                                                   <span>
                                                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.86447 1.72209L7.74447 3.49644C7.86447 3.74343 8.18447 3.98035 8.45447 4.02572L10.0495 4.29288C11.0695 4.46426 11.3095 5.2103 10.5745 5.94625L9.33447 7.19636C9.12447 7.40807 9.00947 7.81637 9.07447 8.10873L9.42947 9.65625C9.70947 10.8812 9.06447 11.355 7.98947 10.7148L6.49447 9.82259C6.22447 9.66129 5.77947 9.66129 5.50447 9.82259L4.00947 10.7148C2.93947 11.355 2.28947 10.8761 2.56947 9.65625L2.92447 8.10873C2.98947 7.81637 2.87447 7.40807 2.66447 7.19636L1.42447 5.94625C0.694466 5.2103 0.929466 4.46426 1.94947 4.29288L3.54447 4.02572C3.80947 3.98035 4.12947 3.74343 4.24947 3.49644L5.12947 1.72209C5.60947 0.759304 6.38947 0.759304 6.86447 1.72209Z" stroke="#5F6160" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                                      </svg>
                                                   </span>
                                                </div>
                                                <div className="course__action-content">
                                                   <span>{course?.review}</span>
                                                </div>
                                             </div>
                                          </li>
                                       </ul>
                                    </div>
                                    <div className="course__tutor-2">
                                       <a href="#">
                                          <img src={course?.teacher_img} alt="" />
                                       </a>
                                    </div>
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

export default MyCoursesArea;