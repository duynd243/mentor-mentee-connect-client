import Head from 'next/head';
import AppArea from '../../../components/HomeThree/AppArea';
import CategoryArea from '../../../components/HomeThree/CategoryArea';
import Certificate from '../../../components/HomeThree/Certificate';
import CounterArea from '../../../components/HomeThree/CounterArea';
import CoursesArea from '../../../components/HomeThree/CoursesArea';
import Faq from '../../../components/HomeThree/Faq';
import HomeThreeFooter from '../../../components/HomeThree/HomeThreeFooter';
import HomeThreeHeader from '../../../components/HomeThree/HomeThreeHeader';
import HomeThreeHeroArea from '../../../components/HomeThree/HomeThreeHeroArea';
import Pricing from '../../../components/HomeThree/Pricing';

const HomeThree = () => {
   return (
      <>
      <Head>
         <title>Home Three</title>
       </Head>

         <HomeThreeHeader />
         <HomeThreeHeroArea/>
         <CategoryArea/>
         <CounterArea/>
         <CoursesArea/>
         <Certificate/>
         <Pricing/>
         <Faq/>
         <AppArea/>
         <HomeThreeFooter/>
      </>
   );
};

export default HomeThree;