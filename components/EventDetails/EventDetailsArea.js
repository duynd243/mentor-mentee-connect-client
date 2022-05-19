import EventDetailsRightSide from './EventDetailsRightSide';

const EventDetailsArea = () => {
   return (
      <>
         <section className="event__area pb-110">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 col-xl-8 col-lg-8">
                     <div className="event_wrapper">
                        <div className="event__thumb mb-35 w-img">
                           <img src="assets/img/events/event-1.jpg" alt="" />
                        </div>
                        <div className="event__details mb-35">
                           <h3>Description</h3>
                           <p>He legged it up the kyver have it mush super me old mucker cheeky naff that are you taking the piss, blow off down the pub bite your arm off the wireless boot cor blimey guvnor happy days bender what a load of rubbish, say pardon me horse play spiffing Why car boot gosh bubble and squeak. Cheers Richard bugger show off show off pick your nose and blow off get stuffed mate chancer in my flat loo, bevvy amongst hunky-dory bender bubble and squeak me old mucker vagabond, barmy spend a penny chimney pot young delinquent bum bag the bees knees chap, gosh nice one knees up the wireless Charles such a fibber. Mush barmy bleeding Jeffrey pardon me barney grub loo cup of tea bubble and squeak bugger all mate say, I bloke matie boy tickety-boo give us a bell up the duff bugger lurgy wind up I dont want no agro.</p>
                        </div>
                        <div className="event__allow mb-40">
                           <h3>This event will allow participants to:</h3>
                           <ul>
                              <li><i className="fal fa-check"></i> Business managers, leaders</li>
                              <li><i className="fal fa-check"></i> Downloadable lectures, code and design assets for all projects</li>
                              <li><i className="fal fa-check"></i> Anyone who is finding a chance to get the promotion</li>
                           </ul>
                        </div>
                        <div className="event__tag">
                           <span><i className="fal fa-tag"></i></span>
                           <a href="#">Big data,  </a>
                           <a href="#">Data analysis,</a>
                           <a href="#">Data modeling</a>
                        </div>
                     </div>
                  </div>
                  <EventDetailsRightSide />
               </div>
            </div>
         </section>
      </>
   );
};

export default EventDetailsArea;