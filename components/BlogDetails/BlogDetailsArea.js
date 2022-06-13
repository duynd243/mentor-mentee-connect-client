import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { singleBlog } from '../../redux/features/blogSlice';
import BlogRightSide from '../Blog/BlogRightSide';
import FormArea from './FormArea';

const BlogDetailsArea = () => {
   // all blogs
   const blogs = useSelector(state => state.blogs.allBlogs);
   // blog
   const blog = useSelector(state => state.blogs.blog);
   // dispatch
   const dispatch = useDispatch();
   // dispatch single blog
   useEffect(() => {
      dispatch(singleBlog('62208badea7975d304d76830'))
   }, [dispatch])
   return (
      <>
         <section className="blog__area pt-120 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 col-xl-8 col-lg-8">
                     <div className="postbox__wrapper postbox__details pr-20">
                        <div className="postbox__item transition-3 mb-70">
                           <div className="postbox__thumb m-img">
                              <img src={blog?.img_bg} alt="" />
                           </div>
                           <div className="postbox__content">
                              <div className="postbox__meta">
                                 <span><i className="far fa-calendar-check"></i> {blog?.date} </span>
                                 <span><a href="#"><i className="far fa-user"></i> Shahnewaz</a></span>
                                 <span><a href="#"><i className="fal fa-comments"></i> 02 Comments</a></span>
                              </div>
                              <h3 className="postbox__title">A Podpourri of Learning Options: Pods, Hubs, and Microschools</h3>
                              <div className="postbox__text mb-40">
                                 <p>Me old mucker argy-bargy  Im telling pear shaped Jeffrey super brilliant, I excuse my French blatant gormless up the duff, cup of char up the kyver tosser cras happy days. The full monty he nicked it he legged it bum bag burke plastered arse over tit its your round owt to do with me pardon you, on your bike mate hanky panky mush cuppa only a quid crikey Jeffrey skive off, faff about so I said what a load of rubbish blag David knees up cockup cras. Argy-bargy give us a bell wellies gosh skive off old bodge cheesed off A bit of hows your father off his nut bamboozled, bugger say Im telling morish bleeding boot up the kyver nice one brilliant, ruddy jolly good fanny around chinwag amongst brown bread arse brolly. Horse play its all gone to pot codswallop easy peasy mush knees up down the pub jolly good nice one tosser its your round lurgy, I vagabond barmy off his nut only a quid so I said is gosh Charles blow off, pardon me chip shop Richard spiffing skive off bleeding get stuffed mate porkies amongst the full monty.</p>
                              </div>
                              <div className="postbox__quote grey-bg-2 mb-45 p-relative fix">
                                 <img className="quote" src="assets/img/blog/quote-1.png" alt="" />
                                 <blockquote>
                                    <p>After I started learning design with Quillow, I realized that I had Improved to very advanced levels.</p>
                                    <h4>Chris Collins</h4>
                                 </blockquote>
                              </div>
                              <div className="postbox__text mb-30">
                                 <p>Horse play its all gone to pot codswallop easy peasy mush knees up down the pub jolly good nice one tosser its your round lurgy, I vagabond barmy off his nut only a quid so I said is gosh Charles blow off, pardon me chip shop Richard spiffing skive off bleeding get stuffed mate porkies amongst the full monty. Daft burke you</p>
                              </div>
                              <div className="postbox__link mb-35">
                                 <p>The little rotter bum bag a blinding shot gosh spifing butty eatonwha load of rubbish bamboozled. <a href="#"> https://educal.com/courses</a> </p>
                              </div>
                              <div className="postbox__img w-img mb-45" >
                                 <img src="assets/img/blog/blog-big-4.jpg" alt="" />
                              </div>
                              <div className="postbox__text mb-40">
                                 <h3>Build a beautiful website with Quillow</h3>
                                 <p>Some dodgy chav car boot blower starkers bonnet tickety-boo no biggie cheesed off, Oxford bloke fantastic the wireless bevvy cobblers chancer give us a bell, bleeder jolly good hanky panky do one gormless matie boy. Pear shaped my good sir I cobblers at public school quaint tickety-boo crikey bits and bobs, wellies bugger all mate golly gosh brolly matie boy fanny around chimney pot cracking goal my lady, bodge so I said spiffing posh the full monty dont get shirty with me no biggie.</p>

                                 <p>Brolly grub blimey victoria sponge blag nancy boy dont get shirty with me skive off bobby burke in my flat bog-standard, easy peasy golly gosh up the duff show off show off pick your nose and blow off gosh a brilliant that what a load of rubbish.</p>
                              </div>
                              <div className="postbox__line"></div>
                              <div className="postbox__meta-3 d-sm-flex align-items-center">
                                 <span>Tags :</span>
                                 <div className="tagcloud">
                                    <a href="#">Art & Design</a>
                                    <a href="#">Education</a>
                                    <a href="#">App</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="latest-comments mb-65">
                           <h3>3 Comments</h3>
                           <ul>
                              <li>
                                 <div className="comments-box grey-bg-2">
                                    <div className="comments-info d-flex">
                                       <div className="comments-avatar mr-20">
                                          <img src="assets/img/blog/comments/comment-1.jpg" alt="" />
                                       </div>
                                       <div className="avatar-name">
                                          <h5>Eleanor Fant</h5>
                                          <span className="post-meta"> July 14, 2022</span>
                                       </div>
                                    </div>
                                    <div className="comments-text ml-65">
                                       <p>So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of hows your father my lady absolutely.</p>
                                       <div className="comments-replay">
                                          <a href="#">Reply</a>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                              <li className="children">
                                 <div className="comments-box grey-bg-2">
                                    <div className="comments-info d-flex">
                                       <div className="comments-avatar mr-20">
                                          <img src="assets/img/blog/comments/comment-1.jpg" alt="" />
                                       </div>
                                       <div className="avatar-name">
                                          <h5>Dominic</h5>
                                          <span className="post-meta">April 16, 2022 </span>
                                       </div>
                                    </div>
                                    <div className="comments-text ml-65">
                                       <p>David blatant have it, standard A bit of hows your father my lady absolutely.</p>
                                       <div className="comments-replay">
                                          <a href="#">Reply</a>
                                       </div>
                                    </div>
                                 </div>
                                 <ul>
                                    <li className="children-2">
                                       <div className="comments-box grey-bg-2">
                                          <div className="comments-info d-flex">
                                             <div className="comments-avatar mr-20">
                                                <img src="assets/img/blog/comments/comment-3.jpg" alt="" />
                                             </div>
                                             <div className="avatar-name">
                                                <h5>Von Rails</h5>
                                                <span className="post-meta">April 18, 2022 </span>
                                             </div>
                                          </div>
                                          <div className="comments-text ml-65">
                                             <p>He nicked it get stuffed mate spend a penny plastered.!</p>
                                             <div className="comments-replay">
                                                <a href="#">Reply</a>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                 </ul>
                              </li>
                           </ul>
                        </div>
                        {/* FormArea */}
                        <FormArea />
                     </div>
                  </div>
                  {/* BlogRightSide */}
                  <BlogRightSide blogs={blogs} />
               </div>
            </div>
         </section>
      </>
   );
};

export default BlogDetailsArea;