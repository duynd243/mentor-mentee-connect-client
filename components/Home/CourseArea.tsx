// import {useSelector} from 'react-redux';
import {useQuery} from "react-query";
import courseApi from "../../apis/course";
import CourseAreaTab from "../../components/Home/CourseAreaTab";

const CourseArea = () => {
    // all courses
    const {data: allCourses, isLoading: loading1} = useQuery(
        "allCourses",
        () => courseApi.getAllCourses({page: 1, size: 6}),
    );

    const {data: allNewestCourses, isLoading: loading2} = useQuery(
        "allNewestCourses",
        () => courseApi.getAllCourses({page: 1, size: 6, sort: "createDate desc"}),
    );

    const {data: allPopularCourses, isLoading: loading3} = useQuery(
        "allPopularCourses",
        () => courseApi.getAllCourses({page: 1, size: 6, sort: "currentNumberMentee desc"}),
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
                                <h3 className="section__title-2">Các Khoá Học tiêu Biểu</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xxl-12 course__menu">
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
                                            Tất Cả
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
                                            Mới Nhất
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
                                            Tham Gia Nhiều
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
                                            Đánh Giá Tốt
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
                                    <CourseAreaTab courses={allCourses} loading={loading1}/>
                                </div>

                                {/*Newest*/}
                                <div
                                    className="tab-pane fade"
                                    id="nav-newest"
                                    role="tabpanel"
                                    aria-labelledby="nav-newest-tab"
                                >
                                    <CourseAreaTab courses={allNewestCourses} loading={loading2}/>
                                </div>

                                {/*Most Popular*/}

                                <div
                                    className="tab-pane fade"
                                    id="nav-popular"
                                    role="tabpanel"
                                    aria-labelledby="nav-popular-tab"
                                >
                                    <CourseAreaTab courses={allPopularCourses} loading={loading3}/>

                                </div>

                                {/*Most rated*/}
                                <div
                                    className="tab-pane fade"
                                    id="nav-most-rated"
                                    role="tabpanel"
                                    aria-labelledby="nav-most-rated-tab"
                                >
                                    <CourseAreaTab courses={allMostRatedCourses} loading={loading4}/>
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