import Head from 'next/head';
import BreadCrumb from '../../../components/common/BreadCrumb';
import Header from '../../../components/Home/Header';
import CoursesStyleTwo from '../../../components/coursesStyleTwo/coursesStyleTwoArea';
import Footer from '../../../components/common/Footer';

const CoursesTwoStyle = () => {
   return (
      <>
      <Head>
         <title>Courses Two Page</title>
       </Head>
       
         <Header/>
         <BreadCrumb title="Our Courses" subtitle="Courses" />
         <CoursesStyleTwo/>
         <Footer white_bg="white-bg"/>
      </>
   );
};

export default CoursesTwoStyle;