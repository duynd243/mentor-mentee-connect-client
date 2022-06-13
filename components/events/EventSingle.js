import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';

const EventSingle = ({ event }) => {
   // dispatch
   const dispatch = useDispatch();
   const { time, date, title, tutor_img, tutor_name, _id } = event;
   // dispatch(singleEvent(_id))
   return (
      <>
         <div className="event__item white-bg mb-10 transition-3 p-relative d-lg-flex align-items-center justify-content-between">
            <div className="event__left d-sm-flex align-items-center">
               <div className="event__date">
                  <h4>{date.substring(0, 2)}</h4>
                  <p>{date.substring(3, date.length)}</p>
               </div>
               <div className="event__content">
                  <div className="event__meta">
                     <ul>
                        <li>
                           <a href="#"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.49992 9.51253C9.72047 9.51253 10.7099 8.52308 10.7099 7.30253C10.7099 6.08198 9.72047 5.09253 8.49992 5.09253C7.27937 5.09253 6.28992 6.08198 6.28992 7.30253C6.28992 8.52308 7.27937 9.51253 8.49992 9.51253Z" stroke="#5F6160" strokeWidth="1.5" />
                              <path d="M2.56416 6.01334C3.95958 -0.120822 13.0475 -0.113738 14.4358 6.02043C15.2504 9.61876 13.0121 12.6646 11.05 14.5488C9.62625 15.9229 7.37375 15.9229 5.94291 14.5488C3.98791 12.6646 1.74958 9.61168 2.56416 6.01334Z" stroke="#5F6160" strokeWidth="1.5" />
                           </svg>
                              New York, US</a>
                        </li>
                     </ul>
                  </div>
                  <h3 className="event__title">
                     <Link href={`/event-details/${_id}`}>
                        <a>{title}</a>
                     </Link>
                  </h3>
                  <div className="event__person">
                     <ul>
                        <li>
                           <Link href={`/event-details/${_id}`}>
                              <a> <img src={tutor_img} alt="" /> <span>{tutor_name}</span> </a>
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="event__right d-sm-flex align-items-center">
               <div className="event__time">
                  <span>
                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.75 7.50024C13.75 10.9502 10.95 13.7502 7.5 13.7502C4.05 13.7502 1.25 10.9502 1.25 7.50024C1.25 4.05024 4.05 1.25024 7.5 1.25024C10.95 1.25024 13.75 4.05024 13.75 7.50024Z" stroke="#258E46" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.8188 9.48735L7.8813 8.3311C7.5438 8.1311 7.2688 7.64985 7.2688 7.2561V4.6936" stroke="#258E46" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                     {time}
                  </span>
               </div>
               <div className="event__more ml-30">
                  <Link href={`/event-details/${_id}`}>
                     <a className="tp-btn-5 tp-btn-7">View Events </a>
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
};

export default EventSingle;