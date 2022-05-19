import Head from 'next/head';
import EventArea from '../../../components/EventDetails/EventArea';
import EventDetailsArea from '../../../components/EventDetails/EventDetailsArea';
import Header from '../../../components/Home/Header';
import HomeTwoFooter from '../../../components/HomeTwo/HomeTwoFooter';

const EventDetails = () => {

   return (
      <>
       <Head>
         <title>Event Details Page</title>
       </Head>

         <Header/>
         <EventArea/>
         <EventDetailsArea/>
         <HomeTwoFooter/>
      </>
   );
};

export default EventDetails;