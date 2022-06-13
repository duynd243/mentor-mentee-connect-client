import Link from 'next/link';
import SingleBrand from './SingleBrand';

const BrandArea = () => {
   return (
      <>
         <section className="brand__area pt-40 pb-70">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-4">
                     <div className="brand__wrapper">
                        <div className="section__title-wrapper-2">
                           <span className="section__title-pre-2">Testimonials</span>
                           <h3 className="section__title-2 section__title-2-30">Who will you learn with?</h3>
                        </div>
                        <p>You can list your partners or instructors brands here to show off your sites reputation</p>
                        <div className="brand__btn">
                           <Link href="/about">
                              <a className="tp-btn-5 tp-btn-6">View all partners</a>
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-8 col-xl-8 col-lg-8">
                     <div className="brand__item-wrapper pl-100">
                        <div className="row align-items-center">

                           <SingleBrand brand="1" />
                           <SingleBrand brand="2" />
                           <SingleBrand brand="3" />
                           <SingleBrand brand="4" />
                           <SingleBrand brand="5" />
                           <SingleBrand brand="6" />
                           <SingleBrand brand="7" />

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default BrandArea;