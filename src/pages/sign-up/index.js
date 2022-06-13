import Head from 'next/head';
import BreadCrumb from '../../../components/common/BreadCrumb';
import Footer from '../../../components/common/Footer';
import Header from '../../../components/Home/Header';
import SignUp from '../../../components/Register/SignUp';

const Register = () => {
   return (
      <>
      <Head>
         <title>Sign Up Page</title>
       </Head>

         <Header />
         <BreadCrumb title="Register" subtitle="Register" />
         <SignUp></SignUp>
         <Footer/>
      </>
   );
};

export default Register;