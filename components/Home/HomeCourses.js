import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const HomeCourses = () => {
   // allCoursesItems
   const allCoursesItems = useSelector(state => state.courses.allCourses);
   // status
   const status = useSelector(state => state.courses.status);
   const [loaderStatus,setLoaderStatus] = useState(false);
   // set loader status
   useEffect(() => {
      if(status === 'pending'){
         setLoaderStatus(true);
      }
      else{
         setLoaderStatus(false);
      }
   },[status])

   return (
      <>
         <section className="course__area pt-115 pb-90 grey-bg-3">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper text-center mb-60">
                        <span className="section__title-pre">Top Courses</span>
                        <h2 className="section__title section__title-44">Our Featured Courses</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing aelit, sed do eiusmod</p>
                     </div>
                  </div>
               </div>
               {
                  loaderStatus && <div className='text-center'>
                     <Spinner animation="border" />
                  </div>
               }
               {!loaderStatus && <div className="row">

                  {
                     allCoursesItems.slice(0, 6).map(course => {
                        return <div key={course?._id} className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                           <div className="course__item white-bg transition-3 mb-30">
                              <div className="course__thumb w-img fix course_thumb_height">
                                 <Link href={`/course-details/${course?._id}`}>
                                    <a>
                                       <img src={course?.img_bg} alt="" />
                                    </a>
                                 </Link>
                              </div>
                              <div className="course__content p-relative">
                                 <div className="course__price">
                                    <span>${course?.price}</span>
                                 </div>
                                 <div className="course__tag">
                                    <Link href={`/course-details/${course?._id}`}>
                                       <a >{course?.category}</a>
                                    </Link>
                                 </div>
                                 <h3 className="course__title">
                                    <Link href={`/course-details/${course?._id}`}>
                                       <a >{course?.title?.substring(0, 30)}..</a>
                                    </Link>
                                 </h3>
                                 <p>A beginner’s guide to designing or renovating interior spaces that pop.</p>

                                 <div className="course__bottom d-sm-flex align-items-center justify-content-between">
                                    <div className="course__tutor">
                                       <Link href={`/course-details/${course?._id}`}>
                                          <a>
                                             <img src={course?.teacher_img} alt="" />
                                             {course?.tutor_name}
                                          </a>
                                       </Link>
                                    </div>
                                    <div className="course__lesson">
                                       <a><svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1 12.2V4.49999C1 1.7 1.70588 1 4.52941 1H9.47059C12.2941 1 13 1.7 13 4.49999V11.5C13 11.598 13 11.696 12.9929 11.794" stroke="#49535B" strokeLinecap="round" strokeLinejoin="round" />
                                          <path d="M3.01176 10.0999H13V12.5498C13 13.9008 11.8918 14.9998 10.5294 14.9998H3.47059C2.10824 14.9998 1 13.9008 1 12.5498V12.0948C1 10.9959 1.90353 10.0999 3.01176 10.0999Z" stroke="#49535B" strokeLinecap="round" strokeLinejoin="round" />
                                          <path d="M4.17647 4.5H9.82353" stroke="#49535B" strokeLinecap="round" strokeLinejoin="round" />
                                          <path d="M4.17647 6.94995H7.70589" stroke="#49535B" strokeLinecap="round" strokeLinejoin="round" />
                                       </svg>
                                          {course?.lessons}
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     })
                  }



               </div>}
            </div>
         </section>
      </>
   );
};

export default HomeCourses;