import Head from 'next/head';
import BreadCrumb from '../../../components/common/BreadCrumb';
import Header from '../../../components/Home/Header';
import Events from '../../../components/events/Events';
import TeamArea from '../../../components/HomeTwo/TeamArea';
import HomeTwoFooter from '../../../components/HomeTwo/HomeTwoFooter';

const OurEvents = () => {
   return (
      <>
      <Head>
         <title>Event Page</title>
       </Head>
       
         <Header/>
         <BreadCrumb title="Event" subtitle="Event" />
         <Events/>
         <TeamArea/>
         <HomeTwoFooter/>
      </>
   );
};

export default OurEvents;