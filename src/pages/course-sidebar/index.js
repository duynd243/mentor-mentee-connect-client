import Head from 'next/head';
import BreadCrumb from '../../../components/common/BreadCrumb';
import Footer from '../../../components/common/Footer';
import CourseSidebarArea from '../../../components/CourseSidebar/CourseSidebarArea';
import Header from '../../../components/Home/Header';

const CoursesSidebar = () => {
   return (
      <>
       <Head>
         <title>Course Sidebar Page</title>
       </Head>

         <Header/>
         <BreadCrumb title="Our Courses" subtitle="Courses" />
         <CourseSidebarArea/>
         <Footer white_bg="white-bg"/>
      </>
   );
};

export default CoursesSidebar;