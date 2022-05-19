import Head from 'next/head';
import BreadCrumb from '../../../components/common/BreadCrumb';
import Footer from '../../../components/common/Footer';
import Header from '../../../components/Home/Header';
import MyCoursesArea from '../../../components/MyCourses/MyCoursesArea';

const MyCourses = () => {
   return (
      <>
      <Head>
         <title>My Courses Page</title>
       </Head>

         <Header/>
         <BreadCrumb title="My Courses" subtitle="My Courses" />
         <MyCoursesArea/>
         <Footer/>
      </>
   );
};

export default MyCourses;