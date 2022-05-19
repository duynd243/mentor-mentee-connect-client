import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearCart, decreaseCartQuantity, getTotal, removeFromCart } from '../../redux/features/cartSlice';
import Swal from 'sweetalert2';
import Link from 'next/link';

const CartArea = () => {
   // check cart items
   const [items, setItems] = useState(false)
   // cartItems
   const cartItems = useSelector(state => state.cart.cartItems);
   // totalAmount
   const totalAmount = useSelector(state => state.cart.cartTotalAmount);
   // dispatch
   const dispatch = useDispatch();
   // check cart items
   useEffect(() => {
      if (cartItems.length === 0) {
         setItems(true)
      }
      else {
         setItems(false)
      }
   }, [cartItems])
   // dispatch getTotal
   useEffect(() => {
      dispatch(getTotal())
   }, [dispatch, cartItems]);
   // handleRemoveCart
   const handleRemoveCart = (item) => {
      dispatch(removeFromCart(item))
   }
   // handleAddToCart
   const handleAddToCart = (item) => {
      dispatch(addToCart(item))
   }
   // handleDecreaseCartQuantity
   const handleDecreaseCartQuantity = (item) => {
      dispatch(decreaseCartQuantity(item))
   }
   // handleSubmit
   const handleSubmit = (e) => {
      e.preventDefault();
      Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'Coupon not available this time',
      })
   }
   // handleClearCart
   const handleClearCart = () => {
      Swal.fire({
         title: 'Are you sure?',
         text: "Deleted your all cart items",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
         if (result.isConfirmed) {
            dispatch(clearCart());
            setItems(false);
            Swal.fire(
               'Deleted!',
               'Your cart items has been deleted.',
               'success'
            )
         }
      })
   }
   return (
      <>
         <section className="cart-area pt-120 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     {
                        items && <h2>Your cart is empty</h2>
                     }
                     {!items && <form onSubmit={handleSubmit}>
                        <div className="table-content table-responsive">
                           <table className="table">
                              <thead>
                                 <tr>
                                    <th className="product-thumbnail">Images</th>
                                    <th className="cart-product-name">Product</th>
                                    <th className="product-price">Unit Price</th>
                                    <th className="product-quantity">Quantity</th>
                                    <th className="product-subtotal">Total</th>
                                    <th className="product-remove">Remove</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {
                                    cartItems.map(item => {
                                       return <tr key={item?._id}>
                                          <td className="product-thumbnail">
                                             <Link href={`/course-details/${item?._id}`}>
                                                <a >
                                                   <img src={item?.img_bg} alt="" />
                                                </a>
                                             </Link>

                                          </td>
                                          <td className="product-name">
                                             <Link href={`/course-details/${item?._id}`}>
                                                <a >{item?.title}</a>
                                             </Link>
                                          </td>
                                          <td className="product-price"><span className="amount">${item?.price}</span></td>
                                          <td className="product-quantity">
                                             <div className="cart-plus-minus">
                                                <span > {item?.cartQuantity} </span>
                                                <div onClick={() => handleDecreaseCartQuantity(item)}
                                                   className="dec qtybutton">-</div>
                                                <div onClick={() => handleAddToCart(item)}
                                                   className="inc qtybutton">+</div>
                                             </div>
                                          </td>
                                          <td className="product-subtotal">
                                             <span className="amount">${item?.price * item?.cartQuantity}</span>
                                          </td>
                                          <td style={{ cursor: 'pointer' }}
                                             onClick={() => handleRemoveCart(item)} className="product-remove">
                                             <a>
                                                <i className="fa fa-times"></i>
                                             </a>
                                          </td>
                                       </tr>
                                    })
                                 }

                              </tbody>
                           </table>
                        </div>
                        <div className="row">
                           <div className="col-12">
                              <div className="coupon-all">
                                 <div className="coupon">
                                    <input required id="coupon_code" className="input-text" name="coupon_code" defaultValue="" placeholder="Coupon code" type="text" />
                                    <button className="tp-btn" name="apply_coupon" type="submit">Apply coupon</button>
                                 </div>
                                 <div className="coupon2">
                                    <button onClick={handleClearCart} className="tp-btn" name="update_cart" type="button">Clear Cart</button>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="row justify-content-end">
                           <div className="col-md-5">
                              <div className="cart-page-total">
                                 <h2>Cart totals</h2>
                                 <ul className="mb-20">
                                    <li>Subtotal <span>${totalAmount}</span></li>
                                    <li>Total <span>${totalAmount}</span></li>
                                 </ul>
                                 <Link href="/checkout">
                                    <a className="tp-btn" >Proceed to checkout</a>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </form>}
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default CartArea;