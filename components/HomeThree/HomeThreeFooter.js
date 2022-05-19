import Link from 'next/link';

const HomeThreeFooter = () => {
   return (
      <>
         <footer>
            <div className="footer__area">
               <div className="footer__top grey-bg-4 pt-95 pb-45">
                  <div className="container">
                     <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7">
                           <div className="footer__widget footer__widget-3 footer-col-3-1 mb-50">
                              <div className="footer__logo">
                                 <div className="logo">
                                    <Link href="/">
                                       <a >
                                          <img src="assets/img/logo/logo-3.png" alt="" />
                                       </a>
                                    </Link>
                                 </div>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__widget-info">
                                    <div className="footer__subscribe footer__subscribe-3">
                                       <p>Educal University does not discriminate on the basis of race, nationa.</p>
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
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-5">
                           <div className="footer__widget footer__widget-3 footer-col-3-2 mb-50">
                              <h3 className="footer__widget-title footer__widget-title-3">Explore</h3>
                              <div className="footer__widget-content">
                                 <ul>
                                    <li>
                                       <a href="#">About us</a>
                                    </li>
                                    <li>
                                       <a href="#">Courses</a>
                                    </li>
                                    <li>
                                       <a href="#">Educal University</a>
                                    </li>
                                    <li>
                                       <a href="#">Instructor</a>
                                    </li>
                                    <li>
                                       <a href="#">Events</a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-3 col-xl-2 col-lg-2 col-md-3 col-sm-5">
                           <div className="footer__widget footer__widget-3 footer-col-3-3 mb-50">
                              <h3 className="footer__widget-title footer__widget-title-3">Links</h3>
                              <div className="footer__widget-content">
                                 <ul>
                                    <li>
                                       <a href="#">Partners</a>
                                    </li>
                                    <li>
                                       <a href="#">Support the canpaing</a>
                                    </li>
                                    <li>
                                       <a href="#">News & Blogs</a>
                                    </li>
                                    <li>
                                       <a href="#">Library</a>
                                    </li>
                                    <li>
                                       <a href="#">Contact us</a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-7">
                           <div className="footer__widget footer__widget-3 footer-col-3-4 mb-50">
                              <h3 className="footer__widget-title footer__widget-title-3">Information</h3>

                              <div className="footer__contact">
                                 <ul>
                                    <li>
                                       <p>University Offices:</p>
                                       <h4><a href="https://www.google.com/maps/place/%E0%A6%A2%E0%A6%BE%E0%A6%95%E0%A6%BE/@23.7807777,90.3492857,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.810332!4d90.4125181" target="_blank" rel="noreferrer">382 NE 191st  87394 Miami,</a></h4>
                                    </li>
                                    <li>
                                       <p>International:</p>
                                       <h4><a href="tel:088-234-567-899">+(088) 234 567 899</a></h4>
                                    </li>
                                    <li>
                                       <p>International:</p>
                                       <h4><a href="mailto:info@educal.com">info@educal.com</a></h4>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="footer__bottom grey-bg-4">
                  <div className="container">
                     <div className="footer__bottom-inner">
                        <div className="row">
                           <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                              <div className="footer__bottom-link">
                                 <ul>
                                    <li><a href="#">Disclaimer & Copyright</a></li>
                                    <li><a href="#">Accessibility</a></li>
                                    <li><a href="#">Privacy</a></li>
                                 </ul>
                              </div>
                           </div>
                           <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                              <div className="footer__social footer__social-3 text-md-end">
                                 <ul>
                                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                 </ul>
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

export default HomeThreeFooter;