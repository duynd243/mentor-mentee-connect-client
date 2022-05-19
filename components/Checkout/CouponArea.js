import React, { useState } from 'react';

const CouponArea = () => {
   // checkoutLogin
   const [checkoutLogin, setCheckoutLogin] = useState(false);
   // checkoutCoupon
   const [checkoutCoupon, setCheckoutCoupon] = useState(false);
   return (
      <>
         <section className="coupon-area pt-120 pb-30">
            <div className="container">
               <div className="row">
                  <div className="col-md-6">
                     <div className="coupon-accordion">

                        <h3>Returning customer? <span onClick={() => setCheckoutLogin(!checkoutLogin)} id="showlogin">Click here to login</span></h3>
                        {checkoutLogin && <div id="checkout-login" className="coupon-content">
                           <div className="coupon-info">
                              <p className="coupon-text">Quisque gravida turpis sit amet nulla posuere lacinia. Cras sed est
                                 sit amet ipsum luctus.</p>
                              <form action="#">
                                 <p className="form-row-first">
                                    <label>Username or email <span className="required">*</span></label>
                                    <input type="text" />
                                 </p>
                                 <p className="form-row-last">
                                    <label>Password <span className="required">*</span></label>
                                    <input type="text" />
                                 </p>
                                 <p className="form-row">
                                    <button className="tp-btn" type="submit">Login</button>
                                    <label>
                                       <input type="checkbox" />
                                       Remember me
                                    </label>
                                 </p>
                                 <p className="lost-password">
                                    <a href="#">Lost your password?</a>
                                 </p>
                              </form>
                           </div>
                        </div>}

                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="coupon-accordion">

                        <h3>Have a coupon? <span onClick={() => setCheckoutCoupon(!checkoutCoupon)} id="showcoupon">Click here to enter your code</span></h3>
                        {checkoutCoupon && <div id="checkout_coupon" className="coupon-checkout-content">
                           <div className="coupon-info">
                              <form action="#">
                                 <p className="checkout-coupon">
                                    <input type="text" placeholder="Coupon Code" />
                                    <button className="tp-btn" type="submit">Apply Coupon</button>
                                 </p>
                              </form>
                           </div>
                        </div>}

                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default CouponArea;