// import {useSelector} from 'react-redux';
import {useQuery} from "react-query";
import courseApi from "../../apis/course";
import {Spinner} from "react-bootstrap";
import Link from "next/link";

const CourseArea = () => {
    // all courses
    //   const allCoursesItems = useSelector(state => state.courses.allCourses);
    const {data: allCourses, isLoading: loading1} = useQuery(
        "allCourses",
        () => courseApi.getAllCourses({page: 1, size: 6}),
    );

    const {data: allNewestCourses, isLoading: loading2} = useQuery(
        "allNewestCourses",
        () => courseApi.getAllCourses({page: 1, size: 6, sort: "createDate desc"}),
    );

    // Sort by number of students enrolled (đang sort tạm field khác trong lúc chờ API).
    const {data: allPopularCourses, isLoading: loading3} = useQuery(
        "allPopularCourses",
        () => courseApi.getAllCourses({page: 1, size: 6, sort: "name desc"}),
    );

    const {data: allMostRatedCourses, isLoading: loading4} = useQuery(
        "allMostRatedCourses",
        () => courseApi.getAllCourses({page: 1, size: 6, sort: "totalRating desc"}),
    );
    return (<>

            <section className="course__area grey-bg-4 pt-110 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="section__title-wrapper-2 text-center mb-40">
                                <span className="section__title-pre-2">Categories</span>
                                <h3 className="section__title-2">Most Popular Courses</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="portfolio-filter mb-40">
                                <nav>
                                    <div
                                        className="nav nav-tabs justify-content-center"
                                        id="course-tab"
                                        role="tablist"
                                    >
                                        <button
                                            className="nav-link active"
                                            id="nav-all-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#nav-all"
                                            type="button"
                                            role="tab"
                                            aria-controls="nav-all"
                                            aria-selected="true"
                                        >
                                            All Categories
                                        </button>

                                        <button
                                            className="nav-link"
                                            id="nav-newest-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#nav-newest"
                                            type="button"
                                            role="tab"
                                            aria-controls="nav-newest"
                                            aria-selected="false"
                                        >
                                            Newest
                                        </button>

                                        <button
                                            className="nav-link"
                                            id="nav-popular-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#nav-popular"
                                            type="button"
                                            role="tab"
                                            aria-controls="nav-popular"
                                            aria-selected="false"
                                        >
                                            Popularity
                                        </button>

                                        <button
                                            className="nav-link"
                                            id="nav-most-rated-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#nav-most-rated"
                                            type="button"
                                            role="tab"
                                            aria-controls="nav-most-rated"
                                            aria-selected="false"
                                        >
                                            Most Rated
                                        </button>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xxl-12">
                            <div
                                className="tab-content course__tab-content"
                                id="course-tabContent"
                            >

                                {/* All Categories */}
                                <div
                                    className="tab-pane fade show active"
                                    id="nav-all"
                                    role="tabpanel"
                                    aria-labelledby="nav-all-tab"
                                >
                                    <div className="course__tab-wrapper">
                                        <div className="row">
                                            {loading1 ? (
                                                <div className="text-center">
                                                    <Spinner animation="border"/>
                                                </div>
                                            ) : (
                                                allCourses.data.map((course: any) => {
                                                    return (
                                                        <div
                                                            key={course.id}
                                                            className="col-xxl-4 col-xl-4 col-lg-4 col-md-6"
                                                        >
                                                            <div
                                                                className="course__item-2 transition-3 white-bg mb-30 fix">
                                                                <div
                                                                    className="course__thumb-2 w-img fix course_thumb_height">
                                                                    <Link href={`/course-details/${course.id}`}>
                                                                        <a>
                                                                            <img src={course.imageUrl} alt=""/>
                                                                        </a>
                                                                    </Link>
                                                                </div>
                                                                <div className="course__content-2">
                                                                    <div
                                                                        className="course__top-2 d-flex align-items-center justify-content-between">
                                                                        <div className="course__tag-2">
                                                                            <Link href={`/course-details/${course.id}`}>
                                                                                <a>{course.subject.name}</a>
                                                                            </Link>
                                                                        </div>
                                                                        <div className="course__price-2">
                                                                            <span>${course.price}</span>
                                                                        </div>
                                                                    </div>
                                                                    <h3 className="course__title-2">
                                                                        <Link href={`/course-details/${course.id}`}>
                                                                            <a>{course.name}</a>
                                                                        </Link>
                                                                    </h3>
                                                                    <div
                                                                        className="course__bottom-2 d-flex align-items-center justify-content-between">
                                                                        <div className="course__action">
                                                                            <ul>
                                                                                <li>
                                                                                    <div
                                                                                        className="course__action-item d-flex align-items-center">
                                                                                        <div
                                                                                            className="course__action-icon mr-5">
                                              <span>
                                                <svg
                                                    width="10"
                                                    height="12"
                                                    viewBox="0 0 10 12"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                      d="M5.00004 5.5833C6.28592 5.5833 7.32833 4.5573 7.32833 3.29165C7.32833 2.02601 6.28592 1 5.00004 1C3.71416 1 2.67175 2.02601 2.67175 3.29165C2.67175 4.5573 3.71416 5.5833 5.00004 5.5833Z"
                                                      stroke="#5F6160"
                                                      strokeWidth="1.5"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                  />
                                                  <path
                                                      d="M9 11.0001C9 9.22632 7.20722 7.79175 5 7.79175C2.79278 7.79175 1 9.22632 1 11.0001"
                                                      stroke="#5F6160"
                                                      strokeWidth="1.5"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                  />
                                                </svg>
                                              </span>
                                                                                        </div>
                                                                                        <div
                                                                                            className="course__action-content">
                                                                                            <span>{"Số người"}</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div
                                                                                        className="course__action-item d-flex align-items-center">
                                                                                        <div
                                                                                            className="course__action-icon mr-5">
                                              <span>
                                                <svg
                                                    width="12"
                                                    height="12"
                                                    viewBox="0 0 12 12"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                      d="M6.86447 1.72209L7.74447 3.49644C7.86447 3.74343 8.18447 3.98035 8.45447 4.02572L10.0495 4.29288C11.0695 4.46426 11.3095 5.2103 10.5745 5.94625L9.33447 7.19636C9.12447 7.40807 9.00947 7.81637 9.07447 8.10873L9.42947 9.65625C9.70947 10.8812 9.06447 11.355 7.98947 10.7148L6.49447 9.82259C6.22447 9.66129 5.77947 9.66129 5.50447 9.82259L4.00947 10.7148C2.93947 11.355 2.28947 10.8761 2.56947 9.65625L2.92447 8.10873C2.98947 7.81637 2.87447 7.40807 2.66447 7.19636L1.42447 5.94625C0.694466 5.2103 0.929466 4.46426 1.94947 4.29288L3.54447 4.02572C3.80947 3.98035 4.12947 3.74343 4.24947 3.49644L5.12947 1.72209C5.60947 0.759304 6.38947 0.759304 6.86447 1.72209Z"
                                                      stroke="#5F6160"
                                                      strokeWidth="1.3"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                  />
                                                </svg>
                                              </span>
                                                                                        </div>
                                                                                        <div
                                                                                            className="course__action-content">
                                                                                            <span>{course.totalRating}</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="course__tutor-2">
                                                                            <a href="#">
                                                                                <img
                                                                                    src={course.mentor.imageUrl}
                                                                                    alt=""
                                                                                />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/*Newest*/}
                                <div
                                    className="tab-pane fade"
                                    id="nav-newest"
                                    role="tabpanel"
                                    aria-labelledby="nav-newest-tab"
                                >
                                    <div className="row">
                                        {loading2 ? (
                                            <div className="text-center">
                                                <Spinner animation="border"/>
                                            </div>
                                        ) : (
                                            allNewestCourses.data.map((course: any) => {
                                                return (
                                                    <div
                                                        key={course.id}
                                                        className="col-xxl-4 col-xl-4 col-lg-4 col-md-6"
                                                    >
                                                        <div className="course__item-2 transition-3 white-bg mb-30 fix">
                                                            <div
                                                                className="course__thumb-2 w-img fix course_thumb_height">
                                                                <Link href={`/course-details/${course.id}`}>
                                                                    <a>
                                                                        <img src={course.imageUrl} alt=""/>
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                            <div className="course__content-2">
                                                                <div
                                                                    className="course__top-2 d-flex align-items-center justify-content-between">
                                                                    <div className="course__tag-2">
                                                                        <Link href={`/course-details/${course.id}`}>
                                                                            <a>{course.subject.name}</a>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="course__price-2">
                                                                        <span>${course.price}</span>
                                                                    </div>
                                                                </div>
                                                                <h3 className="course__title-2">
                                                                    <Link href={`/course-details/${course.id}`}>
                                                                        <a>{course.name}</a>
                                                                    </Link>
                                                                </h3>
                                                                <div
                                                                    className="course__bottom-2 d-flex align-items-center justify-content-between">
                                                                    <div className="course__action">
                                                                        <ul>
                                                                            <li>
                                                                                <div
                                                                                    className="course__action-item d-flex align-items-center">
                                                                                    <div
                                                                                        className="course__action-icon mr-5">
                                              <span>
                                                <svg
                                                    width="10"
                                                    height="12"
                                                    viewBox="0 0 10 12"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                      d="M5.00004 5.5833C6.28592 5.5833 7.32833 4.5573 7.32833 3.29165C7.32833 2.02601 6.28592 1 5.00004 1C3.71416 1 2.67175 2.02601 2.67175 3.29165C2.67175 4.5573 3.71416 5.5833 5.00004 5.5833Z"
                                                      stroke="#5F6160"
                                                      strokeWidth="1.5"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                  />
                                                  <path
                                                      d="M9 11.0001C9 9.22632 7.20722 7.79175 5 7.79175C2.79278 7.79175 1 9.22632 1 11.0001"
                                                      stroke="#5F6160"
                                                      strokeWidth="1.5"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                  />
                                                </svg>
                                              </span>
                                                                                    </div>
                                                                                    <div
                                                                                        className="course__action-content">
                                                                                        <span>{"Số người"}</span>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div
                                                                                    className="course__action-item d-flex align-items-center">
                                                                                    <div
                                                                                        className="course__action-icon mr-5">
                                              <span>
                                                <svg
                                                    width="12"
                                                    height="12"
                                                    viewBox="0 0 12 12"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                      d="M6.86447 1.72209L7.74447 3.49644C7.86447 3.74343 8.18447 3.98035 8.45447 4.02572L10.0495 4.29288C11.0695 4.46426 11.3095 5.2103 10.5745 5.94625L9.33447 7.19636C9.12447 7.40807 9.00947 7.81637 9.07447 8.10873L9.42947 9.65625C9.70947 10.8812 9.06447 11.355 7.98947 10.7148L6.49447 9.82259C6.22447 9.66129 5.77947 9.66129 5.50447 9.82259L4.00947 10.7148C2.93947 11.355 2.28947 10.8761 2.56947 9.65625L2.92447 8.10873C2.98947 7.81637 2.87447 7.40807 2.66447 7.19636L1.42447 5.94625C0.694466 5.2103 0.929466 4.46426 1.94947 4.29288L3.54447 4.02572C3.80947 3.98035 4.12947 3.74343 4.24947 3.49644L5.12947 1.72209C5.60947 0.759304 6.38947 0.759304 6.86447 1.72209Z"
                                                      stroke="#5F6160"
                                                      strokeWidth="1.3"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                  />
                                                </svg>
                                              </span>
                                                                                    </div>
                                                                                    <div
                                                                                        className="course__action-content">
                                                                                        <span>{course.totalRating}</span>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="course__tutor-2">
                                                                        <a href="#">
                                                                            <img
                                                                                src={course.mentor.imageUrl}
                                                                                alt=""
                                                                            />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        )}
                                    </div>
                                </div>

                                {/*Most Popular*/}

                                <div
                                    className="tab-pane fade"
                                    id="nav-popular"
                                    role="tabpanel"
                                    aria-labelledby="nav-popular-tab"
                                >
                                    <div className="row">
                                        {loading3 ? (
                                            <div className="text-center">
                                                <Spinner animation="border"/>
                                            </div>
                                        ) : (
                                            allPopularCourses.data.map((course: any) => {
                                                return (
                                                    <div
                                                        key={course.id}
                                                        className="col-xxl-4 col-xl-4 col-lg-4 col-md-6"
                                                    >
                                                        <div className="course__item-2 transition-3 white-bg mb-30 fix">
                                                            <div
                                                                className="course__thumb-2 w-img fix course_thumb_height">
                                                                <Link href={`/course-details/${course.id}`}>
                                                                    <a>
                                                                        <img src={course.imageUrl} alt=""/>
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                            <div className="course__content-2">
                                                                <div
                                                                    className="course__top-2 d-flex align-items-center justify-content-between">
                                                                    <div className="course__tag-2">
                                                                        <Link href={`/course-details/${course.id}`}>
                                                                            <a>{course.subject.name}</a>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="course__price-2">
                                                                        <span>${course.price}</span>
                                                                    </div>
                                                                </div>
                                                                <h3 className="course__title-2">
                                                                    <Link href={`/course-details/${course.id}`}>
                                                                        <a>{course.name}</a>
                                                                    </Link>
                                                                </h3>
                                                                <div
                                                                    className="course__bottom-2 d-flex align-items-center justify-content-between">
                                                                    <div className="course__action">
                                                                        <ul>
                                                                            <li>
                                                                                <div
                                                                                    className="course__action-item d-flex align-items-center">
                                                                                    <div
                                                                                        className="course__action-icon mr-5">
                                              <span>
                                                <svg
                                                    width="10"
                                                    height="12"
                                                    viewBox="0 0 10 12"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                      d="M5.00004 5.5833C6.28592 5.5833 7.32833 4.5573 7.32833 3.29165C7.32833 2.02601 6.28592 1 5.00004 1C3.71416 1 2.67175 2.02601 2.67175 3.29165C2.67175 4.5573 3.71416 5.5833 5.00004 5.5833Z"
                                                      stroke="#5F6160"
                                                      strokeWidth="1.5"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                  />
                                                  <path
                                                      d="M9 11.0001C9 9.22632 7.20722 7.79175 5 7.79175C2.79278 7.79175 1 9.22632 1 11.0001"
                                                      stroke="#5F6160"
                                                      strokeWidth="1.5"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                  />
                                                </svg>
                                              </span>
                                                                                    </div>
                                                                                    <div
                                                                                        className="course__action-content">
                                                                                        <span>{"Số người"}</span>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div
                                                                                    className="course__action-item d-flex align-items-center">
                                                                                    <div
                                                                                        className="course__action-icon mr-5">
                                              <span>
                                                <svg
                                                    width="12"
                                                    height="12"
                                                    viewBox="0 0 12 12"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                      d="M6.86447 1.72209L7.74447 3.49644C7.86447 3.74343 8.18447 3.98035 8.45447 4.02572L10.0495 4.29288C11.0695 4.46426 11.3095 5.2103 10.5745 5.94625L9.33447 7.19636C9.12447 7.40807 9.00947 7.81637 9.07447 8.10873L9.42947 9.65625C9.70947 10.8812 9.06447 11.355 7.98947 10.7148L6.49447 9.82259C6.22447 9.66129 5.77947 9.66129 5.50447 9.82259L4.00947 10.7148C2.93947 11.355 2.28947 10.8761 2.56947 9.65625L2.92447 8.10873C2.98947 7.81637 2.87447 7.40807 2.66447 7.19636L1.42447 5.94625C0.694466 5.2103 0.929466 4.46426 1.94947 4.29288L3.54447 4.02572C3.80947 3.98035 4.12947 3.74343 4.24947 3.49644L5.12947 1.72209C5.60947 0.759304 6.38947 0.759304 6.86447 1.72209Z"
                                                      stroke="#5F6160"
                                                      strokeWidth="1.3"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                  />
                                                </svg>
                                              </span>
                                                                                    </div>
                                                                                    <div
                                                                                        className="course__action-content">
                                                                                        <span>{course.totalRating}</span>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="course__tutor-2">
                                                                        <a href="#">
                                                                            <img
                                                                                src={course.mentor.imageUrl}
                                                                                alt=""
                                                                            />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        )}
                                    </div>

                                </div>

                                {/*Most rated*/}
                                <div
                                    className="tab-pane fade"
                                    id="nav-most-rated"
                                    role="tabpanel"
                                    aria-labelledby="nav-most-rated-tab"
                                >
                                    <div className="row">
                                        {loading4 ? (
                                            <div className="text-center">
                                                <Spinner animation="border"/>
                                            </div>
                                        ) : (
                                            allMostRatedCourses.data.map((course: any) => {
                                                return (
                                                    <div
                                                        key={course.id}
                                                        className="col-xxl-4 col-xl-4 col-lg-4 col-md-6"
                                                    >
                                                        <div className="course__item-2 transition-3 white-bg mb-30 fix">
                                                            <div
                                                                className="course__thumb-2 w-img fix course_thumb_height">
                                                                <Link href={`/course-details/${course.id}`}>
                                                                    <a>
                                                                        <img src={course.imageUrl} alt=""/>
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                            <div className="course__content-2">
                                                                <div
                                                                    className="course__top-2 d-flex align-items-center justify-content-between">
                                                                    <div className="course__tag-2">
                                                                        <Link href={`/course-details/${course.id}`}>
                                                                            <a>{course.subject.name}</a>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="course__price-2">
                                                                        <span>${course.price}</span>
                                                                    </div>
                                                                </div>
                                                                <h3 className="course__title-2">
                                                                    <Link href={`/course-details/${course.id}`}>
                                                                        <a>{course.name}</a>
                                                                    </Link>
                                                                </h3>
                                                                <div
                                                                    className="course__bottom-2 d-flex align-items-center justify-content-between">
                                                                    <div className="course__action">
                                                                        <ul>
                                                                            <li>
                                                                                <div
                                                                                    className="course__action-item d-flex align-items-center">
                                                                                    <div
                                                                                        className="course__action-icon mr-5">
                                              <span>
                                                <svg
                                                    width="10"
                                                    height="12"
                                                    viewBox="0 0 10 12"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                      d="M5.00004 5.5833C6.28592 5.5833 7.32833 4.5573 7.32833 3.29165C7.32833 2.02601 6.28592 1 5.00004 1C3.71416 1 2.67175 2.02601 2.67175 3.29165C2.67175 4.5573 3.71416 5.5833 5.00004 5.5833Z"
                                                      stroke="#5F6160"
                                                      strokeWidth="1.5"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                  />
                                                  <path
                                                      d="M9 11.0001C9 9.22632 7.20722 7.79175 5 7.79175C2.79278 7.79175 1 9.22632 1 11.0001"
                                                      stroke="#5F6160"
                                                      strokeWidth="1.5"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                  />
                                                </svg>
                                              </span>
                                                                                    </div>
                                                                                    <div
                                                                                        className="course__action-content">
                                                                                        <span>{"Số người"}</span>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div
                                                                                    className="course__action-item d-flex align-items-center">
                                                                                    <div
                                                                                        className="course__action-icon mr-5">
                                              <span>
                                                <svg
                                                    width="12"
                                                    height="12"
                                                    viewBox="0 0 12 12"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                      d="M6.86447 1.72209L7.74447 3.49644C7.86447 3.74343 8.18447 3.98035 8.45447 4.02572L10.0495 4.29288C11.0695 4.46426 11.3095 5.2103 10.5745 5.94625L9.33447 7.19636C9.12447 7.40807 9.00947 7.81637 9.07447 8.10873L9.42947 9.65625C9.70947 10.8812 9.06447 11.355 7.98947 10.7148L6.49447 9.82259C6.22447 9.66129 5.77947 9.66129 5.50447 9.82259L4.00947 10.7148C2.93947 11.355 2.28947 10.8761 2.56947 9.65625L2.92447 8.10873C2.98947 7.81637 2.87447 7.40807 2.66447 7.19636L1.42447 5.94625C0.694466 5.2103 0.929466 4.46426 1.94947 4.29288L3.54447 4.02572C3.80947 3.98035 4.12947 3.74343 4.24947 3.49644L5.12947 1.72209C5.60947 0.759304 6.38947 0.759304 6.86447 1.72209Z"
                                                      stroke="#5F6160"
                                                      strokeWidth="1.3"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                  />
                                                </svg>
                                              </span>
                                                                                    </div>
                                                                                    <div
                                                                                        className="course__action-content">
                                                                                        <span>{course.totalRating}</span>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="course__tutor-2">
                                                                        <a href="#">
                                                                            <img
                                                                                src={course.mentor.imageUrl}
                                                                                alt=""
                                                                            />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        )}
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

export default CourseArea;