import { useState } from 'react';
import { useDispatch } from 'react-redux';
import SwiperCore, { Navigation, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';
import { searchText } from '../../redux/features/coursesSlice';
SwiperCore.use([Navigation]);

const HomeThreeHeroArea = () => {
   // searchValue
   const [searchValue, setSearchValue] = useState('');
   // dispatch
   const dispatch = useDispatch();
   // router
   const router = useRouter();
   // handleSubmit
   const handleSubmit = e => {
      e.preventDefault();
      if (!searchValue) {

      }
      else {
         dispatch(searchText(searchValue))
         router.push('/search-courses')
      }
   }
   // sliderData
   const sliderData = [
      {
         id: 1,
         title: <>Launch Your <br /> Own online learning Platform</>,
         img: 'assets/img/slider/3/slider-1.jpg',
      },
      {
         id: 2,
         title: <>Launch Your <br /> Own online learning Platform</>,
         img: 'assets/img/slider/3/slider-2.jpg',
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
                        return <SwiperSlide key={slider.id} className="slider__item swiper-slide p-relative slider__height slider__height-3 d-flex align-items-center z-index-1">

                           <div className="slider__bg slider__overlay slider__overlay-3 include-bg" style={{ background: `url(${slider.img})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
                           <div className="container">
                              <div className="row">
                                 <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-10 col-sm-10">
                                    <div className="slider__content-3 p-relative z-index-1">
                                       <span>
                                          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.745 0.4425C9.435 -0.1475 10.565 -0.1475 11.265 0.4425L12.845 1.8025C13.145 2.0625 13.705 2.2725 14.105 2.2725H15.805C16.865 2.2725 17.735 3.1425 17.735 4.2025V5.9025C17.735 6.2925 17.945 6.8625 18.205 7.1625L19.565 8.7425C20.155 9.4325 20.155 10.5625 19.565 11.2625L18.205 12.8425C17.945 13.1425 17.735 13.7025 17.735 14.1025V15.8025C17.735 16.8625 16.865 17.7325 15.805 17.7325H14.105C13.715 17.7325 13.145 17.9425 12.845 18.2025L11.265 19.5625C10.575 20.1525 9.445 20.1525 8.745 19.5625L7.165 18.2025C6.865 17.9425 6.305 17.7325 5.905 17.7325H4.175C3.115 17.7325 2.245 16.8625 2.245 15.8025V14.0925C2.245 13.7025 2.035 13.1425 1.785 12.8425L0.435 11.2525C-0.145 10.5625 -0.145 9.4425 0.435 8.7525L1.785 7.1625C2.035 6.8625 2.245 6.3025 2.245 5.9125V4.1925C2.245 3.1325 3.115 2.2625 4.175 2.2625H5.905C6.295 2.2625 6.865 2.0525 7.165 1.7925L8.745 0.4425Z" fill="#FF8D00" />
                                             <path d="M6.375 9.99251L8.785 12.4125L13.615 7.57251" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                          </svg>
                                          GET 30% off on fast enroll</span>
                                       <h2 className="slider__title-3" >{slider.title}</h2>

                                       <div className="slider__search mb-20">
                                          <form onSubmit={handleSubmit}>
                                             <div className="slider__search-input p-relative">
                                                <input onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Course title here..." />
                                                <button type="submit">Search</button>
                                                <div className="slider__search-input-icon">
                                                   <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z" stroke="#828282" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                      <path d="M16.5 16.5L15 15" stroke="#828282" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                   </svg>
                                                </div>
                                             </div>
                                          </form>
                                       </div>
                                       <div className="slider__list">
                                          <ul>
                                             <li><i className="fa-solid fa-check">
                                             </i> Access more then 120k online courses.</li>
                                             <li><i className="fa-solid fa-check">
                                             </i> Skilled and experienced coaches.</li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>


                        </SwiperSlide>
                     })
                  }

               </Swiper>
               <div className="main-slider-paginations main-slider-paginations-2">
                  <button className="slider-button-next"><i className="fa-regular fa-arrow-right"></i></button>
                  <button className="slider-button-prev"><i className="fa-regular fa-arrow-left"></i></button>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeThreeHeroArea;