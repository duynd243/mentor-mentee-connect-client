import Link from 'next/link';

const SingleCategory = ({ icon, title }) => {
   return (
      <>
         <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
            <div className="category__item text-center mb-45">
               <div className="category__icon">
                  <Link href="/courses">
                     <a>
                        {icon}
                     </a>
                  </Link>
               </div>
               <div className="category__content">
                  <h4 className="category__title">
                     <Link href="/courses">
                        <a >{title}</a>
                     </Link>
                  </h4>
               </div>
            </div>
         </div>
      </>
   );
};

export default SingleCategory;