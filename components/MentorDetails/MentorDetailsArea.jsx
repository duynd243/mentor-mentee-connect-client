import RatingStars from "../common/RatingStars";
import { Spinner } from "react-bootstrap";
import { useQuery } from "react-query";
import courseApi from "../../apis/course";
import React, { useState } from "react";
import CourseCard from "../Courses/CourseCard";
import Pagination from "../common/Pagination";

const MentorDetailsArea = ({ mentorData }) => {
  // currentPage
  const [currentPage, setCurrentPage] = useState(1);
  // coursePerPage
  const [coursePerPage, setCoursePerPage] = useState(4);

  const { data: mentorCourses, isLoading: coursesLoading } = useQuery(
    ["mentorCourses", currentPage, coursePerPage],
    () =>
      courseApi.getAllCourses({
        page: currentPage,
        size: coursePerPage,
        "mentor-id": mentorData?.id,
      })
  );

  const { data: drafts, isLoading: draftsLoading } = useQuery(
    ["draftCourses", currentPage, coursePerPage],
    () =>
      courseApi.getAllCourses({
        page: currentPage,
        size: coursePerPage,
        "mentor-id": mentorData?.id,
        status: 1,
      })
  );

  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <>
      <section className="teacher__area pt-120 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="teacher__details-thumb p-relative mr-15 ml-15">
                <img className="team-thumb" src={mentorData?.imageUrl} alt="" />
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
                        style={{ marginRight: "5px" }}
                      ></i>{" "}
                      {mentorData?.email}
                    </span>
                  </div>
                  <div className="col-md-3 teacher__rating">
                    <h5>Review:</h5>
                    <div className="teacher__rating-inner d-flex align-items-center">
                      <ul>
                        <RatingStars rating={5} />
                      </ul>
                      <p>5</p>
                    </div>
                  </div>
                  <div className="col-md-3 teacher__social-2">
                    <h4>Follow {mentorData?.fullName}</h4>
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
                  <h3>Short Bio</h3>
                  <p>{mentorData?.bio}</p>
                </div>
                <div className="teacher__courses pt-55">
                  <div className="section__title-wrapper mb-30">
                    <h2 className="section__title">
                      Courses{" "}
                      {mentorCourses?.metadata?.total > 0 &&
                        `(${mentorCourses?.metadata?.total})`}
                    </h2>
                  </div>
                  <div className="teacher__course-wrapper">
                    <div className="row">
                      {/*Loading*/}
                      {coursesLoading && (
                        <div className="text-center">
                          <Spinner
                            style={{ color: "#ace0fa" }}
                            animation="grow"
                          />
                        </div>
                      )}
                      {/*No course found*/}
                      {!coursesLoading &&
                        (!mentorCourses ||
                          mentorCourses?.metadata?.total === 0) && (
                          <span style={{ fontSize: "16px" }}>
                            {mentorData?.fullName} doesn't have any courses.
                          </span>
                        )}
                      {/*Has courses*/}
                      {!coursesLoading &&
                        mentorCourses &&
                        mentorCourses?.metadata?.total > 0 && (
                          <>
                            {mentorCourses?.data.map((courseItem) => (
                              <CourseCard
                                key={courseItem?.id}
                                courseSidebar={true}
                                course={courseItem}
                              />
                            ))}
                            <div className="row">
                              <Pagination
                                coursePerPage={coursePerPage}
                                totalCourse={mentorCourses?.metadata.total}
                                paginate={paginate}
                                currentPage={currentPage}
                              />
                            </div>
                          </>
                        )}
                    </div>
                  </div>
                </div>
                <div className="teacher__courses pt-55">
                  <div className="section__title-wrapper mb-30">
                    <h2 className="section__title">
                      Drafts{" "}
                      {drafts?.metadata?.total > 0 &&
                        `(${drafts?.metadata?.total})`}
                    </h2>
                  </div>
                  <div className="teacher__course-wrapper">
                    <div className="row">
                      {/*Loading*/}
                      {draftsLoading && (
                        <div className="text-center">
                          <Spinner
                            style={{ color: "#ace0fa" }}
                            animation="grow"
                          />
                        </div>
                      )}
                      {/*No course found*/}
                      {!draftsLoading &&
                        (!drafts || drafts?.metadata?.total === 0) && (
                          <span style={{ fontSize: "16px" }}>
                            {mentorData?.fullName} doesn't have any drafts.
                          </span>
                        )}
                      {/*Has courses*/}
                      {!draftsLoading && drafts && drafts?.metadata?.total > 0 && (
                        <>
                          {drafts?.data.map((courseItem) => (
                            <CourseCard
                              key={courseItem?.id}
                              courseSidebar={true}
                              course={courseItem}
                            />
                          ))}
                          <div className="row">
                            <Pagination
                              coursePerPage={coursePerPage}
                              totalCourse={drafts?.metadata.total}
                              paginate={paginate}
                              currentPage={currentPage}
                            />
                          </div>
                        </>
                      )}
                    </div>
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

export default MentorDetailsArea;
