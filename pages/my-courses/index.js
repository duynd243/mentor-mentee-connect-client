import React, {useState} from "react";
import courseApi from "../../apis/course";
import {useQuery} from "react-query";
import Head from "next/head";
import Header from "../../components/Home/Header";
import BreadCrumb from "../../components/common/BreadCrumb";
import LoadingSkeleton from "../../components/common/LoadingSkeleton";
import CourseCard from "../../components/Courses/CourseCard";
import CourseCardList from "../../components/Courses/CourseCardList";
import Pagination from "../../components/common/Pagination";
import Footer from "../../components/common/Footer";

const MyCourses = () =>{

    // currentPage
    const [currentPage, setCurrentPage] = useState(1);
    // coursePerPage
    const [coursePerPage] = useState(6);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    const {data: courses, isLoading: coursesLoading} = useQuery(
        "courses",
        () => courseApi.getUserCreatedCourses({
            page: currentPage,
            size: coursePerPage
        }),
    );

    return (
        <>
            <Head>
                <title>My Courses</title>
            </Head>

            <Header/>
            <BreadCrumb title="Khoá Học Của Tôi" subtitle="Search Course"/>
            {coursesLoading &&
                <LoadingSkeleton/>
            }
            <section className="course__area pt-115 pb-90 grey-bg-3">
                <div className="container">
                    <div className="row">

                        {!coursesLoading && (!courses || courses?.metadata.total === 0) &&
                            <div className="col-12" style={{margin: "0 auto"}}>
                                <div className="error__content text-center">
                                    <div className="error__thumb m-img">
                                        <img style={{maxWidth: "65vw"}}
                                             src={"../assets/img/lap-magnifying-glass.png"} alt=""/>
                                    </div>
                                    <div className="error__content">
                                        <h3 className="error__title" style={{fontSize: "40px", marginBottom: "35px"}}>
                                            You don't have any courses yet.
                                        </h3>
                                        <p style={{fontSize: "20px"}}>
                                            Please try searching with another keyword.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        }
                        {!coursesLoading && courses && courses?.metadata.total > 0 && <>
                            <div className="course__tab-inner white-bg mb-50">
                                <div className="row align-items-center">
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <div className="course__tab-wrapper d-flex align-items-center">
                                            <div className="course__tab-btn">
                                                <ul
                                                    className="nav nav-tabs"
                                                    id="courseTab"
                                                    role="tablist"
                                                >
                                                    <li className="nav-item" role="presentation">
                                                        <button
                                                            className="nav-link active"
                                                            id="grid-tab"
                                                            data-bs-toggle="tab"
                                                            data-bs-target="#grid"
                                                            type="button"
                                                            role="tab"
                                                            aria-controls="grid"
                                                            aria-selected="true"
                                                        >
                                                            <svg className="grid" viewBox="0 0 24 24">
                                                                <rect
                                                                    x="3"
                                                                    y="3"
                                                                    className="st0"
                                                                    width="7"
                                                                    height="7"
                                                                />
                                                                <rect
                                                                    x="14"
                                                                    y="3"
                                                                    className="st0"
                                                                    width="7"
                                                                    height="7"
                                                                />
                                                                <rect
                                                                    x="14"
                                                                    y="14"
                                                                    className="st0"
                                                                    width="7"
                                                                    height="7"
                                                                />
                                                                <rect
                                                                    x="3"
                                                                    y="14"
                                                                    className="st0"
                                                                    width="7"
                                                                    height="7"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button
                                                            className="nav-link list"
                                                            id="list-tab"
                                                            data-bs-toggle="tab"
                                                            data-bs-target="#list"
                                                            type="button"
                                                            role="tab"
                                                            aria-controls="list"
                                                            aria-selected="false"
                                                        >
                                                            <svg className="list" viewBox="0 0 512 512">
                                                                <g id="Layer_2_1_">
                                                                    <path
                                                                        className="st0"
                                                                        d="M448,69H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,69,448,69z"
                                                                    />
                                                                    <circle
                                                                        className="st0"
                                                                        cx="64"
                                                                        cy="100"
                                                                        r="31"
                                                                    />
                                                                    <path
                                                                        className="st0"
                                                                        d="M448,225H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,225,448,225z"
                                                                    />
                                                                    <circle
                                                                        className="st0"
                                                                        cx="64"
                                                                        cy="256"
                                                                        r="31"
                                                                    />
                                                                    <path
                                                                        className="st0"
                                                                        d="M448,381H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,381,448,381z"
                                                                    />
                                                                    <circle
                                                                        className="st0"
                                                                        cx="64"
                                                                        cy="412"
                                                                        r="31"
                                                                    />
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
                                            {!coursesLoading && courses && courses?.data.length > 0 &&
                                                <h4 style={{fontWeight: 400}}><span></span></h4>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xxl-12">
                                    <div className="course__tab-conent">
                                        <div className="tab-content" id="courseTabContent">
                                            <div
                                                className="tab-pane fade show active"
                                                id="grid"
                                                role="tabpanel"
                                                aria-labelledby="grid-tab"
                                            >
                                                <div className="row">
                                                    {/*Course Cards (Grid)*/}
                                                    {courses?.data.map((courseItem) => <CourseCard
                                                        key={courseItem?.id} course={courseItem}/>)}
                                                </div>
                                            </div>

                                            <div
                                                className="tab-pane fade"
                                                id="list"
                                                role="tabpanel"
                                                aria-labelledby="list-tab"
                                            >
                                                <div className="row">
                                                    <div className="col-xxl-12">
                                                        {/*Course Cards (List)*/}
                                                        {(courses?.data.map((courseItem) => <CourseCardList
                                                            key={courseItem?.id} course={courseItem}/>))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Pagination*/}
                            <div className="row">
                                <Pagination
                                    coursePerPage={coursePerPage}
                                    totalCourse={courses?.metadata.total}
                                    paginate={paginate}
                                    currentPage={currentPage}
                                />
                            </div>
                        </>}
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default MyCourses;