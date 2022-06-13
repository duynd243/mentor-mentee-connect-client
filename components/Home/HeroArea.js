import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link'
import SwiperCore, { Navigation, EffectFade } from 'swiper';
SwiperCore.use([Navigation]);

const HeroArea = () => {
   const sliderData = [
      {
         id: 1,
         title: "Together We'll Explore New Things",
         img: 'assets/img/slider/slider-1.jpg',
      },
      {
         id: 2,
         title: <>Institution of <br /> Higher Education</>,
         img: 'assets/img/slider/slider-2.jpg',
      },
   ]
   return (
      <>
         <section className="slider__area">
            <div className="slider__active swiper-container">
               <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 5000 }}
                  effect={"fade"}
                  className="swiper-wrapper"
                  modules={[EffectFade]}
                  navigation={{ nextEl: '.slider-button-next', prevEl: '.slider-button-prev', }}
               >

                  {
                     sliderData.map(slider => {
                        return <SwiperSlide key={slider.id} className="slider__item swiper-slide p-relative slider__height d-flex align-items-center z-index-1">

                           <div className="slider__bg slider__overlay include-bg" style={{ background: `url(${slider.img})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} ></div>
                           <div className="container">
                              <div className="row">

                                 <div className="col-xxl-7 col-xl-8 col-lg-8 col-md-10 col-sm-10">
                                    <div className="slider__content p-relative z-index-1">
                                       <span >Educal University</span>
                                       <h2 className="slider__title">{slider.title}</h2>
                                       <p>We believe everyone should have the opportunity to create progress through technolog.</p>
                                       <div className="slider__btn">
                                          <Link href="/courses">
                                             <a className="tp-btn">Find Courses</a>
                                          </Link>
                                       </div>
                                    </div>
                                 </div>

                              </div>
                           </div>

                        </SwiperSlide>
                     })
                  }

               </Swiper>

               <div className="main-slider-paginations">
                  <button className="slider-button-next"><i className="fa-regular fa-arrow-right"></i></button>
                  <button className="slider-button-prev"><i className="fa-regular fa-arrow-left"></i></button>
               </div>
            </div>
         </section>
      </>
   );
};

export default HeroArea;