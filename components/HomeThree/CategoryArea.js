import Link from 'next/link';

const CategoryArea = () => {
   // categoryData
   const categoryData = [
      {
         id: 1,
         title: 'Development',
         sub_1: 'Python',
         sub_2: 'Web Development',
         sub_3: 'Machine Learning',
         sub_4: 'App Development',
      },
      {
         id: 2,
         title: 'IT and Softwere',
         sub_1: 'Cyber Security ',
         sub_2: 'Visual Studio Code',
         sub_3: 'AWS Certification',
         sub_4: 'Ethical Hacking',
      },
      {
         id: 3,
         title: 'Design',
         sub_1: 'Advertising ',
         sub_2: 'UX Design',
         sub_3: 'History of Art',
         sub_4: 'Color & Form',
      },
      {
         id: 4,
         title: 'Business',
         sub_1: 'Accounting ',
         sub_2: 'Financial Analysis',
         sub_3: 'SQL',
         sub_4: 'Business statistics',
      },
   ]
   return (
      <>
         <section className="category__area pb-90 pt-115">
            <div className="container">
               <div className="row align-items-end">
                  <div className="col-xxl-5 col-xl-5">
                     <div className="section__title-wrapper mb-60">
                        <span className="section__title-pre-3">Top Categories</span>
                        <h2 className="section__title-2">All featured <br /> Topices by Categories</h2>
                     </div>
                  </div>
                  <div className="col-xxl-7 col-xl-7">
                     <div className="category__wrapper-3 mb-60 d-sm-flex align-items-end justify-content-between">
                        <p>Elementum facilisis leo vel est ullamcorper get facilisi.Sagittis orci a purus semper eget.</p>
                        <div className="category__more mb-10">
                           <Link href="/courses">
                              <a className="tp-btn-5 tp-btn-8">All Categories</a>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">

                  {
                     categoryData.map(category => {
                        return <div key={category.id} className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                           <div className="category__item-3 fix transition-3 white-bg mb-30">
                              <h3 className="category__title-3">{category.title}</h3>
                              <div className="category__list">
                                 <ul>
                                    <li>
                                       <Link href="/courses">
                                          <a >{category.sub_1} <i className="fa-regular fa-arrow-right"></i></a>
                                       </Link>
                                    </li>
                                    <li>
                                       <Link href="/courses">
                                          <a >{category.sub_2} <i className="fa-regular fa-arrow-right"></i></a>
                                       </Link>
                                    </li>
                                    <li>
                                       <Link href="/courses">
                                          <a >{category.sub_3} <i className="fa-regular fa-arrow-right"></i></a>
                                       </Link>
                                    </li>
                                    <li>
                                       <Link href="/courses">
                                          <a >{category.sub_4} <i className="fa-regular fa-arrow-right"></i></a>
                                       </Link>
                                    </li>
                                 </ul>
                              </div>
                              <div className="category__btn-3">
                                 <Link href="/courses">
                                    <a className="tp-btn-9 w-100">Explore</a>
                                 </Link>
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

export default CategoryArea;