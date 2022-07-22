import RatingStars from "../common/RatingStars";
import {Spinner} from "react-bootstrap";
import {useQuery} from "react-query";
import courseApi from "../../apis/course";
import React, {useState} from "react";
import CourseCard from "../Courses/CourseCard";
import Pagination from "../common/Pagination";
import constants from "../../data/constants";

const MentorDetailsArea = ({mentorData, userData}) => {
    // currentPage
    const [currentWaitingPage, setCurrentWaitingPage] = useState(1);
    const [currentPendingPage, setCurrentPendingPage] = useState(1);
    const [currentStartedPage, setCurrentStartedPage] = useState(1);
    const [currentFinishedPage, setCurrentFinishedPage] = useState(1);
    // coursePerPage
    const [coursePerPage] = useState(() => {
        if (userData?.id === mentorData?.id) {
            return 2;
        }
        return 4;
    });

    const paginateWaiting = (number) => {
        setCurrentWaitingPage(number);
    };
    const paginatePending = (number) => {
        setCurrentPendingPage(number);
    }
    const paginateStarted = (number) => {
        setCurrentStartedPage(number);
    }
    const paginateFinished = (number) => {
        setCurrentFinishedPage(number);
    }

    const {data: mentorWaitingCourses, isLoading: waitingCoursesLoading} = useQuery(
        ["mentorWaitingCourses", currentWaitingPage, coursePerPage],
        () =>
            courseApi.getAllCourses({
                page: currentWaitingPage,
                size: coursePerPage,
                status: constants.courseStatus.waiting,
                "mentor-id": mentorData.id,
            })
    );

    const {data: mentorPendingCourses, isLoading: pendingCoursesLoading} = useQuery(
        ["mentorPendingCourses", currentPendingPage, coursePerPage],
        () =>
            courseApi.getUserCreatedCourses({
                page: currentPendingPage,
                size: coursePerPage,
                status: constants.courseStatus.pending,
            })
    );

    const {data: mentorStartedCourses, isLoading: startedCoursesLoading} = useQuery(
        ["mentorStartedCourses", currentStartedPage, coursePerPage],
        () =>
            courseApi.getUserCreatedCourses({
                page: currentStartedPage,
                size: coursePerPage,
                status: constants.courseStatus.started,
            })
    );

    const {data: mentorFinishedCourses, isLoading: finishedCoursesLoading} = useQuery(
        ["mentorFinishedCourses", currentFinishedPage, coursePerPage],
        () =>
            courseApi.getUserCreatedCourses({
                page: currentFinishedPage,
                size: coursePerPage,
                status: constants.courseStatus.finished,
            })
    );


    return (
        <>
            <section className="teacher__area pt-120 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <div className="teacher__details-thumb p-relative mr-15 ml-15">
                                <img className="team-thumb" src={mentorData?.imageUrl} alt=""/>
                                <div className="teacher__details-shape">
                                    <img
                                        className="teacher-details-shape-1"
                                        src="/assets/img/team/details/shape/shape-1.png"
                                        alt=""
                                    />
                                    <img
                                        className="teacher-details-shape-2"
                                        src="/assets/img/team/details/shape/shape-2.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-8 col-xl-8 col-lg-8">
                            <div className="teacher__wrapper">
                                <div className="teacher__top row align-items-center">
                                    <div className="col-md-6 teacher__info">
                                        <h4>{mentorData?.fullName}</h4>
                                        <span>
                      <i
                          className="fa-solid fa-envelope"
                          style={{marginRight: "5px"}}
                      ></i>{" "}
                                            {mentorData?.email}
                    </span>
                                    </div>
                                    <div className="col-md-3 teacher__rating">
                                        <h5>Đánh giá:</h5>
                                        <div className="teacher__rating-inner d-flex align-items-center">
                                            <ul>
                                                <RatingStars rating={5}/>
                                            </ul>
                                            <p>5</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 teacher__social-2">
                                        <h4>Theo dõi {mentorData?.fullName}</h4>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-vimeo-v"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-linkedin-in"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="teacher__bio">
                                    <h3>Giới thiệu</h3>
                                    <p>{mentorData?.bio}</p>
                                </div>
                                <div className="teacher__courses pt-55">
                                    <div className="section__title-wrapper mb-30">
                                        <h2 className="section__title">
                                            {mentorData?.id !== userData?.id ? "Khoá học " : "Chưa đủ học viên "}
                                            {mentorWaitingCourses?.metadata?.total > 0 &&
                                                `(${mentorWaitingCourses?.metadata?.total})`}
                                        </h2>
                                    </div>
                                    <div className="teacher__course-wrapper">
                                        <div className="row">
                                            {/*Loading*/}
                                            {waitingCoursesLoading && (
                                                <div className="text-center">
                                                    <Spinner
                                                        style={{color: "#ace0fa"}}
                                                        animation="grow"
                                                    />
                                                </div>
                                            )}
                                            {/*No course found*/}
                                            {!waitingCoursesLoading &&
                                                (!mentorWaitingCourses ||
                                                    mentorWaitingCourses?.metadata?.total === 0) && (
                                                    <span style={{fontSize: "16px"}}>
                            {mentorData?.fullName} chưa có khoá học nào.
                          </span>
                                                )}
                                            {/*Has courses*/}
                                            {!waitingCoursesLoading &&
                                                mentorWaitingCourses &&
                                                mentorWaitingCourses?.metadata?.total > 0 && (
                                                    <>
                                                        {mentorWaitingCourses?.data.map((courseItem) => (
                                                            <CourseCard
                                                                key={courseItem?.id}
                                                                courseSidebar={true}
                                                                course={courseItem}
                                                            />
                                                        ))}
                                                        <div className="row">
                                                            <Pagination
                                                                coursePerPage={coursePerPage}
                                                                totalCourse={mentorWaitingCourses?.metadata.total}
                                                                paginate={paginateWaiting}
                                                                currentPage={currentWaitingPage}
                                                            />
                                                        </div>
                                                    </>
                                                )}
                                        </div>
                                    </div>
                                </div>
                                {
                                    mentorData?.id === userData?.id && (
                                        <>
                                            {/*// Đang đợi duyệt*/}
                                            <div className="teacher__courses pt-55">
                                                <div className="section__title-wrapper mb-30">
                                                    <h2 className="section__title">
                                                        {"Đang đợi duyệt "}
                                                        {mentorPendingCourses?.metadata?.total > 0 &&
                                                            `(${mentorPendingCourses?.metadata?.total})`}
                                                    </h2>
                                                </div>
                                                <div className="teacher__course-wrapper">
                                                    <div className="row">
                                                        {/*Loading*/}
                                                        {pendingCoursesLoading && (
                                                            <div className="text-center">
                                                                <Spinner
                                                                    style={{color: "#ace0fa"}}
                                                                    animation="grow"
                                                                />
                                                            </div>
                                                        )}
                                                        {/*No course found*/}
                                                        {!pendingCoursesLoading &&
                                                            (!mentorPendingCourses ||
                                                                mentorPendingCourses?.metadata?.total === 0) && (
                                                                <span style={{fontSize: "16px"}}>
                            {mentorData?.fullName} chưa có khoá học nào.
                          </span>
                                                            )}
                                                        {/*Has courses*/}
                                                        {!pendingCoursesLoading &&
                                                            mentorPendingCourses &&
                                                            mentorPendingCourses?.metadata?.total > 0 && (
                                                                <>
                                                                    {mentorPendingCourses?.data.map((courseItem) => (
                                                                        <CourseCard
                                                                            key={courseItem?.id}
                                                                            courseSidebar={true}
                                                                            course={courseItem}
                                                                        />
                                                                    ))}
                                                                    <div className="row">
                                                                        <Pagination
                                                                            coursePerPage={coursePerPage}
                                                                            totalCourse={mentorPendingCourses?.metadata.total}
                                                                            paginate={paginatePending}
                                                                            currentPage={currentPendingPage}
                                                                        />
                                                                    </div>
                                                                </>
                                                            )}
                                                    </div>
                                                </div>
                                            </div>

                                            {/*//Đang diễn ra*/}
                                            <div className="teacher__courses pt-55">
                                                <div className="section__title-wrapper mb-30">
                                                    <h2 className="section__title">
                                                        {"Đang diễn ra "}
                                                        {mentorStartedCourses?.metadata?.total > 0 &&
                                                            `(${mentorStartedCourses?.metadata?.total})`}
                                                    </h2>
                                                </div>
                                                <div className="teacher__course-wrapper">
                                                    <div className="row">
                                                        {/*Loading*/}
                                                        {startedCoursesLoading && (
                                                            <div className="text-center">
                                                                <Spinner
                                                                    style={{color: "#ace0fa"}}
                                                                    animation="grow"
                                                                />
                                                            </div>
                                                        )}
                                                        {/*No course found*/}
                                                        {!mentorStartedCourses &&
                                                            (!mentorStartedCourses ||
                                                                mentorStartedCourses?.metadata?.total === 0) && (
                                                                <span style={{fontSize: "16px"}}>
                            {mentorData?.fullName} chưa có khoá học nào.
                          </span>
                                                            )}
                                                        {/*Has courses*/}
                                                        {!startedCoursesLoading &&
                                                            mentorStartedCourses &&
                                                            mentorStartedCourses?.metadata?.total > 0 && (
                                                                <>
                                                                    {mentorStartedCourses?.data.map((courseItem) => (
                                                                        <CourseCard
                                                                            key={courseItem?.id}
                                                                            courseSidebar={true}
                                                                            course={courseItem}
                                                                        />
                                                                    ))}
                                                                    <div className="row">
                                                                        <Pagination
                                                                            coursePerPage={coursePerPage}
                                                                            totalCourse={mentorStartedCourses?.metadata.total}
                                                                            paginate={paginateStarted}
                                                                            currentPage={currentStartedPage}
                                                                        />
                                                                    </div>
                                                                </>
                                                            )}
                                                    </div>
                                                </div>
                                            </div>

                                            {/*Đã kết thúc*/}
                                            <div className="teacher__courses pt-55">
                                                <div className="section__title-wrapper mb-30">
                                                    <h2 className="section__title">
                                                        {"Đã kết thúc "}
                                                        {mentorFinishedCourses?.metadata?.total > 0 &&
                                                            `(${mentorFinishedCourses?.metadata?.total})`}
                                                    </h2>
                                                </div>
                                                <div className="teacher__course-wrapper">
                                                    <div className="row">
                                                        {/*Loading*/}
                                                        {finishedCoursesLoading && (
                                                            <div className="text-center">
                                                                <Spinner
                                                                    style={{color: "#ace0fa"}}
                                                                    animation="grow"
                                                                />
                                                            </div>
                                                        )}
                                                        {/*No course found*/}
                                                        {!mentorFinishedCourses &&
                                                            (!mentorFinishedCourses ||
                                                                mentorFinishedCourses?.metadata?.total === 0) && (
                                                                <span style={{fontSize: "16px"}}>
                            {mentorData?.fullName} chưa có khoá học nào.
                          </span>
                                                            )}
                                                        {/*Has courses*/}
                                                        {!finishedCoursesLoading &&
                                                            mentorFinishedCourses &&
                                                            mentorFinishedCourses?.metadata?.total > 0 && (
                                                                <>
                                                                    {mentorFinishedCourses?.data.map((courseItem) => (
                                                                        <CourseCard
                                                                            key={courseItem?.id}
                                                                            courseSidebar={true}
                                                                            course={courseItem}
                                                                        />
                                                                    ))}
                                                                    <div className="row">
                                                                        <Pagination
                                                                            coursePerPage={coursePerPage}
                                                                            totalCourse={mentorFinishedCourses?.metadata.total}
                                                                            paginate={paginateFinished}
                                                                            currentPage={currentFinishedPage}
                                                                        />
                                                                    </div>
                                                                </>
                                                            )}
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MentorDetailsArea;
