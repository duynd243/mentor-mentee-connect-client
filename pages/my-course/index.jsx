import Head from "next/head";
import BreadCrumb from "components/common/BreadCrumb";
import MyCourse from "components/Courses/MyCourse";
import Footer from "components/common/Footer";
import Header from "components/Home/Header";

const MyCourses = () => {
  return (
    <>
      <Head>
        <title>My Courses</title>
      </Head>

      <Header />
      <BreadCrumb title="Khoá học của tôi" subtitle="Khoá học" />
      <MyCourse />
      <Footer />
    </>
  );
};

export default MyCourses;
