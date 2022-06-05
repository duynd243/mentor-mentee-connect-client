import Head from "next/head";
import BreadCrumb from "../../components/common/BreadCrumb";
import Footer from "../../components/common/Footer";
import CourseArea from "../../components/Courses/CoursesArea";
import Header from "../../components/Home/Header";

const Courses = () => {
  return (
    <>
      <Head>
        <title>Course Sidebar Page</title>
      </Head>

      <Header />
      <BreadCrumb title="Our Courses" subtitle="Courses" />
      <CourseArea />
      <Footer white_bg="white-bg" />
    </>
  );
};

export default Courses;
