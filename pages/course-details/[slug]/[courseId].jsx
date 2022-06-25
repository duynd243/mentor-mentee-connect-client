import {useRouter} from "next/router";
import SwiperCore, {Pagination} from "swiper";
// import {useDispatch, useSelector} from 'react-redux';
// import {singleCourse} from '../../../redux/features/coursesSlice';
// import {addToCart} from '../../../redux/features/cartSlice';
import courseApi from "../../../apis/course";
import {useQuery} from "react-query";
import Head from "next/head";
import Header from "../../../components/Home/Header";
import Footer from "../../../components/common/Footer";
import LoadingSkeleton from "../../../components/common/LoadingSkeleton";
import CourseDetailsArea from "../../../components/CourseDetails/CourseDetailsArea";
import React, {useEffect} from "react";
import Link from "next/link";
import sessionApi from "../../../apis/session";

SwiperCore.use([Pagination]);

const CourseDetails = () => {

    // router
    const router = useRouter();

    // courseId from url
    const courseId = router.query.courseId;

    // courseData
    const {data: courseData, isLoading: courseDataLoading} = useQuery(
        ["courseData", courseId],
        () => courseApi.getCourseById(courseId),
        {
            refetchOnWindowFocus: false,
        }
    );

    // courseSessions
    const {data: courseSessions, isLoading: courseSessionsLoading} = useQuery(
        ["courseSessions", courseId],
        () => sessionApi.getSessions({"course-id": courseId}),
    );


    // Related Courses (have the same subjectId)
    const {
        data: relatedCourses,
        isLoading: relatedCoursesLoading
    } = useQuery(["relatedCourses", courseData?.subject.id], () => courseApi.getAllCourses({
        "subject-id": courseData?.subject.id,
        size: 6
    }),);
    return (
        <>
            <Head>
                <title>{courseData?.name || `Course Details`}</title>
            </Head>


            <Header/>
            {courseDataLoading &&
                <LoadingSkeleton/>
            }
            <section className="course__area pt-70 pb-25">
                <div className="container">
                    <div className="row">
                        {(!courseDataLoading && !courseData) &&
                            <div className="col-12" style={{margin: "0 auto"}}>
                                <div className="error__content text-center">
                                    <div className="error__thumb m-img">
                                        <img style={{maxWidth: "65vw"}}
                                             src={"/assets/img/lap-magnifying-glass.png"} alt=""/>
                                    </div>
                                    <div className="error__content">
                                        <h3 className="error__title" style={{fontSize: "40px", marginBottom: "35px"}}>We
                                            couldn't find any matches with this given link</h3>
                                        <div className="error__btn">
                                            <Link href="/courses">
                                                <a className="tp-btn">Back to Courses</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {(!courseDataLoading && courseData && courseSessions) &&
                            <>
                                <CourseDetailsArea courseData={courseData} courseSessions={courseSessions?.data}
                                                   relatedCourses={relatedCourses}
                                                   relatedCoursesLoading={relatedCoursesLoading}/>
                            </>
                        }
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default CourseDetails;
