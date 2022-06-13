import Link from 'next/link';
import { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import ReactPlayer from "react-player";

const Certificate = () => {
   // opne modal state
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
               url="https://www.youtube.com/watch?v=OTuph9pJWU4"
               width="100%"
               height="calc(100vh - 100px)"
            />
         </Modal>

         <section className="certificate__area pb-120 pt-120">
            <div className="container">
               <div className="certificate__inner grey-bg-9 p-relative">
                  <div className="certificate__thumb">
                     <img src="assets/img/certificate/certificate.png" alt="" />
                  </div>
                  <div className="row">
                     <div className="col-xxl-7">
                        <div className="certificate__content">
                           <div className="section__title-wrapper mb-10">
                              <span className="section__title-pre-3">Online Certification</span>
                              <h2 className="section__title section__title-44">You can be your own <br /> Guiding star with our help!</h2>
                           </div>
                           <p>They blend their knowledge and enthusiasm to communicate.</p>
                           <div className="certificate__links d-sm-flex align-items-center">
                              <button onClick={onOpenModal} className="play-video popup-image">
                              <i className="fa-solid fa-play"></i> Play video</button>

                              <ul>
                                 <li>
                                    <Link href="/about">
                                       <a >Ridiculus</a>
                                    </Link>
                                 </li>
                                 <li>
                                    <Link href="/about">
                                       <a>Retrun</a>
                                    </Link>
                                 </li>
                              </ul>
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

export default Certificate;