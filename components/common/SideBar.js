import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import Link from 'next/link';
import Collapsible from 'react-collapsible';
import useAuth from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { searchText } from '../../redux/features/coursesSlice';

const Sidebar = ({ show, handleClose, dynammicPageHeader = false }) => {
   const { user, logout } = useAuth();
     // searchValue
     const [searchValue, setSearchValue] = useState('');
     // dispatch
     const dispatch = useDispatch();
     // router
     const router = useRouter();
     // handleSubmit
     const handleSubmit = e => {
        e.preventDefault();
        if (!searchValue) {
  
        }
        else {
           dispatch(searchText(searchValue))
           router.push('/search-courses')
        }
     }
   return (
      <>

         <div >
            <Offcanvas show={show} onHide={handleClose} placement='end' className='side__bar'>
               <Offcanvas.Header closeButton>
                  <div className="offcanvas__logo logo">
                     {
                        dynammicPageHeader ? <Link href="/">
                           <a >
                              <img src={"/" + "assets/img/logo/logo.png"} alt="logo" />
                           </a>
                        </Link> : <Link href="/">
                           <a >
                              <img src="assets/img/logo/logo.png" alt="logo" />
                           </a>
                        </Link>
                     }

                  </div>
                  <div className="offcanvas__close">
                     <button className="offcanvas__close-btn" onClick={handleClose}>
                        <i className="fal fa-times"></i>
                     </button>
                  </div>
               </Offcanvas.Header>

               <Offcanvas.Body>

                  <div className="sidebar__content">

                     <div className="offcanvas__search mb-25">
                        <form onSubmit={handleSubmit}>
                           <input onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="What are you searching for?" />
                           <button type="submit" ><i className="far fa-search"></i></button>
                        </form>
                     </div>

                     <div className="mobile-menu">
                        <nav id="mobile-menu">
                           <ul>
                              {
                                 !user?.email &&
                                 <>
                                    <Collapsible trigger={<Link href="/">Home</Link>} triggerTagName="div"
                                       triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                                       <ul className="sidebar_sub_menu submenu text-white">
                                          <li><Link href="/home"><a >Home Style 1</a></Link></li>
                                          <li><Link href="/home-two"><a >Home Style 2</a></Link></li>
                                          <li><Link href="/home-three"><a >Home Style 3</a></Link></li>
                                       </ul>
                                    </Collapsible>

                                    <div className='single_link iconAdd '>
                                       <li><Link href="/about"><a>About</a></Link></li>
                                    </div>

                                    <Collapsible trigger={<Link href="/courses">Courses</Link>} triggerTagName="div"
                                       triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                                       <ul className="sidebar_sub_menu submenu text-white">
                                          <li><Link href="/courses"><a>Course Style 1</a></Link></li>
                                          <li><Link href="/courses-style-two"><a>Course Style 2</a></Link></li>
                                          <li><Link href="/course-sidebar"><a>Course Sidebar</a></Link></li>
                                          <li><Link href="/course-details"><a>Course Details</a></Link></li>
                                       </ul>
                                    </Collapsible>

                                    <Collapsible trigger={<Link href="/about">Pages</Link>} triggerTagName="div"
                                       triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                                       <ul className="sidebar_sub_menu submenu text-white">
                                          <li><Link href="/events"><a >Our Events</a></Link></li>
                                          <li><Link href="/event-details"><a >Event Details</a></Link></li>
                                          <li><Link href="/team"><a >Team</a></Link></li>
                                          <li><Link href="/team-details"><a >Team Details</a></Link></li>
                                          <li><Link href="/404-page"><a >404 Error</a></Link></li>
                                          <li><Link href="/sign-in"><a >Sign In</a></Link></li>
                                          <li><Link href="/sign-up"><a >Sign Up</a></Link></li>
                                          <li><Link href="/cart"><a >Cart</a></Link></li>
                                          <li><Link href="/checkout"><a >Checkout</a></Link></li>
                                       </ul>
                                    </Collapsible>

                                    <Collapsible trigger={<Link href="/blog">Blog</Link>} triggerTagName="div"
                                       triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                                       <ul className="sidebar_sub_menu submenu text-white">
                                          <li><Link href="/blog"><a >Blog</a></Link></li>
                                          <li><Link href="/blog-details"><a >Blog Details</a></Link></li>
                                       </ul>
                                    </Collapsible>

                                    <div className='single_link iconAdd border-0'>
                                       <li><Link href="/contact"><a >Contact</a></Link></li>
                                    </div>
                                 </>
                              }

                              {
                                 user?.email &&
                                 <>
                                    <Collapsible trigger={<Link href="/">Home</Link>} triggerTagName="div"
                                       triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                                       <ul className="sidebar_sub_menu submenu text-white">
                                          <li><Link href="/home"><a >Home Style 1</a></Link></li>
                                          <li><Link href="/home-two"><a >Home Style 2</a></Link></li>
                                          <li><Link href="/home-three"><a >Home Style 3</a></Link></li>
                                       </ul>
                                    </Collapsible>

                                    <div className='single_link iconAdd '>
                                       <li><Link href="/courses"><a>Courses</a></Link></li>
                                    </div>

                                    <div className='single_link iconAdd '>
                                       <li><Link href="/my-courses"><a>My Courses</a></Link></li>
                                    </div>

                                    <div className='single_link iconAdd '>
                                       <li><Link href="/my-profile"><a>My Prifile</a></Link></li>
                                    </div>

                                 </>
                              }

                           </ul>
                        </nav>
                     </div>

                     <div className="offcanvas__contact mt-30 mb-20">
                        <h4>Contact Info</h4>
                        <ul>
                           <li className="d-flex align-items-center">
                              <div className="offcanvas__contact-icon mr-15">
                                 <i className="fal fa-map-marker-alt"></i>
                              </div>
                              <div className="offcanvas__contact-text">
                                 <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873">12/A, Mirnada City Tower, NYC</a>
                              </div>
                           </li>
                           <li className="d-flex align-items-center">
                              <div className="offcanvas__contact-icon mr-15">
                                 <i className="far fa-phone"></i>
                              </div>
                              <div className="offcanvas__contact-text">
                                 <a href="mailto:support@gmail.com">088889797697</a>
                              </div>
                           </li>
                           <li className="d-flex align-items-center">
                              <div className="offcanvas__contact-icon mr-15">
                                 <i className="fal fa-envelope"></i>
                              </div>
                              <div className="offcanvas__contact-text">
                                 <a href="tel:+012-345-6789">support@mail.com</a>
                              </div>
                           </li>
                        </ul>
                     </div>
                     <div className="offcanvas__social">
                        <ul>
                           <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                           <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                           <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                           <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                        </ul>
                     </div>
                  </div>

               </Offcanvas.Body>
            </Offcanvas>
         </div>
      </>
   );
};

export default Sidebar;