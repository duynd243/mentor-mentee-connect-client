import Link from 'next/link';

const Features = () => {
   const featuresData = [
      {
         id: 1,
         icon_img: <svg width="42" height="44" viewBox="0 0 42 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6013 2.11585L3.95694 10.3704C-0.0968136 13.0169 -0.0968136 18.94 3.95694 21.5865L16.6013 29.841C18.8697 31.3323 22.6084 31.3323 24.8769 29.841L37.4582 21.5865C41.491 18.94 41.491 13.0379 37.4582 10.3914L24.8769 2.13685C22.6084 0.624568 18.8697 0.624569 16.6013 2.11585Z" stroke="#031220" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.3176 24.275L7.2966 34.1259C7.2966 36.7934 9.35499 39.6499 11.8755 40.4901L18.5757 42.7165C19.7309 43.0945 21.6423 43.0945 22.8185 42.7165L29.5188 40.4901C32.0392 39.6499 34.0976 36.7934 34.0976 34.1259V24.38" stroke="#3D6CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M40.4408 28.3077V15.7054" stroke="#3D6CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
         </svg>,
         title: 'Graduation',
      },
      {
         id: 2,
         icon_img: <svg width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.7168 31.4941V18.0775" stroke="#3D6CE7" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.3835 31.4941V18.0775" stroke="#3D6CE7" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22.0501 31.4941V18.0775" stroke="#3D6CE7" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M29.7168 31.4941V18.0775" stroke="#3D6CE7" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M37.3835 31.4941V18.0775" stroke="#3D6CE7" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M41.2168 39.1608H2.88347V33.4108C2.88347 32.3566 3.74597 31.4941 4.80014 31.4941H39.3001C40.3543 31.4941 41.2168 32.3566 41.2168 33.4108V39.1608Z" stroke="#031220" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22.7593 1.115L40.0093 8.01495C40.6801 8.28329 41.2168 9.08827 41.2168 9.79744V16.1608C41.2168 17.215 40.3543 18.0775 39.3001 18.0775H4.80014C3.74597 18.0775 2.88347 17.215 2.88347 16.1608V9.79744C2.88347 9.08827 3.42014 8.28329 4.09098 8.01495L21.341 1.115C21.7243 0.961667 22.376 0.961667 22.7593 1.115Z" stroke="#031220" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M0.966797 39.1608H43.1335" stroke="#031220" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22.0501 13.2858C23.6379 13.2858 24.9251 11.9986 24.9251 10.4108C24.9251 8.82295 23.6379 7.53577 22.0501 7.53577C20.4623 7.53577 19.1751 8.82295 19.1751 10.4108C19.1751 11.9986 20.4623 13.2858 22.0501 13.2858Z" stroke="#031220" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
         </svg>,
         title: 'University Life',
      },
      {
         id: 3,
         icon_img: <svg width="41" height="38" viewBox="0 0 41 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.3333 27.9821V4.84788C39.3333 2.54788 37.455 0.84205 35.1742 1.03372H35.0592C31.0342 1.37872 24.92 3.42955 21.5083 5.57622L21.1825 5.78705C20.6267 6.13205 19.7067 6.13205 19.1508 5.78705L18.6717 5.49955C15.26 3.37205 9.165 1.34038 5.14 1.01455C2.85917 0.822883 1 2.54788 1 4.82872V27.9821C1 29.8221 2.495 31.547 4.335 31.777L4.89083 31.8537C9.05 32.4096 15.4708 34.5179 19.1508 36.5304L19.2275 36.5687C19.745 36.8562 20.5692 36.8562 21.0675 36.5687C24.7475 34.537 31.1875 32.4096 35.3658 31.8537L35.9983 31.777C37.8383 31.547 39.3333 29.8221 39.3333 27.9821Z" stroke="#031220" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.1666 6.41956V35.1696" stroke="#3D6CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.0209 12.1696H7.70837" stroke="#3D6CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.4584 17.9196H7.70837" stroke="#3D6CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
         </svg>,
         title: 'Education Services',
      },
   ]
   return (
      <>
         <section className="features__area pb-160">
            <div className="container">
               <div className="features__inner p-relative z-index-1 white-bg">
                  <div className="row">
                     {
                        featuresData.map(feature => {
                           return <div key={feature.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                              <div className="features__item features__border-right d-sm-flex align-items-start white-bg mb-30">
                                 <div className="features__icon mr-25">
                                    {feature.icon_img}
                                 </div>
                                 <div className="features__content">
                                    <h3 className="features__title">
                                       <Link href="/about">
                                          <a>{feature.title}</a>
                                       </Link>
                                    </h3>
                                    <p>Euucal University was established it is recognized.</p>

                                    <Link href="/about">
                                       <a className="link-btn">Learn More <i className="fa-regular fa-arrow-right">
                                       </i></a>
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        })
                     }

                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Features;