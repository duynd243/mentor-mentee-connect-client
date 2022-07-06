import Head from "next/head";
import BreadCrumb from "components/common/BreadCrumb";
import CreateCourse from "components/Courses/CreateCourse";
import Header from "components/Home/Header";
import Footer from "../../components/common/Footer";

const NewCourse = () => {
  return (
    <>
      <Head>
        <title>Tạo khoá học</title>
      </Head>

      <Header />
      <BreadCrumb title="Tạo khoá học" subtitle="Tạo khoá học" />
      <CreateCourse />
      {/* <ContactInfoArea /> */}

      <Footer theme="dark" />
    </>
  );
};

export default NewCourse;
