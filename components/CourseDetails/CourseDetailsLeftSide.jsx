import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Pagination} from "swiper";
// import {useSelector} from 'react-redux';
import DetailsTabItems from "./DetailsTabItems";
import Link from "next/link";
import RatingStars from "../common/RatingStars";
import {Spinner} from "react-bootstrap";
import moment from "moment";
import CourseCard from "../Courses/CourseCard";

SwiperCore.use([Pagination]);

const CourseDetailsLeftSide = ({courseData, courseSessions, relatedCourses, relatedCoursesLoading}) => {
    return (
        <>
            <div className="col-xxl-8 col-xl-8 col-lg-8">
                <div className="course__wrapper">
                    <div className="page__title-content mb-25">
                        <div className="breadcrumb__list breadcrumb__list-2 mb-10">
                                        <span>
                                            <Link href="/">Home</Link>
                                        </span>
                            <span className="dvdr">
                                            <i className="fa-regular fa-angle-right"></i>
                                        </span>
                            <span><Link href="/courses">Courses</Link></span>
                        </div>
                        <span className="breadcrumb__title-pre">
                                        {courseData?.subject.name}
                                    </span>
                        <h5 className="breadcrumb__title-2">{courseData?.name}</h5>
                    </div>

                    <div className="course__meta-2 d-sm-flex align-items-center mt-40 mb-60">
                        <div className="course__teacher-3 d-flex align-items-center mr-60">
                            <div className="course__teacher-thumb-3 mr-15">
                                <img src={courseData?.mentor.imageUrl} alt=""/>
                            </div>
                            <div className="course__teacher-info-3">
                                <h5>Mentor</h5>
                                <p>
                                    <a style={{
                                        color: '#566eda',
                                        fontWeight: '500',
                                        textDecoration: 'underline'
                                    }}
                                       href={`/mentor-details/${courseData.mentor.id}`}>{courseData?.mentor.fullName}</a>
                                </p>
                            </div>
                        </div>
                        <div className="course__update mr-50">
                            <h5>Create Date:</h5>
                            <p>{moment(new Date(courseData?.createDate)).format("DD/MM/YYYY")}</p>
                        </div>
                        <div className="course__update mr-50">
                            <h5>Start Date:</h5>
                            <p>{moment(new Date(courseData?.startDate)).format("DD/MM/YYYY")}</p>
                        </div>
                        <div className="course__rating-2">
                            <h5>Review:</h5>
                            <div className="course__rating-inner d-flex align-items-center">
                                <RatingStars rating={courseData?.totalRating || 0}/>
                                <p>{courseData?.totalRating || 0}</p>
                            </div>
                        </div>
                    </div>
                    <div className="course__img w-img mb-30">
                        <img src={courseData?.imageUrl} alt=""/>
                    </div>
                    <DetailsTabItems dynamicPage={true} courseData={courseData} courseSessions={courseSessions}/>

                    <div className="course__related">
                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="section__title-wrapper mb-40">
                                    <h2 className="section__title">Related Course</h2>
                                    <p>
                                        You dont have to struggle alone, you have got our
                                        assistance and help.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="course__slider swiper-container pb-60">
                                    {relatedCoursesLoading &&
                                        <div className="text-center">
                                            <Spinner style={{color: "#ace0fa"}} animation="grow"/>
                                        </div>
                                    }
                                    <Swiper
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        className="swiper-wrapper"
                                        pagination={{clickable: true}}
                                        autoplay={{delay: 6000}}
                                        breakpoints={{
                                            550: {
                                                slidesPerView: 1,
                                            },
                                            768: {
                                                slidesPerView: 2,
                                            },
                                            992: {
                                                slidesPerView: 2,
                                            },
                                        }}
                                    >
                                        {!relatedCoursesLoading && relatedCourses?.data?.filter(course => course?.id !== courseData?.id).map((course) => {
                                            return (
                                                <SwiperSlide key={course.id}>
                                                    <CourseCard course={course} courseSidebar={false}
                                                                swiperSlide={true}/>
                                                </SwiperSlide>
                                            );
                                        })}
                                    </Swiper>

                                    <div className="swiper-pagination"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseDetailsLeftSide;
