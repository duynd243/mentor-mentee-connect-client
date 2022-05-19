
const FormArea = () => {
   return (
      <>
         <div className="postbox__comment">
            <h3>Write a comment</h3>
            <form action="#">
               <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                     <div className="postbox__comment-input">
                        <input type="text" placeholder="Your Name" />
                     </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                     <div className="postbox__comment-input">
                        <input type="email" placeholder="Your Email" />
                     </div>
                  </div>
                  <div className="col-xxl-12">
                     <div className="postbox__comment-input">
                        <input type="text" placeholder="Website" />
                     </div>
                  </div>
                  <div className="col-xxl-12">
                     <div className="postbox__comment-input">
                        <textarea placeholder="Enter your comment ..."></textarea>
                     </div>
                  </div>
                  <div className="col-xxl-12">
                     <div className="postbox__comment-agree d-flex align-items-start mb-20">
                        <input className="e-check-input" type="checkbox" id="e-agree" />
                        <label className="e-check-label" htmlFor="e-agree">Save my name, email, and website in this browser for the next time I comment.</label>
                     </div>
                  </div>
                  <div className="col-xxl-12">
                     <div className="postbox__comment-btn">
                        <button type="submit" className="tp-btn">Post Comment</button>
                     </div>
                  </div>
               </div>
            </form>
         </div>
      </>
   );
};

export default FormArea;