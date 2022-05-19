import Link from 'next/link';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import EventSingle from './EventSingle';

const Events = () => {
   // allEventsItems
   const allEventsItems = useSelector(state => state.events.allEvents);
   // status
   const status = useSelector(state => state.events.status)
     // loader
  useEffect(() => {
   if (status === 'pending') {
     return <div id="loading">
       <div id="loading-center">
         <div id="loading-center-absolute">
           <svg id="loader">
             <path id="corners" d="m 0 12.5 l 0 -12.5 l 50 0 l 0 50 l -50 0 l 0 -37.5" />
           </svg>
           <img src="assets/img/favicon.png" alt="" />
         </div>
       </div>
     </div>
   }
 },[status]);
   return (
      <>
         <section className="event__area pt-115">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper-2 text-center mb-60">
                        <span className="section__title-pre-2">Featured Courses</span>
                        <h3 className="section__title-2">Join our upcoming event</h3>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-12">
                     {
                        allEventsItems.map(event => <EventSingle key={event?._id} event={event} />)
                     }
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Events;