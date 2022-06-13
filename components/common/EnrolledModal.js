import { Modal } from 'react-bootstrap';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import useAuth from '../../hooks/useAuth';

// stripePromise
const stripePromise = loadStripe('pk_test_51KYNhaLbyBVvY2i8wtD0oB9BfL7xqe7DpVtTQb6PzoOWwMUCqQoAOEAPALZuaIbLONev4n0uOVAYYCUIfRiRV3qw00x3Ko33kS');

const EnrolledModal = ({ show, handleClose, singleCourse }) => {
   const { user } = useAuth()
   return (
      <>
        
         <Modal show={show} onHide={handleClose} animation={false} centered>
            <div className='test-mode'>
                  <a href='https://stripe.com/docs/testing#cards' rel="noreferrer" target="_blank">Test Mode</a>
            </div>

            <div className="course__popup-close">
               <button type="button" className="course__popup-close-btn" onClick={handleClose}>
                  <i className="fa-light fa-xmark"></i>
               </button>
            </div>

            <Modal.Body>
               <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content border-0">
                     <div className="p-relative">
                        <div className="course__popup-top d-flex align-items-start mb-40">
                           <div className="course__popup-thumb mr-20">
                              <img src={singleCourse?.img_bg} alt="" style={{ objectFit: 'cover' }} />
                           </div>
                           <div className="course__popup-content">
                              <h3 className="course__popup-title">
                                 <a href="#">{singleCourse?.title}</a>
                              </h3>
                              <div className="course__sm-rating">
                                 <ul>
                                    <li><a href="#"> <i className="fa-solid fa-star"></i> </a></li>
                                    <li><a href="#"> <i className="fa-solid fa-star"></i> </a></li>
                                    <li><a href="#"> <i className="fa-solid fa-star"></i> </a></li>
                                    <li><a href="#"> <i className="fa-solid fa-star"></i> </a></li>
                                    <li><a href="#"> <i className="fa-solid fa-star"></i> </a></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="course__popup-info">

                           <div className="row gx-3">
                              <div className="col-xl-12">
                                 <div className="course__popup-input mb-3">
                                    <input defaultValue={user?.email} type="email" placeholder="Email" />
                                    <span className="course__popup-input-icon">
                                       <i className="fa-light fa-envelope"></i>
                                    </span>
                                 </div>
                              </div>

                              {singleCourse.price && <Elements stripe={stripePromise}>
                                 <CheckoutForm singleCourse={singleCourse} />
                              </Elements>}


                           </div>

                        </div>
                     </div>
                  </div>
               </div>
            </Modal.Body>

         </Modal>
      </>
   );
};

export default EnrolledModal;