import Head from 'next/head';
import CartArea from '../../../components/Cart/CartArea';
import BreadCrumb from '../../../components/common/BreadCrumb';
import Footer from '../../../components/common/Footer';
import Header from '../../../components/Home/Header';

const Cart = () => {
   return (
      <>
       <Head>
         <title>Cart Page</title>
       </Head>

         <Header/>
         <BreadCrumb title="My Cart" subtitle="Cart" />
         <CartArea/>
         <Footer/>
      </>
   );
};

export default Cart;