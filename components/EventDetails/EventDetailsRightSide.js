import Link from 'next/link';

const EventDetailsRightSide = () => {
   return (
      <>
         <div className="col-xxl-4 col-xl-4 col-lg-4">
            <div className="event__sidebar pl-70">
               <div className="event__sidebar-widget white-bg mb-20">
                  <div className="event__sidebar-shape">
                     <img className="event-sidebar-img-2" src="assets/img/events/event-shape-2.png" alt="" />
                     <img className="event-sidebar-img-3" src="assets/img/events/event-shape-3.png" alt="" />
                  </div>
                  <div className="event__info">
                     <div className="event__info-meta mb-25 d-flex align-items-center justify-content-between">
                        <div className="event__info-price">
                           <h5>$76.<span>00</span> </h5>
                        </div>
                        <div className="event__info-discount">
                           <span>On Sale</span>
                        </div>
                     </div>
                     <div className="event__info-content mb-35">
                        <ul>
                           <li className="d-flex align-items-center">
                              <div className="event__info-icon">
                                 <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    viewBox="0 0 16 16" style={{ enableBackground: "new 0 0 16 16" }} xmlSpace="preserve">
                                    <path className="st0" d="M2,6l6-4.7L14,6v7.3c0,0.7-0.6,1.3-1.3,1.3H3.3c-0.7,0-1.3-0.6-1.3-1.3V6z" />
                                    <polyline className="st0" points="6,14.7 6,8 10,8 10,14.7 " />
                                 </svg>
                              </div>
                              <div className="event__info-item">
                                 <h5><span>End: </span> July 26, 2022 12:30 am</h5>
                              </div>
                           </li>
                           <li className="d-flex align-items-center">
                              <div className="event__info-icon">
                                 <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    viewBox="0 0 16 16" style={{ enableBackground: "new 0 0 16 16" }} xmlSpace="preserve">
                                    <path className="st0" d="M2,6l6-4.7L14,6v7.3c0,0.7-0.6,1.3-1.3,1.3H3.3c-0.7,0-1.3-0.6-1.3-1.3V6z" />
                                    <polyline className="st0" points="6,14.7 6,8 10,8 10,14.7 " />
                                 </svg>
                              </div>
                              <div className="event__info-item">
                                 <h5><span>Time:</span>  10:45 AM-01:30 PM</h5>
                              </div>
                           </li>
                           <li className="d-flex align-items-center">
                              <div className="event__info-icon">
                                 <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    viewBox="0 0 16 16" style={{ enableBackground: "new 0 0 16 16" }} xmlSpace="preserve">
                                    <path className="st0" d="M2,6l6-4.7L14,6v7.3c0,0.7-0.6,1.3-1.3,1.3H3.3c-0.7,0-1.3-0.6-1.3-1.3V6z" />
                                    <polyline className="st0" points="6,14.7 6,8 10,8 10,14.7 " />
                                 </svg>
                              </div>
                              <div className="event__info-item">
                                 <h5><span>Venue: </span> New York, TX 82760, US</h5>
                              </div>
                           </li>
                        </ul>
                     </div>
                     <div className="event__join-btn">
                        <Link href="/contact">
                           <a className="tp-btn text-center w-100">Enroll <i className="far fa-arrow-right"></i></a>
                        </Link>
                     </div>
                  </div>
               </div>
               <div className="event__sidebar-widget white-bg">
                  <div className="event__sponsor">
                     <h3 className="event__sponsor-title">Sponsors</h3>
                     <div className="event__sponsor-thumb mb-35">
                        <img src="assets/img/events/sponsor-logo.png" alt="" />
                     </div>
                     <div className="event__sponsor-info">
                        <h3>Thomas R. Toe</h3>
                        <h4>Email: <span>support@educal.com</span></h4>
                        <div className="event__social d-xl-flex align-items-center">
                           <h4>Share:</h4>
                           <ul>
                              <li><a href="#" className="fb" ><i className="fa-brands fa-facebook-f"></i></a></li>
                              <li><a href="#" className="tw" ><i className="fa-brands fa-twitter"></i></a></li>
                              <li><a href="#" className="pin" ><i className="fa-brands fa-pinterest-p"></i></a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default EventDetailsRightSide;