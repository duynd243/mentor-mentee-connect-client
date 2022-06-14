import {useRouter} from "next/router";
import SwiperCore, {Pagination} from "swiper";
// import {useDispatch, useSelector} from 'react-redux';
import {useState} from "react";
// import {singleCourse} from '../../../redux/features/coursesSlice';
import useAuth from "../../hooks/useAuth";
// import {addToCart} from '../../../redux/features/cartSlice';
import courseApi from "../../apis/course";
import {useQuery} from "react-query";
import Head from "next/head";
import Header from "../../components/Home/Header";
import {Modal} from "react-responsive-modal";
import ReactPlayer from "react-player";
import Footer from "../../components/common/Footer";
import Link from "next/link";
import DetailsTabItems from "../../components/CourseDetails/DetailsTabItems";
import {Swiper, SwiperSlide} from "swiper/react";
import SidebarRelatedCourse from "../../components/CourseDetails/SidebarRelatedCourse";

SwiperCore.use([Pagination]);

const CourseDetails = () => {

    // router
    const router = useRouter();

    // courseId from url
    const courseId = router.query.courseId;

    //sidebar show
    const [show, setShow] = useState(false);
    //sidebar handleClose
    const handleClose = () => setShow(false);
    //sidebar handleShow
    const handleShow = () => setShow(true);
    // paymentInformation
    const [paymentInformation, setPaymentInformation] = useState({});

    // courseData
    const {data: courseData, isLoading: loading} = useQuery(
        ["courseData", courseId],
        () => courseApi.getCourseById(courseId),
    );

    // Related Courses (have the same subjectId)
    const {data: relatedCourses} = useQuery("relatedCourses", () => courseApi.getAllCourses({
        "subject-id": courseData?.subject.id,
        size: 6
    }),);
    // user
    const {user} = useAuth();
    // video popup
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    // useEffect(() => {
    //     if (!loading && !courseData) {
    //         Swal.fire({
    //             icon: 'error',
    //             title: "Error",
    //             html: "We couldn't find any course with this given link",
    //             allowOutsideClick: false,
    //             confirmButtonText: "Back to home",
    //             confirmButtonColor: "#3D6CE7",
    //         }).then(() => {
    //             router.push("/");
    //         });
    //     }
    // }, [loading, courseData, router]);


    return (
        <>
            <Head>
                <title>{courseData?.name || `Course Details`}</title>
            </Head>
            <Modal
                open={open}
                onClose={onCloseModal}
                styles={{
                    modal: {
                        maxWidth: "unset",
                        width: "70%",
                        padding: "unset",
                    },
                    overlay: {
                        background: "rgba(0, 0, 0, 0.5)",
                    },
                    closeButton: {
                        background: "yellow",
                    },
                }}
                center
            >
                <ReactPlayer
                    url="https://youtu.be/XBoZPCgdnm8"
                    width="100%"
                    height="calc(100vh - 100px)"
                />
            </Modal>

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
                            <img src="assets/img/favicon.png" alt=""/>
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
                                                <span>Courses</span>
                                            </div>
                                            <span className="breadcrumb__title-pre">
                                        {courseData?.subject.name}
                                    </span>
                                            <h5 className="breadcrumb__title-2">{courseData?.name}</h5>
                                        </div>

                                        <div className="course__meta-2 d-sm-flex align-items-center mb-30">
                                            <div className="course__teacher-3 d-flex align-items-center mr-70 mb-30">
                                                <div className="course__teacher-thumb-3 mr-15">
                                                    <img src={courseData?.mentor.imageUrl} alt=""/>
                                                </div>
                                                <div className="course__teacher-info-3">
                                                    <h5>Mentor</h5>
                                                    <p>
                                                        <a href="#">{courseData?.mentor.fullName}</a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="course__update mr-80 mb-30">
                                                <h5>Last Update:</h5>
                                                <p>{new Date(courseData?.updateDate).toLocaleDateString()}</p>
                                            </div>
                                            <div className="course__rating-2 mb-30">
                                                <h5>Review:</h5>
                                                <div className="course__rating-inner d-flex align-items-center">
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-star"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-star"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-star"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-star"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa-solid fa-star"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <p>{courseData?.totalRating}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="course__img w-img mb-30">
                                            <img src={courseData?.imageUrl} alt=""/>
                                        </div>
                                        <DetailsTabItems dynamicPage={true} courseData={courseData}/>

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
                                                            {relatedCourses?.data?.filter(course => course?.id !== courseData?.id).map((course) => {
                                                                return (
                                                                    <SwiperSlide key={course.id}>
                                                                        <div
                                                                            className="course__item-2 swiper-slide transition-3 white-bg mb-30 fix">
                                                                            <div
                                                                                className="course__thumb-2 w-img fix course_thumb_height">
                                                                                <Link
                                                                                    href={`/course-details/${course.id}`}>
                                                                                    <a>
                                                                                        <img src={course.imageUrl}
                                                                                             alt=""/>
                                                                                    </a>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="course__content-2">
                                                                                <div
                                                                                    className="course__top-2 d-flex align-items-center justify-content-between">
                                                                                    <div className="course__tag-2">
                                                                                        <Link
                                                                                            href={`/course-details/${course.id}`}>
                                                                                            <a>{course.subject.name}</a>
                                                                                        </Link>
                                                                                    </div>
                                                                                    <div className="course__price-2">
                                                                                        <span>${course.price}</span>
                                                                                    </div>
                                                                                </div>
                                                                                <h3 className="course__title-2">
                                                                                    <Link
                                                                                        href={`/course-details/${course.id}`}>
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
                                                                                                <span>
                                                                                                    {`Số người`}
                                                                                                </span>
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

                                                                                            <li>
                                                                                                <div
                                                                                                    className="course__action-item d-flex align-items-center">
                                                                                                    <div
                                                                                                        className="course__action-icon mr-5">
                                      <span>
                                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M1 12.2V4.49999C1 1.7 1.70588 1 4.52941 1H9.47059C12.2941 1 13 1.7 13 4.49999V11.5C13 11.598 13 11.696 12.9929 11.794"
                                          stroke="#49535B" strokeLinecap="round" strokeLinejoin="round"/>
                                      <path
                                          d="M3.01176 10.0999H13V12.5498C13 13.9008 11.8918 14.9998 10.5294 14.9998H3.47059C2.10824 14.9998 1 13.9008 1 12.5498V12.0948C1 10.9959 1.90353 10.0999 3.01176 10.0999Z"
                                          stroke="#49535B" strokeLinecap="round" strokeLinejoin="round"/>
                                      <path d="M4.17647 4.5H9.82353" stroke="#49535B" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                      <path d="M4.17647 6.94995H7.70589" stroke="#49535B" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                    </svg>
                                      </span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="course__action-content">
                                                                                                        <span>{`Lessons`}</span>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                    <div className="course__tutor-2">
                                                                                        <a href="#">
                                                                                            <img
                                                                                                src={course.mentor.imageUrl}
                                                                                                alt=""/>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
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
                                <div className="col-xxl-4 col-xl-4 col-lg-4">
                                    <div className="course__sidebar pl-70 p-relative">
                                        <div className="course__shape">
                                            <img
                                                className="course-dot"
                                                src={"/" + "assets/img/course/course-dot.png"}
                                                alt=""
                                            />
                                        </div>
                                        <div className="course__sidebar-widget-2 white-bg mb-20">
                                            <div className="course__video">
                                                <div className="course__video-thumb w-img mb-25">
                                                    <img
                                                        src={"/" + "assets/img/course/video/course-video.jpg"}
                                                        alt=""
                                                    />
                                                    <div className="course__video-play">
                                                        <button
                                                            onClick={onOpenModal}
                                                            className="play-btn popup-video"
                                                        >
                                                            <i className="fas fa-play"></i>{" "}
                                                        </button>
                                                    </div>
                                                </div>
                                                <div
                                                    className="course__video-meta mb-25 d-flex align-items-center justify-content-between">
                                                    <div className="course__video-price">
                                                        <h5>${courseData?.price}</h5>
                                                    </div>
                                                    <div className="course__video-discount">
                                                        <span>On Sale</span>
                                                    </div>
                                                </div>
                                                <div className="course__video-content mb-35">
                                                    <ul>
                                                        <li className="d-flex align-items-center">
                                                            <div className="course__video-icon">
                                                                <svg
                                                                    version="1.1"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    x="0px"
                                                                    y="0px"
                                                                    viewBox="0 0 16 16"
                                                                    style={{enableBackground: "new 0 0 16 16"}}
                                                                    xmlSpace="preserve"
                                                                >
                                                                    <path
                                                                        className="st0"
                                                                        d="M2,6l6-4.7L14,6v7.3c0,0.7-0.6,1.3-1.3,1.3H3.3c-0.7,0-1.3-0.6-1.3-1.3V6z"
                                                                    />
                                                                    <polyline
                                                                        className="st0"
                                                                        points="6,14.7 6,8 10,8 10,14.7 "
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <div className="course__video-info">
                                                                <h5>
                                                                    <span>Mentor :</span>
                                                                    {courseData?.mentor.fullName}
                                                                </h5>
                                                            </div>
                                                        </li>
                                                        <li className="d-flex align-items-center">
                                                            <div className="course__video-icon">
                                                                <svg
                                                                    version="1.1"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    x="0px"
                                                                    y="0px"
                                                                    viewBox="0 0 24 24"
                                                                    style={{enableBackground: "new 0 0 16 16"}}
                                                                    xmlSpace="preserve"
                                                                >
                                                                    <path
                                                                        className="st0"
                                                                        d="M4,19.5C4,18.1,5.1,17,6.5,17H20"
                                                                    />
                                                                    <path
                                                                        className="st0"
                                                                        d="M6.5,2H20v20H6.5C5.1,22,4,20.9,4,19.5v-15C4,3.1,5.1,2,6.5,2z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <div className="course__video-info">
                                                                <h5>
                                                                    <span>Lectures :</span>
                                                                    {`Số bài`}
                                                                </h5>
                                                            </div>
                                                        </li>
                                                        <li className="d-flex align-items-center">
                                                            <div className="course__video-icon">
                                                                <svg
                                                                    version="1.1"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    x="0px"
                                                                    y="0px"
                                                                    viewBox="0 0 16 16"
                                                                    style={{enableBackground: "new 0 0 16 16"}}
                                                                    xmlSpace="preserve"
                                                                >
                                                                    <circle className="st0" cx="8" cy="8" r="6.7"/>
                                                                    <polyline
                                                                        className="st0"
                                                                        points="8,4 8,8 10.7,9.3 "
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <div className="course__video-info">
                                                                <h5>
                                                                    <span>Duration :</span>
                                                                    {courseData?.duration}
                                                                </h5>
                                                            </div>
                                                        </li>
                                                        <li className="d-flex align-items-center">
                                                            <div className="course__video-icon">
                                                                <svg>
                                                                    <path
                                                                        className="st0"
                                                                        d="M13.3,14v-1.3c0-1.5-1.2-2.7-2.7-2.7H5.3c-1.5,0-2.7,1.2-2.7,2.7V14"
                                                                    />
                                                                    <circle className="st0" cx="8" cy="4.7" r="2.7"/>
                                                                </svg>
                                                            </div>
                                                            <div className="course__video-info">
                                                                <h5>
                                                                    <span>Enrolled :</span>
                                                                    {courseData?.enrolled?.substring(0, 3)} students
                                                                </h5>
                                                            </div>
                                                        </li>
                                                        <li className="d-flex align-items-center">
                                                            <div className="course__video-icon">
                                                                <svg>
                                                                    <circle className="st0" cx="8" cy="8" r="6.7"/>
                                                                    <line
                                                                        className="st0"
                                                                        x1="1.3"
                                                                        y1="8"
                                                                        x2="14.7"
                                                                        y2="8"
                                                                    />
                                                                    <path
                                                                        className="st0"
                                                                        d="M8,1.3c1.7,1.8,2.6,4.2,2.7,6.7c-0.1,2.5-1,4.8-2.7,6.7C6.3,12.8,5.4,10.5,5.3,8C5.4,5.5,6.3,3.2,8,1.3z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <div className="course__video-info">
                                                                <h5>
                                                                    <span>Language :</span>English
                                                                </h5>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="course__payment mb-35">
                                                    <h3>Payment:</h3>
                                                    <a href="#">
                                                        <img
                                                            src={"/" + "assets/img/course/payment/payment-1.png"}
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>

                                                {/* <button onClick={() => dispatch(addToCart(courseData))} type="button" className="tp-btn w-100 text-center my-3">Add To Cart <i className="fa-solid fa-cart-shopping ms-3"></i> </button> */}
                                                <button
                                                    type="button"
                                                    className="tp-btn w-100 text-center my-3"
                                                >
                                                    Add To Cart{" "}
                                                    <i className="fa-solid fa-cart-shopping ms-3"></i>{" "}
                                                </button>

                                                <div className="course__enroll-btn">
                                                    {user?.email && !paymentInformation?.payment ? (
                                                        <button
                                                            onClick={handleShow}
                                                            type="button"
                                                            className="tp-btn w-100 text-center"
                                                        >
                                                            Enroll
                                                            <i className="far fa-arrow-right ms-3"></i>
                                                        </button>
                                                    ) : paymentInformation?.payment ? (
                                                        <button
                                                            type="button"
                                                            className="tp-btn w-100 text-center"
                                                        >
                                                            Already Enrolled{" "}
                                                        </button>
                                                    ) : (
                                                        <Link href="/sign-in">
                                                            <a>
                                                                <button
                                                                    type="button"
                                                                    className="tp-btn w-100 text-center"
                                                                >
                                                                    Login To Buy
                                                                    <i className="far fa-arrow-right ms-3"></i>
                                                                </button>
                                                            </a>
                                                        </Link>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <SidebarRelatedCourse
                                            courses={relatedCourses?.data?.filter(course => course?.id !== courseData?.id)}/>
                                    </div>
                                </div>
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
