import React, { useState } from 'react';
import Link from 'next/link';
import { Modal } from 'react-responsive-modal';
import ReactPlayer from "react-player";

const Campus = () => {
   const [open, setOpen] = useState(false);
   const onOpenModal = () => setOpen(true);
   const onCloseModal = () => setOpen(false);


   return (
      <>
      <Modal
            open={open}
            onClose={onCloseModal}
            styles={{
               modal: {
                  maxWidth: "unset",
                  width: "70%",
                  padding: "unset"
               },
               overlay: {
                  background: "rgba(0, 0, 0, 0.5)"
               },
               closeButton: {
                  background: "yellow"
               }
            }}
            center
         >
            <ReactPlayer
               url="https://www.youtube.com/watch?v=AjgD3CvWzS0"
               width="100%"
               height="calc(100vh - 100px)"
            />
         </Modal>

         <section className="campus__area pt-120 pb-120">
            <div className="container">
               <div className="row grid">
                  <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                     <div className="campus__wrapper">
                        <div className="section__title-wrapper mb-25">
                           <span className="section__title-pre">Campus life</span>
                           <h2 className="section__title section__title-40">University Campus</h2>
                           <p>Our research has an impact globally join us in tackling the big issues.</p>
                        </div>
                        <div className="campus__btn mb-80">
                           <Link href="/about">
                              <a  className="tp-btn tp-btn-border">More Research</a>
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="campus__thumb w-img mb-30">
                        <img src="assets/img/campus/campus-1.jpg" alt="" />
                        <button onClick={onOpenModal} className="play-btn popup-video pulse-btn">
                           <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48113 15.5 9.86603L2 17.6603C1.33333 18.0452 0.5 17.564 0.5 16.7942V1.20577C0.5 0.43597 1.33333 -0.0451542 2 0.339746L15.5 8.13397Z" fill="#3D6CE7" />
                           </svg>
                        </button>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                     <div className="campus__thumb w-img mb-25">
                        <img src="assets/img/campus/campus-2.jpg" alt="" />
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                     <div className="campus__thumb w-img mb-30">
                        <img src="assets/img/campus/campus-3.jpg" alt="" />
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                     <div className="campus__thumb w-img mb-30">
                        <img src="assets/img/campus/campus-4.jpg" alt="" />
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                     <div className="campus__thumb w-img mb-30">
                        <img src="assets/img/campus/campus-5.jpg" alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Campus;