import Head from 'next/head';
import BlogArea from '../../../components/Blog/BlogArea';
import BreadCrumb from '../../../components/common/BreadCrumb';
import Footer from '../../../components/common/Footer';
import Header from '../../../components/Home/Header';

const Blog = () => {
   return (
      <>
      <Head>
        <title>Blog Page</title>
      </Head>

         <Header/>
         <BreadCrumb title="Our Blog" subtitle="Blog" />
         <BlogArea/>
         <Footer/>
      </>
   );
};

export default Blog;