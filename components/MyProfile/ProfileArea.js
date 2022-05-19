import { useDispatch, useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import Link from 'next/link'
import { useEffect } from "react";
import { getTotal } from "../../redux/features/cartSlice";


const ProfileArea = () => {
   // quantity
   const quantity = useSelector(state => state.cart.cartTotalQuantity);
   // myOrders
   const myOrders = useSelector(state => state.order.myOrders);
   // user
   const { user } = useAuth();
   // dispatch
   const dispatch = useDispatch();
   // dispatch getTotal
   useEffect(() => {
      dispatch(getTotal())
   },[dispatch,quantity])
   return (
      <>
         <section className="profile__area pt-120 pb-50 grey-bg-2">
            <div className="container">
               <div className="profile__basic-inner pb-20 white-bg">
                  <div className="row align-items-center">
                     <div className="col-xxl-6 col-md-6">
                        <div className="profile__basic d-md-flex align-items-center">
                           <div className="profile__basic-thumb mr-30">
                              <img src="assets/img/profile/profile-img.jpg" alt="" />
                           </div>
                           <div className="profile__basic-content">
                              <h3 className="profile__basic-title">
                                 Welcome Back <span>{user?.displayName}</span>
                              </h3>
                              <p>{myOrders?.length} Running Courses
                                 <Link href="/my-courses">
                                    <a >View Course</a>
                                 </Link>
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="col-xxl-6 col-md-6">
                        <div className="profile__basic-cart d-flex align-items-center justify-content-md-end">
                           <div className="cart-info mr-10">
                              <Link href="/cart">
                                 <a >View cart</a>
                              </Link>
                           </div>
                           <div className="cart-item">
                              <Link href="/cart">
                                 <a >
                                    <i className="fa-regular fa-basket-shopping"></i>
                                    <span className="cart-quantity">{quantity}</span>
                                 </a>
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

export default ProfileArea;