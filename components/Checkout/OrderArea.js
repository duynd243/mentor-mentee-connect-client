import React from 'react';
import { useSelector } from 'react-redux';

const OrderArea = () => {
   // cartItems
   const cartItems = useSelector(state => state.cart.cartItems);
   // cartTotal
   const cartTotal = useSelector((state) => state.cart.cartTotalAmount);
   return (
      <>
         <div className="col-lg-6">
            <div className="your-order mb-30 ">
               <h3>Your order</h3>
               <div className="your-order-table table-responsive">
                  <table>
                     <thead>
                        <tr>
                           <th className="product-name">Product</th>
                           <th className="product-total text-end">Total</th>
                        </tr>
                     </thead>
                     <tbody>
                        {
                           cartItems.map((cart, index) => {
                              return <tr key={index} className="cart_item">
                                 <td className="product-name">
                                    {cart.title} <strong className="product-quantity"> × {cart.cartQuantity}</strong>
                                 </td>
                                 <td className="product-total text-end">
                                    <span className="amount">${cart.price * cart.cartQuantity}</span>
                                 </td>
                              </tr>
                           })
                        }
                     </tbody>
                     <tfoot>
                        <tr className="cart-subtotal">
                           <th>Cart Subtotal</th>
                           <td className='text-end'><span className="amount">${cartTotal}</span></td>
                        </tr>
                       
                        <tr className="order-total">
                           <th>Order Total</th>
                           <td className='text-end'><strong><span className="amount">${cartTotal}</span></strong>
                           </td>
                        </tr>
                     </tfoot>
                  </table>
               </div>

               <div className="payment-method">
                  <div className="accordion" id="checkoutAccordion">
                     <div className="accordion-item">
                        <h2 className="accordion-header" id="checkoutOne">
                           <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#bankOne" aria-expanded="true" aria-controls="bankOne">
                              Direct Bank Transfer
                           </button>
                        </h2>
                        <div id="bankOne" className="accordion-collapse collapse show" aria-labelledby="checkoutOne" data-bs-parent="#checkoutAccordion">
                           <div className="accordion-body">
                              <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                           </div>
                        </div>
                     </div>
                     <div className="accordion-item">
                        <h2 className="accordion-header" id="paymentTwo">
                           <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#payment" aria-expanded="false" aria-controls="payment">
                              Cheque Payment
                           </button>
                        </h2>
                        <div id="payment" className="accordion-collapse collapse" aria-labelledby="paymentTwo" data-bs-parent="#checkoutAccordion">
                           <div className="accordion-body">
                              <p>Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                           </div>
                        </div>
                     </div>
                     <div className="accordion-item">
                        <h2 className="accordion-header" id="paypalThree">
                           <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#paypal" aria-expanded="false" aria-controls="paypal">
                              PayPal
                           </button>
                        </h2>
                        <div id="paypal" className="accordion-collapse collapse" aria-labelledby="paypalThree" data-bs-parent="#checkoutAccordion">
                           <div className="accordion-body">
                              <p>Pay via PayPal; you can pay with your credit card if you don’t have a
                                 PayPal account.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="order-button-payment mt-20">
                     <button type="submit" className="tp-btn">Place order</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default OrderArea;