import Head from 'next/head';
import BreadCrumb from '../../../components/common/BreadCrumb';
import Footer from '../../../components/common/Footer';
import Header from '../../../components/Home/Header';
import LoginArea from '../../../components/Login/LoginArea';

const SignIn = () => {
   return (
      <>
      <Head>
         <title>Sign In Page</title>
       </Head>

         <Header/>
         <BreadCrumb title="Login" subtitle="Login" />
         <LoginArea/>
         <Footer/>
      </>
   );
};

export default SignIn;