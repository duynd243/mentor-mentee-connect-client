import Head from "next/head";
import BreadCrumb from "components/common/BreadCrumb";
import CourseSidebar from "components/Courses/CourseSidebar";
import Footer from "components/common/Footer";
import Header from "components/Home/Header";

const Courses = () => {
    return (
        <>
            <Head>
                <title>Courses</title>
            </Head>

            <Header/>
            <BreadCrumb title="Khoá Học" subtitle="Khoá Học"/>
            <CourseSidebar/>
            <Footer/>
        </>
    );
};

export default Courses;
