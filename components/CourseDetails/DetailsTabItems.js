
const DetailsTabItems = ({ dynamicPage }) => {
   return (
      <>
         <div className="course__tab-2 mb-45">
            <ul className="nav nav-tabs" id="courseTab" role="tablist">
               <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="true"><i className="fa-regular fa-medal"></i> <span>Discription</span> </button>
               </li>
               <li className="nav-item" role="presentation">
                  <button className="nav-link " id="curriculum-tab" data-bs-toggle="tab" data-bs-target="#curriculum" type="button" role="tab" aria-controls="curriculum" aria-selected="false"><i className="fa-regular fa-book-blank"></i> <span>Curriculum</span> </button>
               </li>
               <li className="nav-item" role="presentation">
                  <button className="nav-link" id="review-tab" data-bs-toggle="tab" data-bs-target="#review" type="button" role="tab" aria-controls="review" aria-selected="false"> <i className="fa-regular fa-star"></i> <span>Reviews</span> </button>
               </li>
               <li className="nav-item" role="presentation">
                  <button className="nav-link" id="member-tab" data-bs-toggle="tab" data-bs-target="#member" type="button" role="tab" aria-controls="member" aria-selected="false"> <i className="fal fa-user"></i> <span>Members</span> </button>
               </li>
            </ul>
         </div>

         <div className="course__tab-content mb-95">
            <div className="tab-content" id="courseTabContent">
               <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                  <div className="course__description">
                     <h3>Course Overview</h3>
                     <p>Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how your father David skive off sloshed, dont get shirty with me chip shop vagabond crikey bugger Queen English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate, absolutely bladdered bamboozled its your round dont get shirty with me down the pub well. Give us a bell bits and bobs Charles he lost his bottle super my lady cras starkers bite your arm off Queens English, pardon me horse play Elizabeth a blinding shot chinwag knees up do one David, blag cup of tea Eaton so I said bleeding haggle James Bond cup of char. Gosh William ummm Im telling crikey burke I dont want no agro A bit of how your father bugger all mate off his nut that, what a plonker cuppa owt to do with me nancy boy show off show off pick your nose and blow off spiffing good time lavatory me old mucker, chimney pot what a load of rubbish boot squiffy lost the plot brolly wellies excuse my french.</p>

                     <div className="course__tag-4 mb-35 mt-35">
                        <i className="fal fa-tag"></i>
                        <a href="#">Big data,</a>
                        <a href="#">Data analysis,</a>
                        <a href="#">Data modeling</a>
                     </div>
                     <div className="course__description-list mb-45">
                        <h4>What is the Target Audience?</h4>
                        <ul>
                           <li> <i className="fa-solid fa-check"></i> Business managers, leaders</li>
                           <li> <i className="fa-solid fa-check"></i> Downloadable lectures, code and design assets for all projects</li>
                           <li> <i className="fa-solid fa-check"></i> Anyone who is finding a chance to get the promotion</li>
                        </ul>
                     </div>
                     <div className="course__instructor mb-45">
                        <h3>Other Instructors</h3>
                        <div className="course__instructor-wrapper d-md-flex align-items-center">
                           <div className="course__instructor-item d-flex align-items-center mr-70">
                              <div className="course__instructor-thumb mr-20">
                                 {
                                    dynamicPage ? <img src={"/" + "assets/img/course/tutor/course-tutor-4.jpg"} alt="" /> : <img src="assets/img/course/tutor/course-tutor-4.jpg" alt="" />
                                 }
                              </div>
                              <div className="course__instructor-content">
                                 <h3>Eleanor Fant</h3>
                                 <p>Instructor</p>
                              </div>
                           </div>
                           <div className="course__instructor-item d-flex align-items-center mr-70">
                              <div className="course__instructor-thumb mr-20">
                                 {
                                    dynamicPage ? <img src={"/" + "assets/img/course/tutor/course-tutor-3.jpg"} alt="" /> : <img src="assets/img/course/tutor/course-tutor-3.jpg" alt="" />
                                 }
                              </div>
                              <div className="course__instructor-content">
                                 <h3>Lauren Stamps</h3>
                                 <p>Teacher</p>
                              </div>
                           </div>
                           <div className="course__instructor-item d-flex align-items-center mr-70">
                              <div className="course__instructor-thumb mr-20">
                                 {
                                    dynamicPage ? <img src={"/" + "assets/img/course/tutor/course-tutor-2.jpg"} alt="" /> : <img src="assets/img/course/tutor/course-tutor-2.jpg" alt="" />
                                 }
                              </div>
                              <div className="course__instructor-content">
                                 <h3>Jonquil Von</h3>
                                 <p>Associate</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="tab-pane fade" id="curriculum" role="tabpanel" aria-labelledby="curriculum-tab">
                  <div className="course__curriculum">
                     <div className="accordion" id="course__accordion">
                        <div className="accordion-item mb-50">
                           <h2 className="accordion-header" id="week-01">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#week-01-content" aria-expanded="true" aria-controls="week-01-content">
                                 Week 01
                              </button>
                           </h2>
                           <div id="week-01-content" className="accordion-collapse collapse show" aria-labelledby="week-01" data-bs-parent="#course__accordion">
                              <div className="accordion-body">
                                 <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                                    <div className="course__curriculum-info">
                                       <svg className="document" viewBox="0 0 24 24">
                                          <path className="st0" d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z" />
                                          <polyline className="st0" points="14,2 14,8 20,8 " />
                                          <line className="st0" x1="16" y1="13" x2="8" y2="13" />
                                          <line className="st0" x1="16" y1="17" x2="8" y2="17" />
                                          <polyline className="st0" points="10,9 9,9 8,9 " />
                                       </svg>
                                       <h3> <span>Reading:</span> Ut enim ad minim veniam</h3>
                                    </div>
                                    <div className="course__curriculum-meta">
                                       <span className="time"> <i className="icon_clock_alt"></i> 14 minutes</span>
                                       <span className="question">2 questions</span>
                                    </div>
                                 </div>
                                 <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                                    <div className="course__curriculum-info">
                                       <svg viewBox="0 0 24 24">
                                          <polygon className="st0" points="23,7 16,12 23,17 " />
                                          <path className="st0" d="M3,5h11c1.1,0,2,0.9,2,2v10c0,1.1-0.9,2-2,2H3c-1.1,0-2-0.9-2-2V7C1,5.9,1.9,5,3,5z" />
                                       </svg>
                                       <h3> <span>Video: </span> Greetings and introduction</h3>
                                    </div>
                                    <div className="course__curriculum-meta">
                                       <span className="time"> <i className="icon_clock_alt"></i> 15 minutes</span>
                                    </div>
                                 </div>
                                 <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                                    <div className="course__curriculum-info">
                                       <svg viewBox="0 0 16 16">

                                          <path className="st0" d="M2,12V8c0-3.3,2.9-6,6.4-6s6.4,2.7,6.4,6v4" />
                                          <path className="st0" d="M14.8,12.7c0,0.7-0.6,1.3-1.4,1.3h-0.7c-0.8,0-1.4-0.6-1.4-1.3v-2c0-0.7,0.6-1.3,1.4-1.3h2.1V12.7z M2,12.7  C2,13.4,2.6,14,3.3,14H4c0.7,0,1.3-0.6,1.3-1.3v-2c0-0.7-0.6-1.3-1.3-1.3H2V12.7z" />
                                       </svg>
                                       <h3> <span>Audio:</span> Interactive lesson</h3>
                                    </div>
                                    <div className="course__curriculum-meta">
                                       <span className="time"> <i className="icon_clock_alt"></i> 7 minutes</span>
                                       <span className="question">3 questions</span>
                                    </div>
                                 </div>
                                 <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                                    <div className="course__curriculum-info">
                                       <svg className="document" viewBox="0 0 24 24">
                                          <path className="st0" d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z" />
                                          <polyline className="st0" points="14,2 14,8 20,8 " />
                                          <line className="st0" x1="16" y1="13" x2="8" y2="13" />
                                          <line className="st0" x1="16" y1="17" x2="8" y2="17" />
                                          <polyline className="st0" points="10,9 9,9 8,9 " />
                                       </svg>
                                       <h3> <span>Reading: </span> Ut enim ad minim veniam</h3>
                                    </div>
                                    <div className="course__curriculum-meta">
                                       <span className="time"> <i className="icon_clock_alt"></i> 22 minutes</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="accordion" id="course__accordion-2">
                        <div className="accordion-item mb-50">
                           <h2 className="accordion-header" id="week-02">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#week-02-content" aria-expanded="true" aria-controls="week-02-content">
                                 Week 02
                              </button>
                           </h2>
                           <div id="week-02-content" className="accordion-collapse  collapse show" aria-labelledby="week-02" data-bs-parent="#course__accordion-2">
                              <div className="accordion-body">
                                 <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                                    <div className="course__curriculum-info">
                                       <svg className="document" viewBox="0 0 24 24">
                                          <path className="st0" d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z" />
                                          <polyline className="st0" points="14,2 14,8 20,8 " />
                                          <line className="st0" x1="16" y1="13" x2="8" y2="13" />
                                          <line className="st0" x1="16" y1="17" x2="8" y2="17" />
                                          <polyline className="st0" points="10,9 9,9 8,9 " />
                                       </svg>
                                       <h3> <span>Reading:</span> Ut enim ad minim veniam</h3>
                                    </div>
                                    <div className="course__curriculum-meta">
                                       <span className="time"> <i className="icon_clock_alt"></i> 14 minutes</span>
                                    </div>
                                 </div>
                                 <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                                    <div className="course__curriculum-info">
                                       <svg viewBox="0 0 24 24">
                                          <polygon className="st0" points="23,7 16,12 23,17 " />
                                          <path className="st0" d="M3,5h11c1.1,0,2,0.9,2,2v10c0,1.1-0.9,2-2,2H3c-1.1,0-2-0.9-2-2V7C1,5.9,1.9,5,3,5z" />
                                       </svg>
                                       <h3> <span>Video: </span> Greetings and introduction</h3>
                                    </div>
                                    <div className="course__curriculum-meta">
                                       <span className="time"> <i className="icon_clock_alt"></i> 15 minutes</span>
                                    </div>
                                 </div>
                                 <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                                    <div className="course__curriculum-info">
                                       <svg viewBox="0 0 16 16">
                                          <path className="st0" d="M2,12V8c0-3.3,2.9-6,6.4-6s6.4,2.7,6.4,6v4" />
                                          <path className="st0" d="M14.8,12.7c0,0.7-0.6,1.3-1.4,1.3h-0.7c-0.8,0-1.4-0.6-1.4-1.3v-2c0-0.7,0.6-1.3,1.4-1.3h2.1V12.7z M2,12.7  C2,13.4,2.6,14,3.3,14H4c0.7,0,1.3-0.6,1.3-1.3v-2c0-0.7-0.6-1.3-1.3-1.3H2V12.7z" />
                                       </svg>
                                       <h3> <span>Audio:</span> Interactive lesson</h3>
                                    </div>
                                    <div className="course__curriculum-meta">
                                       <span className="time"> <i className="icon_clock_alt"></i> 7 minutes</span>
                                       <span className="question">2 questions</span>
                                    </div>
                                 </div>
                                 <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                                    <div className="course__curriculum-info">
                                       <svg className="document" viewBox="0 0 24 24">
                                          <path className="st0" d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z" />
                                          <polyline className="st0" points="14,2 14,8 20,8 " />
                                          <line className="st0" x1="16" y1="13" x2="8" y2="13" />
                                          <line className="st0" x1="16" y1="17" x2="8" y2="17" />
                                          <polyline className="st0" points="10,9 9,9 8,9 " />
                                       </svg>
                                       <h3> <span>Reading: </span> Ut enim ad minim veniam</h3>
                                    </div>
                                    <div className="course__curriculum-meta">
                                       <span className="time"> <i className="icon_clock_alt"></i> 22 minutes</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                  <div className="course__review">
                     <h3>Reviews</h3>
                     <p>Gosh william Im telling crikey burke I dont want no agro A bit of hows your father bugger all mate off his nut that, what a plonker cuppa owt to do</p>

                     <div className="course__review-rating mb-50">
                        <div className="row g-0">
                           <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
                              <div className="course__review-rating-info grey-bg-2 text-center">
                                 <h5>5</h5>
                                 <ul>
                                    <li><a href="#"> <i className="fa-solid fa-star"></i> </a></li>
                                    <li><a href="#"> <i className="fa-solid fa-star"></i> </a></li>
                                    <li><a href="#"> <i className="fa-solid fa-star"></i> </a></li>
                                    <li><a href="#"> <i className="fa-solid fa-star"></i> </a></li>
                                    <li><a href="#"> <i className="fa-solid fa-star"></i> </a></li>
                                 </ul>
                                 <p>4 Ratings</p>
                              </div>
                           </div>
                           <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8">
                              <div className="course__review-details grey-bg-2">
                                 <h5>Detailed Rating</h5>
                                 <div className="course__review-content mb-20">
                                    <div className="course__review-item d-flex align-items-center justify-content-between">
                                       <div className="course__review-text">
                                          <span>5 stars</span>
                                       </div>
                                       <div className="course__review-progress">
                                          <div className="single-progress" data-width="100%"></div>
                                       </div>
                                       <div className="course__review-percent">
                                          <h5>100%</h5>
                                       </div>
                                    </div>
                                    <div className="course__review-item d-flex align-items-center justify-content-between">
                                       <div className="course__review-text">
                                          <span>4 stars</span>
                                       </div>
                                       <div className="course__review-progress">
                                          <div className="single-progress" data-width="30%"></div>
                                       </div>
                                       <div className="course__review-percent">
                                          <h5>30%</h5>
                                       </div>
                                    </div>
                                    <div className="course__review-item d-flex align-items-center justify-content-between">
                                       <div className="course__review-text">
                                          <span>3 stars</span>
                                       </div>
                                       <div className="course__review-progress">
                                          <div className="single-progress" data-width="0%"></div>
                                       </div>
                                       <div className="course__review-percent">
                                          <h5>0%</h5>
                                       </div>
                                    </div>
                                    <div className="course__review-item d-flex align-items-center justify-content-between">
                                       <div className="course__review-text">
                                          <span>2 stars</span>
                                       </div>
                                       <div className="course__review-progress">
                                          <div className="single-progress" data-width="0%"></div>
                                       </div>
                                       <div className="course__review-percent">
                                          <h5>0%</h5>
                                       </div>
                                    </div>
                                    <div className="course__review-item d-flex align-items-center justify-content-between">
                                       <div className="course__review-text">
                                          <span>1 stars</span>
                                       </div>
                                       <div className="course__review-progress">
                                          <div className="single-progress" data-width="0%"></div>
                                       </div>
                                       <div className="course__review-percent">
                                          <h5>0%</h5>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="course__comment mb-75">
                        <h3 className="course__comment-title">2 Comments</h3>

                        <ul>
                           <li>
                              <div className="course__comment-box ">
                                 <div className="course__comment-thumb float-start">
                                    {
                                       dynamicPage ? <img src={"/" + "assets/img/course/comment/course-comment-1.jpg"}
                                          alt="" /> : <img src="assets/img/course/comment/course-comment-1.jpg" alt="" />
                                    }
                                 </div>
                                 <div className="course__comment-content">
                                    <div className="course__comment-wrapper ml-70 fix">
                                       <div className="course__comment-info float-start">
                                          <h4>Eleanor Fant</h4>
                                          <span>July 14, 2022</span>
                                       </div>
                                       <div className="course__comment-rating float-start float-sm-end">
                                          <ul>
                                             <li><a href="#"> <i className="fa-solid fa-star"></i> </a></li>
                                             <li><a href="#"> <i className="fa-solid fa-star"></i> </a></li>
                                             <li><a href="#"> <i className="fa-solid fa-star"></i> </a></li>
                                             <li><a href="#"> <i className="fa-solid fa-star"></i> </a></li>
                                             <li><a href="#"> <i className="fa-solid fa-star"></i> </a></li>
                                          </ul>
                                       </div>
                                    </div>
                                    <div className="course__comment-text ml-70">
                                       <p>So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of hows your father my lady absolutely.</p>
                                    </div>
                                 </div>
                              </div>
                           </li>
                           <li className="children">
                              <div className="course__comment-box ">
                                 <div className="course__comment-thumb float-start">
                                    {
                                       dynamicPage ? <img src={"/" + "assets/img/course/comment/course-comment-1.jpg"}
                                          alt="" /> : <img src="assets/img/course/comment/course-comment-1.jpg" alt="" />
                                    }
                                 </div>
                                 <div className="course__comment-content">
                                    <div className="course__comment-wrapper ml-70 fix">
                                       <div className="course__comment-info float-start">
                                          <h4>Eleanor Fant</h4>
                                          <span>July 14, 2022</span>
                                       </div>
                                       <div className="course__comment-rating float-start float-sm-end">
                                          <ul>
                                             <li><a href="#"> <i className="fa-solid fa-star"></i> </a></li>
                                             <li><a href="#"> <i className="fa-solid fa-star"></i> </a></li>
                                             <li><a href="#"> <i className="fa-solid fa-star"></i> </a></li>
                                             <li><a href="#"> <i className="fa-solid fa-star"></i> </a></li>
                                             <li><a href="#"> <i className="fa-solid fa-star"></i> </a></li>
                                          </ul>
                                       </div>
                                    </div>
                                    <div className="course__comment-text ml-70">
                                       <p>So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of hows your father my lady absolutely.</p>
                                    </div>
                                 </div>
                              </div>
                           </li>
                           <li>
                              <div className="course__comment-box ">
                                 <div className="course__comment-thumb float-start">
                                    {
                                       dynamicPage ? <img src={"/" + "assets/img/course/comment/course-comment-2.jpg"}
                                          alt="" /> : <img src="assets/img/course/comment/course-comment-2.jpg" alt="" />
                                    }
                                 </div>
                                 <div className="course__comment-content">
                                    <div className="course__comment-wrapper ml-70 fix">
                                       <div className="course__comment-info float-start">
                                          <h4>Shahnewaz Sakil</h4>
                                          <span>July 17, 2022</span>
                                       </div>
                                       <div className="course__comment-rating float-start float-sm-end">
                                          <ul>
                                             <li><a href="#"> <i className="fa-solid fa-star"></i> </a></li>
                                             <li><a href="#"> <i className="fa-solid fa-star"></i> </a></li>
                                             <li><a href="#"> <i className="fa-solid fa-star"></i> </a></li>
                                             <li><a href="#"> <i className="fa-solid fa-star"></i> </a></li>
                                             <li><a href="#"> <i className="fa-solid fa-star"></i> </a></li>
                                          </ul>
                                       </div>
                                    </div>
                                    <div className="course__comment-text ml-70">
                                       <p>David blatant have it, standard A bit of hows your father my lady absolutely.</p>
                                    </div>
                                 </div>
                              </div>
                           </li>
                        </ul>
                     </div>
                     <div className="course__form">
                        <h3 className="course__form-title">Write a Review</h3>
                        <div className="course__form-inner">
                           <form action="#">
                              <div className="row">
                                 <div className="col-xxl-6">
                                    <div className="course__form-input">
                                       <input type="text" placeholder="Your Name" />
                                    </div>
                                 </div>
                                 <div className="col-xxl-6">
                                    <div className="course__form-input">
                                       <input type="email" placeholder="Your Email" />
                                    </div>
                                 </div>
                                 <div className="col-xxl-12">
                                    <div className="course__form-input">
                                       <input type="text" placeholder="Review Title" />
                                    </div>
                                 </div>
                                 <div className="col-xxl-12">
                                    <div className="course__form-input">
                                       <div className="course__form-rating">
                                          <span>Rating : </span>
                                          <ul>
                                             <li><a href="#"> <i className="fa-solid fa-star"></i> </a></li>
                                             <li><a href="#"> <i className="fa-solid fa-star"></i> </a></li>
                                             <li><a href="#"> <i className="fa-solid fa-star"></i> </a></li>
                                             <li><a href="#" className="no-rating" > <i className="fa-solid fa-star"></i> </a></li>
                                             <li><a href="#" className="no-rating" > <i className="fa-solid fa-star"></i> </a></li>
                                          </ul>
                                       </div>
                                       <textarea placeholder="Review Summary"></textarea>
                                    </div>
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="col-xxl-12">
                                    <div className="course__form-btn mt-10 mb-55">
                                       <button type="submit" className="tp-btn">Submit Review</button>
                                    </div>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="tab-pane fade" id="member" role="tabpanel" aria-labelledby="member-tab">
                  <div className="course__member mb-45">
                     <div className="course__member-item">
                        <div className="row align-items-center">
                           <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-6">
                              <div className="course__member-thumb d-flex align-items-center">
                                 {
                                    dynamicPage ? <img src={"/" + "assets/img/course/instructor/course-instructor-1.jpg"} alt="" /> : <img src="assets/img/course/instructor/course-instructor-1.jpg" alt="" />
                                 }
                                 <div className="course__member-name ml-20">
                                    <h5>Shahnewaz Sakil</h5>
                                    <span>Engineer</span>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4">
                              <div className="course__member-info pl-45">
                                 <h5>07</h5>
                                 <span>Courses</span>
                              </div>
                           </div>
                           <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4">
                              <div className="course__member-info pl-70">
                                 <h5>05</h5>
                                 <span>Reviw</span>
                              </div>
                           </div>
                           <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4">
                              <div className="course__member-info pl-85">
                                 <h5>3.00</h5>
                                 <span>Rating</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="course__member-item">
                        <div className="row align-items-center">
                           <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-6">
                              <div className="course__member-thumb d-flex align-items-center">
                                 {
                                    dynamicPage ? <img src={"/" + "assets/img/course/instructor/course-instructor-2.jpg"} alt="" /> : <img src="assets/img/course/instructor/course-instructor-2.jpg" alt="" />
                                 }
                                 <div className="course__member-name ml-20">
                                    <h5>Lauren Stamps</h5>
                                    <span>Teacher</span>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4">
                              <div className="course__member-info pl-45">
                                 <h5>05</h5>
                                 <span>Courses</span>
                              </div>
                           </div>
                           <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4">
                              <div className="course__member-info pl-70">
                                 <h5>03</h5>
                                 <span>Reviw</span>
                              </div>
                           </div>
                           <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4">
                              <div className="course__member-info pl-85">
                                 <h5>3.00</h5>
                                 <span>Rating</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="course__member-item">
                        <div className="row align-items-center">
                           <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-6 ">
                              <div className="course__member-thumb d-flex align-items-center">
                                 {
                                    dynamicPage ? <img src={"/" + "assets/img/course/instructor/course-instructor-3.jpg"} alt="" /> : <img src="assets/img/course/instructor/course-instructor-3.jpg" alt="" />
                                 }
                                 <div className="course__member-name ml-20">
                                    <h5>Jonquil Von</h5>
                                    <span>Associate</span>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4">
                              <div className="course__member-info pl-45">
                                 <h5>09</h5>
                                 <span>Courses</span>
                              </div>
                           </div>
                           <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4">
                              <div className="course__member-info pl-70">
                                 <h5>07</h5>
                                 <span>Reviw</span>
                              </div>
                           </div>
                           <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4">
                              <div className="course__member-info pl-85">
                                 <h5>4.00</h5>
                                 <span>Rating</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="course__share">
                  <h3>Share :</h3>
                  <ul>
                     <li><a href="#" className="fb" ><i className="fa-brands fa-facebook-f"></i></a></li>
                     <li><a href="#" className="tw" ><i className="fa-brands fa-twitter"></i></a></li>
                     <li><a href="#" className="pin" ><i className="fa-brands fa-pinterest-p"></i></a></li>
                  </ul>
               </div>
            </div>
         </div>
      </>
   );
};

export default DetailsTabItems;