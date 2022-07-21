import CourseCurriculum from "./CourseCurriculum";
import constants from "../../data/constants";
import {useQuery} from "react-query";
import sessionApi from "../../apis/session";
import moment from "moment";
import {useEffect, useState} from "react";
import CheckAttendance from "../Courses/CheckAttendance";

const DetailsTabItems = ({userData, dynamicPage, courseData, courseSessions}) => {
    const [sessionsTodayOfCourse, setSessionsTodayOfCourse] = useState([]);
    const {data: sessionsToday} = useQuery(
        ["sessionsToday", courseSessions],
        () => sessionApi.getLoggedInMentorSessionsByDate(
            {
                page: courseSessions?.length,
                "in-date": moment().format("YYYY-MM-DD"),
            }
        )
    )

    useEffect(() => {
        if (sessionsToday) {
            setSessionsTodayOfCourse(sessionsToday.data.filter(session => session.courseId === courseData.id));
        }
    }, [sessionsToday]);

    console.log(sessionsTodayOfCourse);

    return (
        <>
            <div className="course__tab-2 mb-45">
                <ul className="nav nav-tabs" id="courseTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link active"
                            id="description-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#description"
                            type="button"
                            role="tab"
                            aria-controls="description"
                            aria-selected="true"
                        >
                            <i className="fa fa-medal"></i> <span>Mô tả</span>{" "}
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link "
                            id="curriculum-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#curriculum"
                            type="button"
                            role="tab"
                            aria-controls="curriculum"
                            aria-selected="false"
                        >
                            <i className="fa fa-book"></i>{" "}
                            <span>Tiết học</span>{" "}
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="review-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#review"
                            type="button"
                            role="tab"
                            aria-controls="review"
                            aria-selected="false"
                        >
                            {" "}
                            <i className="fa fa-star"></i> <span>Đánh giá</span>{" "}
                        </button>
                    </li>
                    {userData?.roleId === constants.roles.mentor.id
                        && courseData?.mentor.id === userData?.id
                        && courseData?.status === constants.courseStatus.waiting
                        &&
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="attendance-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#attendance"
                                type="button"
                                role="tab"
                                aria-controls="attendance"
                                aria-selected="false"
                            >
                                {" "}
                                <i className="fa fa-user"></i> <span>Điểm danh</span>{" "}
                            </button>
                        </li>
                    }
                </ul>
            </div>

            <div className="course__tab-content mb-95">
                <div className="tab-content" id="courseTabContent">
                    <div
                        className="tab-pane fade show active"
                        id="description"
                        role="tabpanel"
                        aria-labelledby="description-tab"
                    >
                        <div className="course__description">
                            <h3>Mô tả khoá học</h3>
                            <p>
                                {courseData?.description}
                            </p>
                        </div>
                    </div>

                    <div
                        className="tab-pane fade"
                        id="curriculum"
                        role="tabpanel"
                        aria-labelledby="curriculum-tab"
                    >
                        <CourseCurriculum courseSessions={courseSessions}/>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="review"
                        role="tabpanel"
                        aria-labelledby="review-tab"
                    >
                        <div className="course__review">
                            <h3>Reviews</h3>
                            <p>
                                Gosh william Im telling crikey burke I dont want no agro A bit
                                of hows your father bugger all mate off his nut that, what a
                                plonker cuppa owt to do
                            </p>

                            <div className="course__review-rating mb-50">
                                <div className="row g-0">
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                        <div className="course__review-rating-info grey-bg-2 text-center">
                                            <h5>5</h5>
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        {" "}
                                                        <i className="fa-solid fa-star"></i>{" "}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        {" "}
                                                        <i className="fa-solid fa-star"></i>{" "}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        {" "}
                                                        <i className="fa-solid fa-star"></i>{" "}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        {" "}
                                                        <i className="fa-solid fa-star"></i>{" "}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        {" "}
                                                        <i className="fa-solid fa-star"></i>{" "}
                                                    </a>
                                                </li>
                                            </ul>
                                            <p>4 Ratings</p>
                                        </div>
                                    </div>
                                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                        <div className="course__review-details grey-bg-2">
                                            <h5>Detailed Rating</h5>
                                            <div className="course__review-content mb-20">
                                                <div
                                                    className="course__review-item d-flex align-items-center justify-content-between">
                                                    <div className="course__review-text">
                                                        <span>5 stars</span>
                                                    </div>
                                                    <div className="course__review-progress">
                                                        <div
                                                            className="single-progress"
                                                            data-width="100%"
                                                        ></div>
                                                    </div>
                                                    <div className="course__review-percent">
                                                        <h5>100%</h5>
                                                    </div>
                                                </div>
                                                <div
                                                    className="course__review-item d-flex align-items-center justify-content-between">
                                                    <div className="course__review-text">
                                                        <span>4 stars</span>
                                                    </div>
                                                    <div className="course__review-progress">
                                                        <div
                                                            className="single-progress"
                                                            data-width="30%"
                                                        ></div>
                                                    </div>
                                                    <div className="course__review-percent">
                                                        <h5>30%</h5>
                                                    </div>
                                                </div>
                                                <div
                                                    className="course__review-item d-flex align-items-center justify-content-between">
                                                    <div className="course__review-text">
                                                        <span>3 stars</span>
                                                    </div>
                                                    <div className="course__review-progress">
                                                        <div
                                                            className="single-progress"
                                                            data-width="0%"
                                                        ></div>
                                                    </div>
                                                    <div className="course__review-percent">
                                                        <h5>0%</h5>
                                                    </div>
                                                </div>
                                                <div
                                                    className="course__review-item d-flex align-items-center justify-content-between">
                                                    <div className="course__review-text">
                                                        <span>2 stars</span>
                                                    </div>
                                                    <div className="course__review-progress">
                                                        <div
                                                            className="single-progress"
                                                            data-width="0%"
                                                        ></div>
                                                    </div>
                                                    <div className="course__review-percent">
                                                        <h5>0%</h5>
                                                    </div>
                                                </div>
                                                <div
                                                    className="course__review-item d-flex align-items-center justify-content-between">
                                                    <div className="course__review-text">
                                                        <span>1 stars</span>
                                                    </div>
                                                    <div className="course__review-progress">
                                                        <div
                                                            className="single-progress"
                                                            data-width="0%"
                                                        ></div>
                                                    </div>
                                                    <div className="course__review-percent">
                                                        <h5>0%</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="course__comment mb-75">
                                <h3 className="course__comment-title">2 Comments</h3>

                                <ul>
                                    <li>
                                        <div className="course__comment-box ">
                                            <div className="course__comment-thumb float-start">
                                                {dynamicPage ? (
                                                    <img
                                                        src={
                                                            "/" +
                                                            "assets/img/course/comment/course-comment-1.jpg"
                                                        }
                                                        alt=""
                                                    />
                                                ) : (
                                                    <img
                                                        src="assets/img/course/comment/course-comment-1.jpg"
                                                        alt=""
                                                    />
                                                )}
                                            </div>
                                            <div className="course__comment-content">
                                                <div className="course__comment-wrapper ml-70 fix">
                                                    <div className="course__comment-info float-start">
                                                        <h4>Eleanor Fant</h4>
                                                        <span>July 14, 2022</span>
                                                    </div>
                                                    <div className="course__comment-rating float-start float-sm-end">
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    {" "}
                                                                    <i className="fa-solid fa-star"></i>{" "}
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    {" "}
                                                                    <i className="fa-solid fa-star"></i>{" "}
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    {" "}
                                                                    <i className="fa-solid fa-star"></i>{" "}
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    {" "}
                                                                    <i className="fa-solid fa-star"></i>{" "}
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    {" "}
                                                                    <i className="fa-solid fa-star"></i>{" "}
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="course__comment-text ml-70">
                                                    <p>
                                                        So I said lurgy dropped a clanger Jeffrey bugger
                                                        cuppa gosh David blatant have it, standard A bit of
                                                        hows your father my lady absolutely.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="children">
                                        <div className="course__comment-box ">
                                            <div className="course__comment-thumb float-start">
                                                {dynamicPage ? (
                                                    <img
                                                        src={
                                                            "/" +
                                                            "assets/img/course/comment/course-comment-1.jpg"
                                                        }
                                                        alt=""
                                                    />
                                                ) : (
                                                    <img
                                                        src="assets/img/course/comment/course-comment-1.jpg"
                                                        alt=""
                                                    />
                                                )}
                                            </div>
                                            <div className="course__comment-content">
                                                <div className="course__comment-wrapper ml-70 fix">
                                                    <div className="course__comment-info float-start">
                                                        <h4>Eleanor Fant</h4>
                                                        <span>July 14, 2022</span>
                                                    </div>
                                                    <div className="course__comment-rating float-start float-sm-end">
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    {" "}
                                                                    <i className="fa-solid fa-star"></i>{" "}
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    {" "}
                                                                    <i className="fa-solid fa-star"></i>{" "}
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    {" "}
                                                                    <i className="fa-solid fa-star"></i>{" "}
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    {" "}
                                                                    <i className="fa-solid fa-star"></i>{" "}
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    {" "}
                                                                    <i className="fa-solid fa-star"></i>{" "}
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="course__comment-text ml-70">
                                                    <p>
                                                        So I said lurgy dropped a clanger Jeffrey bugger
                                                        cuppa gosh David blatant have it, standard A bit of
                                                        hows your father my lady absolutely.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="course__comment-box ">
                                            <div className="course__comment-thumb float-start">
                                                {dynamicPage ? (
                                                    <img
                                                        src={
                                                            "/" +
                                                            "assets/img/course/comment/course-comment-2.jpg"
                                                        }
                                                        alt=""
                                                    />
                                                ) : (
                                                    <img
                                                        src="assets/img/course/comment/course-comment-2.jpg"
                                                        alt=""
                                                    />
                                                )}
                                            </div>
                                            <div className="course__comment-content">
                                                <div className="course__comment-wrapper ml-70 fix">
                                                    <div className="course__comment-info float-start">
                                                        <h4>Shahnewaz Sakil</h4>
                                                        <span>July 17, 2022</span>
                                                    </div>
                                                    <div className="course__comment-rating float-start float-sm-end">
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    {" "}
                                                                    <i className="fa-solid fa-star"></i>{" "}
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    {" "}
                                                                    <i className="fa-solid fa-star"></i>{" "}
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    {" "}
                                                                    <i className="fa-solid fa-star"></i>{" "}
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    {" "}
                                                                    <i className="fa-solid fa-star"></i>{" "}
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    {" "}
                                                                    <i className="fa-solid fa-star"></i>{" "}
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="course__comment-text ml-70">
                                                    <p>
                                                        David blatant have it, standard A bit of hows your
                                                        father my lady absolutely.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="course__form">
                                <h3 className="course__form-title">Write a Review</h3>
                                <div className="course__form-inner">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-xxl-6">
                                                <div className="course__form-input">
                                                    <input type="text" placeholder="Your Name"/>
                                                </div>
                                            </div>
                                            <div className="col-xxl-6">
                                                <div className="course__form-input">
                                                    <input type="email" placeholder="Your Email"/>
                                                </div>
                                            </div>
                                            <div className="col-xxl-12">
                                                <div className="course__form-input">
                                                    <input type="text" placeholder="Review Title"/>
                                                </div>
                                            </div>
                                            <div className="col-xxl-12">
                                                <div className="course__form-input">
                                                    <div className="course__form-rating">
                                                        <span>Rating : </span>
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    {" "}
                                                                    <i className="fa-solid fa-star"></i>{" "}
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    {" "}
                                                                    <i className="fa-solid fa-star"></i>{" "}
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    {" "}
                                                                    <i className="fa-solid fa-star"></i>{" "}
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="no-rating">
                                                                    {" "}
                                                                    <i className="fa-solid fa-star"></i>{" "}
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="no-rating">
                                                                    {" "}
                                                                    <i className="fa-solid fa-star"></i>{" "}
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <textarea placeholder="Review Summary"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xxl-12">
                                                <div className="course__form-btn mt-10 mb-55">
                                                    <button type="submit" className="tp-btn">
                                                        Submit Review
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="attendance"
                        role="tabpanel"
                        aria-labelledby="attendance-tab"
                    >
                        <div className="course__member mb-45">
                            {(!sessionsTodayOfCourse || sessionsTodayOfCourse.length === 0)
                                ?
                                <div
                                    style={{
                                        "background": "#2c354b",
                                        "color": "white",
                                        "fontWeight": "500",
                                        "padding": "10px 20px",
                                        "fontSize": "16px",
                                        "borderRadius": "4px",
                                        "boxShadow": "rgb(99 99 99 / 20%) 0px 2px 8px 0px"
                                    }}
                                >{`Bạn không có tiết học nào thuộc khoá ${courseData?.name} trong ngày hôm nay.`}</div>
                                :
                                <CheckAttendance totalMentees={courseData?.currentNumberMentee} sessions={sessionsTodayOfCourse}/>}
                        </div>
                    </div>
                    <div className="course__share">
                        <h3>Share</h3>
                        <ul>
                            <li>
                                <a href="#" className="fb">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="tw">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="pin">
                                    <i className="fa-brands fa-pinterest-p"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailsTabItems;
