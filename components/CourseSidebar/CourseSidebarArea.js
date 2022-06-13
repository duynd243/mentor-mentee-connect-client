import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { categoryData } from '../../redux/features/categorySlice';
import Pagination from '../common/Pagination';
import NewCourses from './NewCourses';
import { useRouter } from 'next/router';
import { searchText } from '../../redux/features/coursesSlice';

const CourseSidebarArea = () => {
  // categoryFilter
  const [categoryFilter, setCategoryFilter] = useState(false);
  // searchValue
  const [searchValue, setSearchValue] = useState('');
  // useRouter
  const router = useRouter();
  // allCourseItems
  const allCourseItems = useSelector(state => state.courses.allCourses);
  // categoryItems
  const categoryItems = useSelector(state => state.category.categoryItems);
  // status
  const status = useSelector(state => state.category.status);
  //   uniqueCategory
  let uniqueCategory = ['All Categories', ...new Set(allCourseItems.map(course => course.category))];
  // currentPage
  const [currentPage, setCurrentPage] = useState(1);
  // coursePerPage
  const [coursePerPage, setCoursePerPage] = useState(4);
  // indexOfLastCourse
  const indexOfLastCourse = currentPage * coursePerPage;
  // indexOfFirstCourse
  const indexOfFirstCourse = indexOfLastCourse - coursePerPage;
  // courseItems
  let courseItems = categoryItems.slice(categoryFilter ? 0 : indexOfFirstCourse, categoryFilter ?
    categoryItems.length : indexOfLastCourse);
  // category
  const [category, setCategory] = useState('Category');
  // dispatch
  const dispatch = useDispatch();

  // paginate
  const paginate = (number) => {
    setCurrentPage(number)
  }
  // useEffect
  useEffect(() => {
    dispatch(categoryData(category));
  }, [dispatch, category]);

  // handleCategory
  const handleCategoryFilter = (categoryItem) => {
    if (categoryItem === 'All Categories') {
      setCategory('Category')
    }
    else {
      setCategory(categoryItem)
    }

    if (categoryItem === 'All Categories') {
      setCategoryFilter(false)
    }
    else {
      setCategoryFilter(true)
    }
  }


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
},[status])

  return (
    <>
      <section className="course__area pt-115 pb-90 grey-bg-3">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="course__tab-inner white-bg mb-50">
                <div className="row align-items-center">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="course__tab-wrapper d-flex align-items-center">
                      <div className="course__tab-btn">
                        <ul className="nav nav-tabs" id="courseTab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="grid-tab" data-bs-toggle="tab" data-bs-target="#grid" type="button" role="tab" aria-controls="grid" aria-selected="true">
                              <svg className="grid" viewBox="0 0 24 24">
                                <rect x="3" y="3" className="st0" width="7" height="7" />
                                <rect x="14" y="3" className="st0" width="7" height="7" />
                                <rect x="14" y="14" className="st0" width="7" height="7" />
                                <rect x="3" y="14" className="st0" width="7" height="7" />
                              </svg>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className="nav-link list" id="list-tab" data-bs-toggle="tab" data-bs-target="#list" type="button" role="tab" aria-controls="list" aria-selected="false">
                              <svg className="list" viewBox="0 0 512 512">
                                <g id="Layer_2_1_">
                                  <path className="st0" d="M448,69H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,69,448,69z" />
                                  <circle className="st0" cx="64" cy="100" r="31" />
                                  <path className="st0" d="M448,225H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,225,448,225z" />
                                  <circle className="st0" cx="64" cy="256" r="31" />
                                  <path className="st0" d="M448,381H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,381,448,381z" />
                                  <circle className="st0" cx="64" cy="412" r="31" />
                                </g>
                              </svg>
                            </button>
                          </li>
                        </ul>
                      </div>

                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="course__view text-end">
                      <h4>{`Showing 1 - ${courseItems.length} of ${allCourseItems.length}`}</h4>
                    </div>

                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xxl-12">
                  <div className="course__tab-conent">
                    <div className="tab-content" id="courseTabContent">
                      <div className="tab-pane fade show active" id="grid" role="tabpanel" aria-labelledby="grid-tab">
                        <div className="row">

                          {
                            courseItems.map(course => {
                              const { _id, img_bg, price, category, title, teacher_img, tutor_name, lessons, enrolled, watching, review } = course;
                              return <div key={_id} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                <div className="course__item-2 transition-3 white-bg mb-30 fix">
                                  <div className="course__thumb-2 w-img fix course_thumb_height">
                                    <Link href={`/course-details/${_id}`}>
                                      <a>
                                        <img src={img_bg} alt="" />
                                      </a>
                                    </Link>
                                  </div>
                                  <div className="course__content-2">
                                    <div className="course__top-2 d-flex align-items-center justify-content-between">
                                      <div className="course__tag-2">
                                        <Link href={`/course-details/${_id}`}>
                                          <a>{category}</a>
                                        </Link>
                                      </div>
                                      <div className="course__price-2">
                                        <span>${price}</span>
                                      </div>
                                    </div>
                                    <h3 className="course__title-2">
                                      <Link href={`/course-details/${_id}`}>
                                        <a>{title?.slice(0, 30)}..</a>
                                      </Link>
                                    </h3>
                                    <div className="course__bottom-2 d-flex align-items-center justify-content-between">
                                      <div className="course__action">
                                        <ul>
                                          <li>
                                            <div className="course__action-item d-flex align-items-center">
                                              <div className="course__action-icon mr-5">
                                                <span>
                                                  <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.00004 5.5833C6.28592 5.5833 7.32833 4.5573 7.32833 3.29165C7.32833 2.02601 6.28592 1 5.00004 1C3.71416 1 2.67175 2.02601 2.67175 3.29165C2.67175 4.5573 3.71416 5.5833 5.00004 5.5833Z" stroke="#5F6160" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M9 11.0001C9 9.22632 7.20722 7.79175 5 7.79175C2.79278 7.79175 1 9.22632 1 11.0001" stroke="#5F6160" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                  </svg>
                                                </span>
                                              </div>
                                              <div className="course__action-content">
                                                <span>{enrolled?.substring(0, 3)}</span>
                                              </div>
                                            </div>
                                          </li>
                                          <li>
                                            <div className="course__action-item d-flex align-items-center">
                                              <div className="course__action-icon mr-5">
                                                <span>
                                                  <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.01232 5.95416C9.01232 7.06709 8.11298 7.96642 7.00006 7.96642C5.88713 7.96642 4.98779 7.06709 4.98779 5.95416C4.98779 4.84123 5.88713 3.94189 7.00006 3.94189C8.11298 3.94189 9.01232 4.84123 9.01232 5.95416Z" stroke="#5F6160" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M7 10.6026C8.98416 10.6026 10.8334 9.43342 12.1206 7.40991C12.6265 6.61737 12.6265 5.28523 12.1206 4.49269C10.8334 2.46919 8.98416 1.30005 7 1.30005C5.01584 1.30005 3.16658 2.46919 1.87941 4.49269C1.37353 5.28523 1.37353 6.61737 1.87941 7.40991C3.16658 9.43342 5.01584 10.6026 7 10.6026Z" stroke="#5F6160" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                                  </svg>
                                                </span>
                                              </div>
                                              <div className="course__action-content">
                                                <span>{watching}</span>
                                              </div>
                                            </div>
                                          </li>
                                          <li>
                                            <div className="course__action-item d-flex align-items-center">
                                              <div className="course__action-icon mr-5">
                                                <span>
                                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.86447 1.72209L7.74447 3.49644C7.86447 3.74343 8.18447 3.98035 8.45447 4.02572L10.0495 4.29288C11.0695 4.46426 11.3095 5.2103 10.5745 5.94625L9.33447 7.19636C9.12447 7.40807 9.00947 7.81637 9.07447 8.10873L9.42947 9.65625C9.70947 10.8812 9.06447 11.355 7.98947 10.7148L6.49447 9.82259C6.22447 9.66129 5.77947 9.66129 5.50447 9.82259L4.00947 10.7148C2.93947 11.355 2.28947 10.8761 2.56947 9.65625L2.92447 8.10873C2.98947 7.81637 2.87447 7.40807 2.66447 7.19636L1.42447 5.94625C0.694466 5.2103 0.929466 4.46426 1.94947 4.29288L3.54447 4.02572C3.80947 3.98035 4.12947 3.74343 4.24947 3.49644L5.12947 1.72209C5.60947 0.759304 6.38947 0.759304 6.86447 1.72209Z" stroke="#5F6160" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                                  </svg>
                                                </span>
                                              </div>
                                              <div className="course__action-content">
                                                <span>{review}</span>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="course__tutor-2">
                                        <Link href={`/course-details/${_id}`}>
                                          <a>
                                            <img src={teacher_img} alt="" />
                                          </a>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            })
                          }

                        </div>
                      </div>


                      <div className="tab-pane fade" id="list" role="tabpanel" aria-labelledby="list-tab">
                        <div className="row">
                          <div className="col-xxl-12">
                            {
                              courseItems.map(course => {
                                const { _id, img_bg, price, category, title, teacher_img, tutor_name, lessons } = course;
                                return <div key={_id} className="course__item course__item-list white-bg mb-30 fix">
                                  <div className="row gx-0">
                                    <div className="col-xxl-4 col-xl-4 col-lg-4">
                                      <div className="course__thumb w-img p-relative fix"
                                        style={{ height: '100%' }}>
                                        <Link href={`/course-details/${_id}`}>
                                          <a>
                                            <img src={img_bg} alt="" style={{ objectFit: 'cover' }} />
                                          </a>
                                        </Link>
                                      </div>
                                    </div>
                                    <div className="col-xxl-8 col-xl-8 col-lg-8">
                                      <div className="course__right p-relative">
                                        <div className="course__content p-relative">
                                          <div className="course__tag">
                                            <Link href={`/course-details/${_id}`}>
                                              <a>{category}</a>
                                            </Link>
                                          </div>
                                          <h3 className="course__title">
                                            <Link href={`/course-details/${_id}`}>
                                              <a >{title}</a>
                                            </Link>
                                          </h3>
                                          <div className="course__summary">
                                            <p>Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem</p>
                                          </div>

                                          <div className="course__bottom d-sm-flex align-items-center justify-content-between">
                                            <div className="course__tutor">
                                              <Link href={`/course-details/${_id}`}>
                                                <a>
                                                  <img src={teacher_img} alt="" />
                                                </a>
                                              </Link>
                                            </div>
                                            <div className="course__lesson">
                                              <a href="#"><svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 12.2V4.49999C1 1.7 1.70588 1 4.52941 1H9.47059C12.2941 1 13 1.7 13 4.49999V11.5C13 11.598 13 11.696 12.9929 11.794" stroke="#49535B" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M3.01176 10.0999H13V12.5498C13 13.9008 11.8918 14.9998 10.5294 14.9998H3.47059C2.10824 14.9998 1 13.9008 1 12.5498V12.0948C1 10.9959 1.90353 10.0999 3.01176 10.0999Z" stroke="#49535B" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M4.17647 4.5H9.82353" stroke="#49535B" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M4.17647 6.94995H7.70589" stroke="#49535B" strokeLinecap="round" strokeLinejoin="round" />
                                              </svg>
                                                {lessons} Lessons
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="course__content-bottom d-flex justify-content-between align-items-center">
                                          <div className="course__price-2">
                                            <span>${price}</span>
                                          </div>
                                          <div className="course__btn">
                                            <Link href={`/course-details/${_id}`}>
                                              <a className="link-btn-2">
                                                Know Details
                                                <i className="far fa-arrow-right"></i>
                                                <i className="far fa-arrow-right"></i>
                                              </a>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              })
                            }

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {!categoryFilter && <Pagination coursePerPage={coursePerPage} totalCourse={categoryItems.length}
                  paginate={paginate} currentPage={currentPage} />}
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="course__sidebar pl-70">
                <div className="course__sidebar-widget white-bg">
                  <div className="course__sidebar-search">
                    <form onSubmit={handleSubmit}>
                      <input onChange={(e) => setSearchValue(e.target.value)} type="text"
                        placeholder="Search for courses..." />
                      <button type="submit">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                          viewBox="0 0 584.4 584.4" style={{ enableBackground: "new 0 0 584.4 584.4" }} xmlSpace="preserve">
                          <g>
                            <path className="st0" d="M565.7,474.9l-61.1-61.1c-3.8-3.8-8.8-5.9-13.9-5.9c-6.3,0-12.1,3-15.9,8.3c-16.3,22.4-36,42.1-58.4,58.4    c-4.8,3.5-7.8,8.8-8.3,14.5c-0.4,5.6,1.7,11.3,5.8,15.4l61.1,61.1c12.1,12.1,28.2,18.8,45.4,18.8c17.1,0,33.3-6.7,45.4-18.8    C590.7,540.6,590.7,499.9,565.7,474.9z" />
                            <path className="st1" d="M254.6,509.1c140.4,0,254.5-114.2,254.5-254.5C509.1,114.2,394.9,0,254.6,0C114.2,0,0,114.2,0,254.5    C0,394.9,114.2,509.1,254.6,509.1z M254.6,76.4c98.2,0,178.1,79.9,178.1,178.1s-79.9,178.1-178.1,178.1S76.4,352.8,76.4,254.5    S156.3,76.4,254.6,76.4z" />
                          </g>
                        </svg>
                      </button>
                    </form>
                  </div>
                </div>
                <div className="course__sidebar-widget white-bg">
                  <div className="course__sidebar-info">
                    <h3 className="course__sidebar-title">Categories</h3>
                    <ul>
                      {
                        uniqueCategory.slice(0, 5).map((categoryItem, index) => {
                          return <li key={index}>
                            <div onClick={() => handleCategoryFilter(categoryItem)} className="course__sidebar-check mb-10 d-flex align-items-center">
                              <input className="m-check-input" type="checkbox" readOnly
                                checked={category === categoryItem ? 'checked' : ''} />
                              <label className="m-check-label"> {categoryItem} </label>
                            </div>
                          </li>
                        })
                      }
                    </ul>

                  </div>
                </div>

                <div className="course__sidebar-widget white-bg">
                  <div className="course__sidebar-info">
                    <h3 className="course__sidebar-title">Popular Tags</h3>
                    <ul>
                      {
                        uniqueCategory.slice(5, 10).map((categoryItem, index) => {
                          return <li key={index}>
                            <div onClick={() => handleCategoryFilter(categoryItem)} className="course__sidebar-check mb-10 d-flex align-items-center">
                              <input className="m-check-input" type="checkbox" readOnly
                                checked={category === categoryItem ? 'checked' : ''} />
                              <label className="m-check-label"> {categoryItem} </label>
                            </div>
                          </li>
                        })
                      }
                    </ul>
                  </div>
                </div>

                <NewCourses allCourseItems={allCourseItems} />

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseSidebarArea;