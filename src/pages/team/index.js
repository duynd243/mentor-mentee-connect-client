import Head from 'next/head';
import BreadCrumb from '../../../components/common/BreadCrumb';
import Header from '../../../components/Home/Header';
import BrandArea from '../../../components/HomeTwo/BrandArea';
import HomeTwoFooter from '../../../components/HomeTwo/HomeTwoFooter';
import TeamArea from '../../../components/HomeTwo/TeamArea';
import Testimonials from '../../../components/HomeTwo/Testimonials';

const Team = () => {
   return (
      <>
      <Head>
         <title>Team Page</title>
       </Head>

         <Header/>
         <BreadCrumb title="Our Team" subtitle="Team" />
         <TeamArea/>
         <Testimonials/>
         <BrandArea/>
         <HomeTwoFooter/>
      </>
   );
};

export default Team;