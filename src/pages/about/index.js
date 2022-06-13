import Head from 'next/head';
import BreadCrumb from '../../../components/common/BreadCrumb';
import Footer from '../../../components/common/Footer';
import AboutArea from '../../../components/Home/AboutArea';
import Header from '../../../components/Home/Header';
import HomeCourses from '../../../components/Home/HomeCourses';
import BrandArea from '../../../components/HomeTwo/BrandArea';
import TeamArea from '../../../components/HomeTwo/TeamArea';
import Testimonials from '../../../components/HomeTwo/Testimonials';

const About = () => {
   return (
      <>
      <Head>
        <title>About Page</title>
      </Head>

         <Header/>
         <BreadCrumb title="About" subtitle="About" />
         <AboutArea about_pt="pt-120" />
         <HomeCourses/>
         <TeamArea/>
         <Testimonials/>
         <BrandArea/>
         <Footer/>
      </>
   );
};

export default About;