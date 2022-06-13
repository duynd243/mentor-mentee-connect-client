import Link from 'next/link';

const ContactFooter = () => {
   return (
      <>
         <footer>
            <div className="footer__area footer__black ">
               <div className="footer__top black-bg-5 pt-95 pb-45">
                  <div className="container">
                     <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7">
                           <div className="footer__widget footer-col-1 mb-50">
                              <div className="footer__logo">
                                 <div className="logo">
                                    <Link href="/">
                                       <a >
                                          <img src="assets/img/logo/logo-white.png" alt="" />
                                       </a>
                                    </Link>
                                 </div>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__widget-info">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisc ing elit. Nunc maximus, nulla utlaoki comm odo sagittis.</p>
                                    <div className="footer__social">
                                       <h4>Follow Us</h4>

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
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-5">
                           <div className="footer__widget mb-50">
                              <h3 className="footer__widget-title">Explore</h3>
                              <div className="footer__widget-content">
                                 <ul>
                                    <li>
                                       <a href="#">About us</a>
                                    </li>
                                    <li>
                                       <a href="#">Success story</a>
                                    </li>
                                    <li>
                                       <a href="#">Courses</a>
                                    </li>
                                    <li>
                                       <a href="#">About us</a>
                                    </li>
                                    <li>
                                       <a href="#">Instructor</a>
                                    </li>
                                    <li>
                                       <a href="#">Events</a>
                                    </li>
                                    <li>
                                       <a href="#">Contact us</a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-5">
                           <div className="footer__widget mb-50">
                              <h3 className="footer__widget-title">Links</h3>
                              <div className="footer__widget-content">
                                 <ul>
                                    <li>
                                       <a href="#">News & Blogs</a>
                                    </li>
                                    <li>
                                       <a href="#">Library</a>
                                    </li>
                                    <li>
                                       <a href="#">Gallery</a>
                                    </li>
                                    <li>
                                       <a href="#">Terms of service</a>
                                    </li>
                                    <li>
                                       <a href="#">Membership</a>
                                    </li>
                                    <li>
                                       <a href="#">Career</a>
                                    </li>
                                    <li>
                                       <a href="#">Partners</a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7">
                           <div className="footer__widget footer-col-4 mb-50">
                              <h3 className="footer__widget-title">Newsletter</h3>

                              <div className="footer__subscribe">
                                 <p>Receive weekly newsletter with educational materials, popular books and much more!</p>
                                 <form action="#">
                                    <div className="footer__subscribe-input">
                                       <input type="text" placeholder="Email" />
                                       <button type="submit" className="tp-btn-subscribe">Subscribe</button>
                                    </div>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="footer__bottom black-bg-5">
                  <div className="container">
                     <div className="footer__bottom-inner">
                        <div className="row">
                           <div className="col-xxl-12">
                              <div className="footer__copyright text-center">
                                 <p>© 2022 Educal. All Rights Reserved</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};

export default ContactFooter;