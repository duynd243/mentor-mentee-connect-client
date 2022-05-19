import Link from 'next/link';

const Faq = () => {
   return (
      <>
         <section className="faq__area pt-20 pb-130">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-5 col-xl-5 col-lg-5">
                     <div className="faq__wrapper pt-45 pr-25">
                        <div className="section__title-wrapper mb-5">
                           <span className="section__title-pre-3">Learn how to get started</span>
                           <h2 className="section__title section__title-44">Frequently Asked Questions</h2>
                        </div>
                        <p>Join our club member community now to get free updates and also a lot of freebies are waiting for you or <Link href="/contact">
                           <a >Contact Us</a>
                        </Link></p>

                        <div className="faq__btn">
                           <Link href="/about">
                              <a className="tp-btn-5 tp-btn-13">Read our full FAQ</a>
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-7 col-xl-7 col-lg-7">
                     <div className="faq__item-wrapper pl-100">
                        <div className="faq__accordion">
                           <div className="accordion" id="faqaccordion">
                              <div className="accordion-item">
                                 <h2 className="accordion-header" id="faqOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                       Who will view my content?
                                    </button>
                                 </h2>
                                 <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="faqOne" data-bs-parent="#faqaccordion">
                                    <div className="accordion-body">
                                       <p>Our authors are incredible storytellers driven by their passion for technology. They blend their knowledge and enthusiasm to communicate concepts and demonstrate</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="accordion-item">
                                 <h2 className="accordion-header" id="faqTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                       How long it take to create a video course?
                                    </button>
                                 </h2>
                                 <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="faqTwo" data-bs-parent="#faqaccordion">
                                    <div className="accordion-body">
                                       <p>Our authors are incredible storytellers driven by their passion for technology. They blend their knowledge and enthusiasm to communicate concepts and demonstrate</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="accordion-item">
                                 <h2 className="accordion-header" id="faqThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                       What kind of support does Courselog provide?
                                    </button>
                                 </h2>
                                 <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="faqThree" data-bs-parent="#faqaccordion">
                                    <div className="accordion-body">
                                       <p>Our authors are incredible storytellers driven by their passion for technology. They blend their knowledge and enthusiasm to communicate concepts and demonstrate</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="accordion-item">
                                 <h2 className="accordion-header" id="faqFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                       How to Change my Password easily?
                                    </button>
                                 </h2>
                                 <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="faqFour" data-bs-parent="#faqaccordion">
                                    <div className="accordion-body">
                                       <p>Our authors are incredible storytellers driven by their passion for technology. They blend their knowledge and enthusiasm to communicate concepts and demonstrate</p>
                                    </div>
                                 </div>
                              </div>
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

export default Faq;