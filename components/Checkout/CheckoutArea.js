import React, { useState } from 'react';
import OrderArea from './OrderArea';

const CheckoutArea = () => {
   // createAccount
   const [createAccount, setCreateAccount] = useState(false);
   // shipBox
   const [shipBox, setShipBox] = useState(false);
   // handleOrderSubmit
   const handleOrderSubmit = (e) => {
      e.preventDefault()
      // handle order
      Swal.fire({
         position: 'top-center',
         icon: 'success',
         title: 'Order place successfully',
         showConfirmButton: false,
         timer: 1500
      })
   }

   return (
      <>
         <section className="checkout-area pb-85">
            <div className="container">
               <form onSubmit={handleOrderSubmit}>
                  <div className="row">
                     <div className="col-lg-6">
                        <div className="checkbox-form">
                           <h3>Billing Details</h3>
                           <div className="row">
                              <div className="col-md-12">
                                 <div className="country-select">
                                    <label>Country <span className="required">*</span></label>
                                    <select required>
                                       <option value="volvo">Bangladesh</option>
                                       <option value="saab">Algeria</option>
                                       <option value="mercedes">Afghanistan</option>
                                       <option value="audi">Ghana</option>
                                       <option value="audi2">Albania</option>
                                       <option value="audi3">Bahrain</option>
                                       <option value="audi4">Colombia</option>
                                       <option value="audi5">Dominican Republic</option>
                                    </select>
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>First Name <span className="required">*</span></label>
                                    <input required type="text" placeholder="" />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Last Name <span className="required">*</span></label>
                                    <input required type="text" placeholder="" />
                                 </div>
                              </div>
                              <div className="col-md-12">
                                 <div className="checkout-form-list">
                                    <label>Company Name</label>
                                    <input type="text" placeholder="" />
                                 </div>
                              </div>
                              <div className="col-md-12">
                                 <div className="checkout-form-list">
                                    <label>Address <span className="required">*</span></label>
                                    <input required type="text" placeholder="Street address" />
                                 </div>
                              </div>
                              <div className="col-md-12">
                                 <div className="checkout-form-list">
                                    <input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                                 </div>
                              </div>
                              <div className="col-md-12">
                                 <div className="checkout-form-list">
                                    <label>Town / City <span className="required">*</span></label>
                                    <input required type="text" placeholder="Town / City" />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>State / County <span className="required">*</span></label>
                                    <input required type="text" placeholder="" />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Postcode / Zip <span className="required">*</span></label>
                                    <input required type="text" placeholder="Postcode / Zip" />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Email Address <span className="required">*</span></label>
                                    <input required type="email" placeholder="" />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Phone <span className="required">*</span></label>
                                    <input required type="text" placeholder="Postcode / Zip" />
                                 </div>
                              </div>
                              <div className="col-md-12">
                                 <div className="checkout-form-list create-acc">
                                    <input id="cbox" type="checkbox" onClick={() => setCreateAccount(!createAccount)} />
                                    <label>Create an account?</label>
                                 </div>
                                 {createAccount && <div id="cbox_info" className="checkout-form-list create-account">
                                    <p>Create an account by entering the information below. If you are a returning
                                       customer please login at the top of the page.</p>
                                    <label>Account password <span className="required">*</span></label>
                                    <input required type="password" placeholder="password" />
                                 </div>}
                              </div>
                           </div>
                           <div className="different-address">
                              <div className="ship-different-title">
                                 <h3>
                                    <label>Ship to a different address?</label>
                                    <input id="ship-box" type="checkbox" onClick={() => setShipBox(!shipBox)} />
                                 </h3>
                              </div>
                              {shipBox && <div id="ship-box-info">
                                 <div className="row">
                                    <div className="col-md-12">
                                       <div className="country-select">
                                          <label>Country <span className="required">*</span></label>
                                          <select required>
                                             <option value="volvo">Bangladesh</option>
                                             <option value="saab">Algeria</option>
                                             <option value="mercedes">Afghanistan</option>
                                             <option value="audi">Ghana</option>
                                             <option value="audi2">Albania</option>
                                             <option value="audi3">Bahrain</option>
                                             <option value="audi4">Colombia</option>
                                             <option value="audi5">Dominican Republic</option>
                                          </select>

                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="checkout-form-list">
                                          <label>First Name <span className="required">*</span></label>
                                          <input required type="text" placeholder="" />
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="checkout-form-list">
                                          <label>Last Name <span className="required">*</span></label>
                                          <input required type="text" placeholder="" />
                                       </div>
                                    </div>
                                    <div className="col-md-12">
                                       <div className="checkout-form-list">
                                          <label>Company Name</label>
                                          <input type="text" placeholder="" />
                                       </div>
                                    </div>
                                    <div className="col-md-12">
                                       <div className="checkout-form-list">
                                          <label>Address <span className="required">*</span></label>
                                          <input required type="text" placeholder="Street address" />
                                       </div>
                                    </div>
                                    <div className="col-md-12">
                                       <div className="checkout-form-list">
                                          <input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                                       </div>
                                    </div>
                                    <div className="col-md-12">
                                       <div className="checkout-form-list">
                                          <label>Town / City <span className="required">*</span></label>
                                          <input required type="text" placeholder="Town / City" />
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="checkout-form-list">
                                          <label>State / County <span className="required">*</span></label>
                                          <input required type="text" placeholder="" />
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="checkout-form-list">
                                          <label>Postcode / Zip <span className="required">*</span></label>
                                          <input required type="text" placeholder="Postcode / Zip" />
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="checkout-form-list">
                                          <label>Email Address <span className="required">*</span></label>
                                          <input type="email" placeholder="" />
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="checkout-form-list">
                                          <label>Phone <span className="required">*</span></label>
                                          <input required type="text" placeholder="Postcode / Zip" />
                                       </div>
                                    </div>
                                 </div>
                              </div>}
                              <div className="order-notes">
                                 <div className="checkout-form-list">
                                    <label>Order Notes</label>
                                    <textarea id="checkout-mess" cols="30" rows="10" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* order area */}
                     <OrderArea />
                     {/* order end */}
                  </div>
               </form>
            </div>
         </section>
      </>
   );
};

export default CheckoutArea;