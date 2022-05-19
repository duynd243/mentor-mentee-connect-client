import Link from 'next/link';

const EventArea = () => {
   return (
      <>
         <section className="event__area pt-115 p-relative">
            <div className="page__title-shape">
               <img className="page-title-shape-5 d-none d-sm-block" src="assets/img/breadcrumb/page-title-shape-1.png" alt="" />
               <img className="page-title-shape-6" src="assets/img/breadcrumb/page-title-shape-2.png" alt="" />
               <img className="page-title-shape-7" src="assets/img/breadcrumb/page-title-shape-4.png" alt="" />
               <img className="page-title-shape-8" src="assets/img/breadcrumb/page-title-shape-5.png" alt="" />
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8">
                     <div className="event__wrapper">
                        <div className="page__title-content mb-25">
                           <div className="breadcrumb__list breadcrumb__list-2 mb-10">
                              <span>
                                 <Link href="/">
                                    <a >Home</a>
                                 </Link>
                              </span>
                              <span className="dvdr"><i className="fa-regular fa-angle-right"></i></span>
                              <span>Courses</span>
                           </div>
                           <span className="breadcrumb__title-pre">Development</span>
                           <h5 className="breadcrumb__title-2">The business Intelligence analyst Course 2022</h5>
                        </div>
                        <div className="course__meta-2 d-sm-flex align-items-center mb-30">
                           <div className="course__teacher-3 d-flex align-items-center mr-70 mb-30">
                              <div className="course__teacher-thumb-3 mr-15">
                                 <img src="assets/img/course/tutor/course-tutor-1.jpg" alt="" />
                              </div>
                              <div className="course__teacher-info-3">
                                 <h5>Teacher</h5>
                                 <p><a href="#">Elon Gated</a></p>
                              </div>
                           </div>
                           <div className="course__update mr-80 mb-30">
                              <h5>Last Update:</h5>
                              <p>July 24, 2022</p>
                           </div>
                           <div className="course__rating-2 mb-30">
                              <h5>Review:</h5>
                              <div className="course__rating-inner d-flex align-items-center">
                                 <ul>
                                    <li><a href="#"><i className="fa-solid fa-star"></i></a></li>
                                    <li><a href="#"><i className="fa-solid fa-star"></i></a></li>
                                    <li><a href="#"><i className="fa-solid fa-star"></i></a></li>
                                    <li><a href="#"><i className="fa-solid fa-star"></i></a></li>
                                    <li><a href="#"><i className="fa-solid fa-star"></i></a></li>
                                 </ul>
                                 <p>4.5</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default EventArea;