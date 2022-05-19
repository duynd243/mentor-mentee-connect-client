import CountUp from 'react-countup';

const SingleCounter = ({ icon, number, subtitle, border, counter_2 = false }) => {

   return (
      <>
         <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
            <div className={`counter__item d-flex align-items-start ${border ? border : `counter__item-border ${counter_2 && 'counter__item-border-2'}`}`}>
               <div className={`counter__icon ${counter_2 && 'counter__icon-2'} mr-15`}>
                  {icon}
               </div>
               <div className={`counter__content ${counter_2 && 'counter__content-2'}`}>
                  <h4>
                     <span className="counter">
                        <CountUp end={number} duration={5} />
                     </span>+
                  </h4>
                  <p>{subtitle}</p>
               </div>
            </div>
         </div>
      </>
   );
};

export default SingleCounter;