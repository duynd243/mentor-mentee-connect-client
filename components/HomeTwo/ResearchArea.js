import Link from 'next/link';

const ResearchArea = () => {
   const researchData = [
      {
         id: 1,
         icon: <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26 13.9961V15.1656C26 19.8436 24.8875 21 20.45 21H6.55C2.1125 21 1 19.8305 1 15.1656V6.83443C1 2.16951 2.1125 1 6.55 1H8.5" stroke="#6151FB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.5 21.5V25.5" stroke="#6151FB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1 14.75H26" stroke="#6151FB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.875 26H19.125" stroke="#6151FB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.825 10.2127H14.875C13.15 10.2127 12.575 9.0627 12.575 7.9127V3.5127C12.575 2.1377 13.7 1.0127 15.075 1.0127H20.825C22.1 1.0127 23.125 2.0377 23.125 3.31269V7.9127C23.125 9.1877 22.1 10.2127 20.825 10.2127Z" stroke="#6151FB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M24.6375 8.39985L23.125 7.33735V3.88735L24.6375 2.82485C25.3875 2.31235 26 2.62485 26 3.53735V7.69985C26 8.61235 25.3875 8.92485 24.6375 8.39985Z" stroke="#6151FB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
         </svg>,
         title: <h4>Educal Online <br /> Training from Experts </h4>,
         bg_class: ''
      },
      {
         id: 2,
         icon: <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4 19.746H6.47299C2.092 19.746 1 18.654 1 14.273V6.47299C1 2.092 2.092 1 6.47299 1H20.162C24.543 1 25.635 2.092 25.635 6.47299" stroke="#F4930E" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.3999 25.6218V19.7458" stroke="#F4930E" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1 14.5459H11.4" stroke="#F4930E" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.16211 25.6218H11.4001" stroke="#F4930E" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M26.9999 14.3509V21.7739C26.9999 24.8549 26.2329 25.6219 23.152 25.6219H18.537C15.456 25.6219 14.689 24.8549 14.689 21.7739V14.3509C14.689 11.2699 15.456 10.5029 18.537 10.5029H23.152C26.2329 10.5029 26.9999 11.2699 26.9999 14.3509Z" stroke="#F4930E" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.8179 21.4359H20.8296" stroke="#F4930E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
         </svg>,
         title: <h4>Over 2.4k <br /> Video Course (all coures)</h4>,
         bg_class: 'yellow-bg',
      },
      {
         id: 3,
         icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.6185 23.8234H7.24516C3.5585 23.8234 2.3335 21.3734 2.3335 18.9118V9.08842C2.3335 5.40176 3.5585 4.17676 7.24516 4.17676H14.6185C18.3052 4.17676 19.5302 5.40176 19.5302 9.08842V18.9118C19.5302 22.5984 18.2935 23.8234 14.6185 23.8234Z" stroke="#20AD96" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22.7736 19.9502L19.5303 17.6752V10.3135L22.7736 8.03849C24.3603 6.93015 25.6669 7.60682 25.6669 9.55515V18.4452C25.6669 20.3935 24.3603 21.0702 22.7736 19.9502Z" stroke="#20AD96" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.4165 12.8345C14.383 12.8345 15.1665 12.051 15.1665 11.0845C15.1665 10.118 14.383 9.33447 13.4165 9.33447C12.45 9.33447 11.6665 10.118 11.6665 11.0845C11.6665 12.051 12.45 12.8345 13.4165 12.8345Z" stroke="#20AD96" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
         </svg>,
         title: <h4>Occasional <br />Video updates (2022)</h4>,
         bg_class: 'green-bg',
      },
   ]
   return (
      <>
         <section className="research__area pt-115 pb-60">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                     <div className="research__wrapper-2">
                        <div className="section__title-wrapper-2">
                           <span className="section__title-pre-2">Discover Research</span>
                           <h3 className="section__title-2">More then just learning</h3>
                        </div>
                        <p>Learn from anywhere in the world on desktop, or mobile phone with an Internet connection.</p>
                        <div className="research__btn-2 mb-70">
                           <Link href="/contact">
                              <a className="tp-btn-5 tp-btn-6">Get started now</a>
                           </Link>
                        </div>

                        <div className="research__download">
                           <div className="research__download-bg include-bg" data-background="assets/img/research/2/research-bg.jpg"></div>
                           <div className="research__content-2 p-relative z-index-1">
                              <h3 className="research__title-2">Start Learning by Downloading Apps</h3>
                              <div className="research__store">
                                 <ul>
                                    <li>
                                       <a href="#"><img src="assets/img/icon/google-play-store.png" alt="google-play-store" /> Google play</a>
                                    </li>
                                    <li>
                                       <a href="#"><img src="assets/img/icon/apple-store.png" alt="apple-store" />Apple store</a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div className="research__thumb-2">
                              <img src="assets/img/research/2/research-1.png" alt="" />
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-1 col-lg-6">
                     <div className="research__features-wrapper pt-35">

                        {
                           researchData.map(research => {
                              return <div key={research.id} className="research__features-item d-sm-flex align-items-start mb-40">
                                 <div className="research__features-icon mr-25">
                                    <span className={research.bg_class}>
                                       {research.icon}
                                    </span>
                                 </div>
                                 <div className="research__features-content">
                                    {research.title}
                                    <p>Learn from anywhere in the world on desktop mobile Phone with an Internet connection.</p>
                                 </div>
                              </div>
                           })
                        }


                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ResearchArea;