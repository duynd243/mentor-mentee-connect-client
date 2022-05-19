import Link from 'next/link';

const Pricing = () => {
   return (
      <>
         <section className="price__area pb-85">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper text-center mb-60">
                        <span className="section__title-pre-3">Our Pricing</span>
                        
                        <h2 className="section__title-2">Simple, transparent pricing</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="price__banner theme-bg-3 mb-30 fix p-relative">
                        <div className="price__shape">
                           <img src="assets/img/price/price-shape.png" alt="" />
                        </div>
                        <div className="price__banner-content p-relative z-index-1">
                           <h3>
                              <span>Save More</span>
                              With Goodplans.
                           </h3>
                           <p>Choose a plan and getunboard minutes.Then get $100 credits for your next payment</p>
                           <Link href="/contact">
                              <a className="tp-price-btn">Choose Plan</a>
                           </Link>
                        </div>
                        <div className="price__thumb">
                           <img src="assets/img/price/price-thumb.png" alt="" />
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="price__item white-bg mb-30 transition-3 fix">
                        <h3 className="price__title">Day pass</h3>

                        <div className="price__content">
                           <div className="price__list mb-35">
                              <ul>
                                 <li>All limited links <span><i className="fa-solid fa-check"></i></span></li>
                                 <li>Own analytics platform <span><i className="fa-solid fa-check"></i></span></li>
                                 <li>Chat support <span><i className="fa-solid fa-check"></i></span></li>
                                 <li className="unavailable">Optimuze hashtags <span><i className="fa-solid fa-xmark"></i></span></li>
                                 <li className="unavailable">Unlimited user <span><i className="fa-solid fa-xmark"></i></span></li>
                              </ul>
                           </div>
                           <div className="price__amount mb-30">
                              <h4>$16.00 <span>/ perday</span></h4>
                           </div>
                           <div className="price__btn">
                              <Link href="/contact">
                                 <a className="tp-btn-9 tp-btn-12 w-100">Choose Plan</a>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="price__item active white-bg mb-30 transition-3 fix">
                        <h3 className="price__title">Monthly pass</h3>

                        <div className="price__content">
                           <div className="price__list mb-35">
                              <ul>
                                 <li>All limited links <span><i className="fa-solid fa-check"></i></span></li>
                                 <li>Own analytics platform <span><i className="fa-solid fa-check"></i></span></li>
                                 <li>Chat support <span><i className="fa-solid fa-check"></i></span></li>
                                 <li>Optimuze hashtags <span><i className="fa-solid fa-xmark"></i></span></li>
                                 <li>Unlimited user <span><i className="fa-solid fa-xmark"></i></span></li>
                              </ul>
                           </div>
                           <div className="price__amount mb-30">
                              <h4>$34.00 <span>/ monthly</span></h4>
                           </div>
                           <div className="price__btn">
                              <Link href="/contact">
                                 <a className="tp-btn-9 tp-btn-12 w-100">Choose Plan</a>
                              </Link>
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

export default Pricing;