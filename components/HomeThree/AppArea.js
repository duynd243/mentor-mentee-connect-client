

const AppArea = () => {
   return (
      <>
         <section className="app__area app__bg">
            <div className="container">
               <div className="app__inner theme-bg-3 p-relative fix">
                  <div className="app__shape">
                     <img className="app__shape-1" src="assets/img/app/app-shape-1.png" alt="" />
                     <img className="app__shape-2" src="assets/img/app/app-shape-2.png" alt="" />
                  </div>
                  <div className="row align-items-center">
                     <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="app__wrapper p-relative z-index-1">
                           <h3 className="app__title"> Start learning By Downloading Apps</h3>
                        </div>
                     </div>
                     <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="app__download p-relative z-index-1 d-sm-flex align-items-center justify-content-lg-end">
                           <div className="app__item mr-15">
                              <a href="#">
                                 <span><img src="assets/img/app/google-play.png" alt="" /></span>
                                 Google play
                              </a>
                           </div>
                           <div className="app__item">
                              <a href="#" className="active">
                                 <span className="apple"><img src="assets/img/app/apple.png" alt="" /></span>
                                 Apple Store
                              </a>
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

export default AppArea;