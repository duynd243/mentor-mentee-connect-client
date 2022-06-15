import {useRouter} from "next/router";
import SwiperCore, {Pagination} from "swiper";
// import {useDispatch, useSelector} from 'react-redux';
// import {singleCourse} from '../../../redux/features/coursesSlice';
// import {addToCart} from '../../../redux/features/cartSlice';
import courseApi from "../../apis/course";
import {useQuery} from "react-query";
import Head from "next/head";
import Header from "../../components/Home/Header";
import Footer from "../../components/common/Footer";
import CourseDetailsLeftSide from "../../components/CourseDetails/CourseDetailsLeftSide";
import CourseDetailsRightSide from "../../components/CourseDetails/CourseDetailsRightSide";

SwiperCore.use([Pagination]);

const CourseDetails = () => {

    // router
    const router = useRouter();

    // courseId from url
    const courseId = router.query.courseId;

    // courseData
    const {data: courseData, isLoading: loading} = useQuery(
        ["courseData", courseId],
        () => courseApi.getCourseById(courseId),
        {
            refetchOnWindowFocus: false,
        }
    );

    // Related Courses (have the same subjectId)
    const {data: relatedCourses} = useQuery("relatedCourses", () => courseApi.getAllCourses({
        "subject-id": courseData?.subject.id,
        size: 6
    }),);
    return (
        <>
            <Head>
                <title>{courseData?.name || `Course Details`}</title>
            </Head>


            <Header/>
            {loading &&
                <div id="loading">
                    <div id="loading-center">
                        <div id="loading-center-absolute">
                            <svg id="loader">
                                <path
                                    id="corners"
                                    d="m 0 12.5 l 0 -12.5 l 50 0 l 0 50 l -50 0 l 0 -37.5"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            }
            <section className="course__area pt-70 pb-25">
                <div className="container">
                    <div className="row">
                        {(!loading && !courseData) && <>
                            <img
                                src="../assets/img/magnifying-glass.webp"
                                alt=""
                                style={{
                                    width: "320px",
                                    maxWidth: "70%",
                                    margin: "0 auto",
                                }}
                            />
                            <h2
                                style={{
                                    textAlign: "center",
                                    fontWeight: 400,
                                    opacity: 0.75,
                                }}
                            >We couldn't find any matches with this given link</h2>
                            <div
                                style={{
                                    fontSize: "1.2rem",
                                    textAlign: "center",
                                    fontWeight: 400,
                                    opacity: 0.75,
                                    marginBottom: "45px",
                                }}
                            >
                                Please try searching with another keyword
                            </div>
                        </>}
                        {(!loading && courseData) &&
                            <>
                                <CourseDetailsLeftSide courseData={courseData} relatedCourses={relatedCourses}/>
                                <CourseDetailsRightSide courseData={courseData} relatedCourses={relatedCourses}/>
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
