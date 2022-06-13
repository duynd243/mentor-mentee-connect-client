import React from 'react';
import Link from 'next/link';
import DynamicPageHeader from '../../components/common/DynamicPageHeader';
import Footer from '../../components/common/Footer';

const ErroPage = () => {
   return (
      <>
         <DynamicPageHeader />

         <section className="breadcrumb__area include-bg pt-150 pb-150 breadcrumb__overlay error_breadcrumb" >
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="breadcrumb__content text-center p-relative z-index-1">
                        <h3 className="breadcrumb__title">Error Page</h3>
                        <div className="breadcrumb__list">
                           <span>
                              <Link href="/">
                                 <a >Home</a>
                              </Link>
                           </span>
                           <span className="dvdr"><i className="fa-regular fa-angle-right"></i></span>
                           <span>Error Page</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="error__area pt-120 pb-120">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-xxl-8">
                     <div className="error__content text-center">
                        <div className="error__thumb m-img mb-45">
                           <img src={"/" + "assets/img/error/error.png"} alt="" />
                        </div>
                        <div className="error__content">
                           <h3 className="error__title">Page Not Found</h3>
                           <p>Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>

                           <div className="error__btn">
                              <Link href="/">
                                 <a className="tp-btn">Back to home</a>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <Footer />
      </>
   );
};

export default ErroPage;