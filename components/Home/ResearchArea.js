
const ResearchArea = () => {
   // researchData
   const researchData = [
      {
         id: 1,
         img: 'assets/img/research/research-1.jpg',
         title: 'Frontier Research',
         border:'research__item-border'
      },
      {
         id: 2,
         img: 'assets/img/research/research-2.jpg',
         title: 'Global Research',
         border:'research__item-border'
      },
      {
         id: 3,
         img: 'assets/img/research/research-3.jpg',
         title: 'Public Engagement',
      },
   ]
   return (
      <>
         <section className="research__area research__border grey-bg-3 pt-115 pb-90 p-relative z-index-1">
            <div className="research__shape">
               <img className="research__shape-1 d-none d-sm-block" src="assets/img/research/research-shape-1.png" alt="" />
               <img className="research__shape-2 d-none d-sm-block" src="assets/img/research/research-shape-2.png" alt="" />
               <img className="research__shape-3" src="assets/img/research/research-shape-3.png" alt="" />
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper mb-50 text-center">
                        <span className="section__title-pre">Discover Research</span>
                        <h2 className="section__title section__title-44">Life Changing Research</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                  {
                     researchData.map(research => {
                        return <div key={research.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                           <div className={`research__item ${research.border ? research.border : ''} text-center mb-30 transition-3`}>
                              <div className="research__thumb mb-35">
                                 <img src={research.img} alt="" />
                              </div>
                              <div className="research__content">
                                 <h3 className="research__title">{research.title}</h3>
                                 <p>Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa lorem aliqua.</p>
                              </div>
                           </div>
                        </div>
                     })
                  }

               </div>
            </div>
         </section>
      </>
   );
};

export default ResearchArea;