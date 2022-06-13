import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryData } from '../../redux/features/categorySlice';
import Pagination from '../common/Pagination';
import Link from 'next/link';


const CourseArea = ({ courseData }) => {
  const [categoryFilter, setCategoryFilter] = useState(false)
  // allCourseItems
  const allCourseItems = useSelector(state => state.courses.allCourses);
  // categoryItems
  const categoryItems = useSelector(state => state.category.categoryItems);
  //   uniqueCategory
  const uniqueCategory = [...new Set(courseData.map(course => course.category))];
  // status
  const status = useSelector(state => state.category.status);
  // currentPage
  const [currentPage, setCurrentPage] = useState(1);
  // coursePerPage
  const [coursePerPage, setCoursePerPage] = useState(6);
  // indexOfLastCourse
  const indexOfLastCourse = currentPage * coursePerPage;``
  // category
  const [category, setCategory] = useState('Category');
  // indexOfFirstCourse
  const indexOfFirstCourse = indexOfLastCourse - coursePerPage;
  // courseItems
  let courseItems = categoryItems.slice(categoryFilter ? 0 : indexOfFirstCourse, categoryFilter ?
    categoryItems.length : indexOfLastCourse);
  // dispatch
  const dispatch = useDispatch();

  // paginate
  const paginate = (number) => {
    setCurrentPage(number)
  };
  // dispatch categoryData
  useEffect(() => {
    dispatch(categoryData(category));
  }, [dispatch, category]);

  // handleCategory
  const handleCategory = (e) => {
    setCategory(e.target.value);
    if (e.target.value === 'Category') {
      setCategoryFilter(false)
    }
    else {
      setCategoryFilter(true)
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
          <div className="course__tab-inner white-bg mb-50">
            <div className="row align-items-center">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
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
                  <div className="course__view">
                    <h4>{`Showing 1 - ${courseItems.length} of ${courseData.length}`}</h4>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="course__sort d-flex justify-content-sm-end">
                  <div className="course__sort-inner">
                    <select onChange={handleCategory} value={category} >
                      <option >Category</option>
                      {
                        uniqueCategory.map((category, index) => {
                          return <option key={index}>{category}</option>
                        })
                      }
                    </select>
                  </div>
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
                          const { _id, img_bg, price, category, title, teacher_img, tutor_name, lessons } = course;
                          return <div key={_id} className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                            <div className="course__item white-bg transition-3 mb-30">
                              <div className="course__thumb w-img fix course_thumb_height">
                                <Link href={`/course-details/${_id}`}>
                                  <a >
                                    <img src={img_bg} alt="" />
                                  </a>
                                </Link>
                              </div>
                              <div className="course__content p-relative">
                                <div className="course__price">
                                  <span>${price}</span>
                                </div>
                                <div className="course__tag">
                                  <Link href={`/course-details/${_id}`}>
                                    <a >{category}</a>
                                  </Link>
                                </div>
                                <h3 className="course__title">
                                  <Link href={`/course-details/${_id}`}>
                                    <a >{title.substring(0, 30)}..</a>
                                  </Link>
                                </h3>
                                <p>A beginner’s guide to designing or renovating interior spaces that pop.</p>

                                <div className="course__bottom d-sm-flex align-items-center justify-content-between">
                                  <div className="course__tutor">
                                    <a href="#">
                                      <img src={teacher_img} alt="" />{tutor_name}
                                    </a>
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
                                        <img src={img_bg} alt="" />
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                                <div className="col-xxl-8 col-xl-8 col-lg-8">
                                  <div className="course__right p-relative">
                                    <div className="course__content p-relative">
                                      <div className="course__tag">
                                        <Link href={`/course-details/${_id}`}>
                                          <a >{category}</a>
                                        </Link>
                                      </div>
                                      <h3 className="course__title">
                                        <Link href={`/course-details/${_id}`}>
                                          <a >{title?.substring(0, 30)}..</a>
                                        </Link>
                                      </h3>
                                      <div className="course__summary">
                                        <p>Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem</p>
                                      </div>

                                      <div className="course__bottom d-sm-flex align-items-center justify-content-between">
                                        <div className="course__tutor">
                                          <a href="#">
                                            <img src={teacher_img} alt="" />
                                            {tutor_name}</a>
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
      </section>
    </>
  );
};

export default CourseArea;