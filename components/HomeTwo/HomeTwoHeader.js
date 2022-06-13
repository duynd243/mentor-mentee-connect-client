import Link from 'next/link';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import links from '../../data/linkData';
import useSticky from '../../hooks/useSticky';
import { useRouter } from 'next/router';
import { searchText } from '../../redux/features/coursesSlice';
import LoginData from '../../data/LoginMenuData';
import useAuth from '../../hooks/useAuth';
import Sidebar from '../common/SideBar';

const HomeTwoHeader = () => {
   // handle sidebar show
   const [show, setShow] = useState(false);
   // handle close
   const handleClose = () => setShow(false);
   // handle sidebar show
   const handleShow = () => setShow(true);
   //  sticky
   const { headerSticky } = useSticky();
   // searchValue
   const [searchValue, setSearchValue] = useState('');
   // dispatch
   const dispatch = useDispatch();
   // user
   const { user } = useAuth();
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
         <header>
            <div id="header-sticky" className={headerSticky ? "header__area header__transparent header__sticky" : "header__area header__transparent"}>
               <div className="header__bottom">
                  <div className="container">
                     <div className="row align-items-center">
                        <div className="col-xxl-8 col-xl-9 col-lg-10 col-md-6 col-6">
                           <div className="header__bottom-left d-flex align-items-center">
                              <div className="logo">
                                 <Link href="/">
                                    <a >
                                       <img src="assets/img/logo/logo-2.png" alt="logo" />
                                    </a>
                                 </Link>
                              </div>
                              <div className="main-menu main-menu-2 main-menu-border ml-30 pl-30 d-none d-lg-block">
                                 <nav id="mobile-menu">
                                    <ul>
                                       {!user?.email &&
                                          links.map((link) => {
                                             return <li key={link.id} className={link.submenu ? `has-dropdown` : ''}>
                                                <Link href={`${link.url}`}><a >{link.name}</a></Link>
                                                <ul className={link.submenu ? `submenu` : ''}>
                                                   {
                                                      link?.submenu?.map((sub_menu, index) => {
                                                         return <li key={sub_menu.id}>
                                                            <Link href={`${sub_menu.url}`}><a >{sub_menu.name}</a></Link>
                                                         </li>
                                                      })
                                                   }
                                                </ul>
                                             </li>
                                          })
                                       }

                                       {
                                          user?.email &&
                                          LoginData.map((link) => {
                                             return <li key={link.id} className={link.submenu ? `has-dropdown` : ''}>
                                                <Link href={`${link.url}`}><a >{link.name}</a></Link>
                                                <ul className={link.submenu ? `submenu` : ''}>
                                                   {
                                                      link?.submenu?.map((sub_menu, index) => {
                                                         return <li key={sub_menu.id}>
                                                            <Link href={`${sub_menu.url}`}><a >{sub_menu.name}</a></Link>
                                                         </li>
                                                      })
                                                   }
                                                </ul>
                                             </li>
                                          })
                                       }
                                    </ul>
                                 </nav>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-4 col-xl-3 col-lg-2 col-md-6 col-6">
                           <div className="header__bottom-right d-flex justify-content-end align-items-center pl-30">
                              <div className="header__action d-none d-xl-block">
                                 <ul>
                                    <li>
                                       <Link href="/sign-in">
                                          <a >
                                             <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.1466 8.96416C7.05493 8.95499 6.94493 8.95499 6.8441 8.96416C4.66243 8.89083 2.92993 7.10333 2.92993 4.90333C2.92993 2.65749 4.74493 0.833328 6.99993 0.833328C9.24576 0.833328 11.0699 2.65749 11.0699 4.90333C11.0608 7.10333 9.32826 8.89083 7.1466 8.96416Z" stroke="#0C140F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M2.56341 12.3467C0.345075 13.8317 0.345075 16.2517 2.56341 17.7275C5.08424 19.4142 9.21841 19.4142 11.7392 17.7275C13.9576 16.2425 13.9576 13.8225 11.7392 12.3467C9.22758 10.6692 5.09341 10.6692 2.56341 12.3467Z" stroke="#0C140F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                             </svg>
                                          </a>
                                       </Link>
                                    </li>
                                 </ul>
                              </div>
                              <div className="header__search header__search-2 d-none d-xl-block">
                                 <form onSubmit={handleSubmit}>
                                    <div className="header__search-input">
                                       <input type="text" onChange={(e) => setSearchValue(e.target.value)} placeholder="Search..." />
                                       <button className="header__search-btn">
                                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.11111 15.2222C12.0385 15.2222 15.2222 12.0385 15.2222 8.11111C15.2222 4.18375 12.0385 1 8.11111 1C4.18375 1 1 4.18375 1 8.11111C1 12.0385 4.18375 15.2222 8.11111 15.2222Z" stroke="#3E8454" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                             <path d="M17 17L13.1333 13.1333" stroke="#3E8454" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                          </svg>
                                       </button>
                                    </div>
                                 </form>
                              </div>
                              <div className="header__hamburger ml-50 d-xl-none">
                                 <button type="button" onClick={handleShow} className="hamurger-btn">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>

         <Sidebar show={show} handleClose={handleClose} />
      </>
   );
};

export default HomeTwoHeader;