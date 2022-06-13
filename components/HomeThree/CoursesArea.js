import Link from 'next/link';
import { useSelector } from 'react-redux';

const CoursesArea = () => {
   // coursesItems
   const coursesItems = useSelector(state => state.courses.allCourses);
   return (
      <>
         <section className="course__area pt-115 pb-120 grey-bg-4">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper mb-60 text-center">
                        <span className="section__title-pre-3">Featured Courses</span>
                        <h2 className="section__title section__title-44">Most Popular Courses</h2>
                     </div>
                  </div>
               </div>
               <div className="row">

                  {
                     coursesItems.slice(18, 21).map(course => {
                        const { _id, icon_img, title, category, price, videos, teacher_img, tutor_name, review } = course;
                        return <div key={_id} className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                           <div className="course__item-3 white-bg transition-3 mb-30">
                              <div className="course__icon-3 mb-30">
                                 <span>
                                    <img src={icon_img} alt="" />
                                 </span>
                              </div>
                              <div className="course__content-3">
                                 <h3 className="course__title-3">
                                    <Link href={`/course-details/${_id}`}>
                                       <a>{title}</a>
                                    </Link>
                                 </h3>
                                 <div className="course__meta d-flex align-items-center justify-content-between">
                                    <div className="course__tag-3">
                                       <Link href={`/course-details/${_id}`}>
                                          <a >{category}</a>
                                       </Link>
                                    </div>
                                    <div className="course__price-3">
                                       <span>${price}</span>
                                    </div>
                                 </div>
                                 <div className="course__sort-info">
                                    <ul>
                                       <li>
                                          <div className="course__lesson-3">
                                             <a href="#">
                                                <span>
                                                   <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M1 1.91583C1 1.52025 1.43762 1.28133 1.77038 1.49524L8.12353 5.57941C8.42969 5.77623 8.42969 6.22377 8.12353 6.42059L1.77038 10.5048C1.43762 10.7187 1 10.4798 1 10.0842V1.91583Z" fill="#007A70" stroke="#007A70" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                   </svg>
                                                </span>
                                                {videos} videos
                                             </a>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="course__review-3">
                                             <a href="#">
                                                <span>
                                                   <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M7.03658 0.866411L8.09247 2.99539C8.23645 3.29176 8.62041 3.57603 8.94437 3.63046L10.8582 3.95102C12.082 4.15666 12.37 5.0518 11.4881 5.93484L10.0003 7.43481C9.74828 7.68883 9.6103 8.17874 9.68829 8.52954L10.1142 10.3864C10.4502 11.8561 9.67629 12.4246 8.38643 11.6565L6.59263 10.5859C6.26867 10.3924 5.73473 10.3924 5.40476 10.5859L3.61096 11.6565C2.3271 12.4246 1.54719 11.85 1.88315 10.3864L2.3091 8.52954C2.3871 8.17874 2.24911 7.68883 1.99714 7.43481L0.509303 5.93484C-0.3666 5.0518 -0.084631 4.15666 1.13923 3.95102L3.05302 3.63046C3.37099 3.57603 3.75494 3.29176 3.89893 2.99539L4.95481 0.866411C5.53075 -0.288804 6.46664 -0.288804 7.03658 0.866411Z" fill="#FFAE10" />
                                                   </svg>
                                                </span>
                                                {review}k Reviews
                                             </a>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="course__tutor-3">
                                             <a href="#">
                                                <img src={teacher_img} alt="" />
                                             </a>
                                          </div>
                                       </li>
                                    </ul>
                                 </div>
                                 <div className="course__join">
                                    <Link href={`/course-details/${_id}`}>
                                       <a className="tp-btn-5 tp-btn-10">Join Now</a>
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     })
                  }

               </div>
               <div className="row justify-content-center">
                  <div className="col-xxl-8 col-xl-8 col-lg-8">
                     <div className="course__enroll-wrapper mt-40 p-relative d-sm-flex align-items-center justify-content-between include-bg" data-background="assets/img/course/bg/course-bg.png">
                        <div className="course__enroll-icon">
                           <span>
                              <svg width="28" height="34" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <g filter="url(#filter0_d_268_615)">
                                    <path d="M7.59649 15.161H11.2015V23.561C11.2015 25.521 12.2632 25.9177 13.5582 24.4477L22.3898 14.4144C23.4748 13.1894 23.0198 12.1744 21.3748 12.1744H17.7698V3.77435C17.7698 1.81435 16.7082 1.41769 15.4132 2.88769L6.58149 12.921C5.50816 14.1577 5.96316 15.161 7.59649 15.161Z" fill="white" />
                                 </g>
                                 <defs>
                                    <filter id="filter0_d_268_615" x="2" y="2" width="24.9795" height="31.3354" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                       <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                       <feOffset dy="4" />
                                       <feGaussianBlur stdDeviation="2" />
                                       <feComposite in2="hardAlpha" operator="out" />
                                       <feColorMatrix type="matrix" values="0 0 0 0 0.825 0 0 0 0 0.38207 0 0 0 0 0 0 0 0 0.5 0" />
                                       <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_268_615" />
                                       <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_268_615" result="shape" />
                                    </filter>
                                 </defs>
                              </svg>
                           </span>
                        </div>
                        <div className="course__enroll-content">
                           <p>Let Us Help</p>
                           <h4>Finding Your Right Courses</h4>
                        </div>
                        <div className="course__enroll-btn pt-5">
                           <Link href="/contact">
                              <a className="tp-btn-5 tp-btn-11">Get started</a>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default CoursesArea;