import React, {useState} from "react";
import Head from "next/head";
// import {useDispatch, useSelector} from 'react-redux';
import BreadCrumb from "../../components/common/BreadCrumb";
import Footer from "../../components/common/Footer";
import CourseDetailsArea from "../../components/CourseDetails/CourseDetailsArea";
import Header from "../../components/Home/Header";
// import { singleCourse } from "../../../redux/features/coursesSlice";
import courseApi from "../../apis/course";
import {useQuery} from "react-query";

const CourseDetails = () => {
  const [singleCourse, setSingleCourse] = useState("622037c6ea7975d304b6b4ef");
  // single courses
  //    const singleCourseItem = useSelector(state => state.courses.course);
  const { data } = useQuery("course", courseApi.getCourseById(singleCourse));
  const singleCourseItem = courseApi.getCourseById(singleCourse);
  console.log(singleCourseItem);
  // status
  //    const status = useSelector(state => state.courses.courseStatus);
  // dispatch
  //   const dispatch = useDispatch();
  // useDispatch
  //    useEffect(() => {
  //       dispatch(singleCourse('622037c6ea7975d304b6b4ef'))
  //    },[dispatch])

  // loader
  //     useEffect(() => {
  //       if (status === 'pending') {
  //          return <div id="loading">
  //          <div id="loading-center">
  //             <div id="loading-center-absolute">
  //                <svg id="loader">
  //                <path id="corners" d="m 0 12.5 l 0 -12.5 l 50 0 l 0 50 l -50 0 l 0 -37.5" />
  //                </svg>
  //                <img src="assets/img/favicon.png" alt="" />
  //             </div>
  //          </div>
  //          </div>
  //       }
  //    },[status]);

  return (
    <>
      <Head>
        <title>Course Details Page</title>
      </Head>

      <Header />
      <BreadCrumb title="Our Courses" subtitle="Courses" />
      <CourseDetailsArea courseData={singleCourseItem} />
      <Footer />
    </>
  );
};

export default CourseDetails;
