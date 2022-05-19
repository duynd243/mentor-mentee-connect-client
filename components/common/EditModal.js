import { Modal } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const EditModal = ({ show, handleClose }) => {
   // user
   const {user} = useAuth()
   return (
      <>
         <Modal show={show} onHide={handleClose} animation={false} centered>

            <Modal.Body>
               <div className="profile__edit-close">
                  <button onClick={handleClose} type="button" className="profile__edit-close-btn" >
                  <i className="fa-light fa-xmark"></i></button>
               </div>

               <form >
                  <div className="profile__edit-input">
                     <p>Name</p>
                     <input defaultValue={user?.displayName} type="text" placeholder="Your Name" />
                  </div>
                  <div className="profile__edit-input">
                     <p>Email</p>
                     <input defaultValue={user?.email} type="text" placeholder="Your Email" />
                  </div>
                  <div className="profile__edit-input">
                     <p>Phone</p>
                     <input required type="text" placeholder="Your Phone" />
                  </div>
                  <div className="profile__edit-input">
                     <p>Address</p>
                     <input required type="text" placeholder="Your Address" />
                  </div>
                  <div className="profile__edit-input">
                     <button type="submit" className="tp-btn w-100">Update</button>
                  </div>
               </form>
            </Modal.Body>

         </Modal>
      </>
   );
};

export default EditModal;