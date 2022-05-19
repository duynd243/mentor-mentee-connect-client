import Link from 'next/link';

const HeroArea = () => {
   return (
      <>
         <section className="slider__area slider__height-2 include-bg d-flex align-items-center"
            style={{ background: `url(assets/img/slider/2/slider-2-bg.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-xxl-6 col-lg-6">
                     <div className="slider__content-2 mt-30">
                        <span>The Leader in Online Learning</span>
                        <h3 className="slider__title-2">Build an Incredible Learning Experience</h3>
                        <p>The right mentoring relationship can be a powerful tool for Professional growth. Bark up the right tree.</p>
                        <Link href="/courses">
                           <a className="tp-btn-green">Explore Coureses</a>
                        </Link>
                     </div>
                  </div>
                  <div className="col-xxl-6 col-lg-6">
                     <div className="slider__thumb-2 p-relative">
                        <div className="slider__shape">
                           <img className="slider__shape-1" src="assets/img/slider/2/shape/slider-cap-1.png" alt="" />
                           <img className="slider__shape-2" src="assets/img/slider/2/shape/slider-cap-2.png" alt="" />
                           <img className="slider__shape-3" src="assets/img/slider/2/shape/slider-cap-3.png" alt="" />
                           <img className="slider__shape-4" src="assets/img/slider/2/shape/slider-shape-1.jpg" alt="" />
                           <img className="slider__shape-5" src="assets/img/slider/2/shape/slider-shape-2.jpg" alt="" />
                        </div>
                        <span className="slider__thumb-mask">
                           <img src="assets/img/slider/2/slider-thumb.png" alt="" />
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HeroArea;