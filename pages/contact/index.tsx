import Head from "next/head";
import BreadCrumb from "components/common/BreadCrumb";
import ContactArea from "components/Contact/ContactArea";
import ContactInfoArea from "components/Contact/ContactInfoArea";
import Header from "components/Home/Header";
import Footer from "../../components/common/Footer";

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact Page</title>
            </Head>

            <Header/>
            <BreadCrumb title="Contact" subtitle="Contact"/>
            <ContactArea/>
            <ContactInfoArea/>

            <Footer theme="dark"/>
        </>
    );
};

export default Contact;
