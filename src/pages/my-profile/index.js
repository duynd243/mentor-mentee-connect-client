import Head from 'next/head';
import BreadCrumb from '../../../components/common/BreadCrumb';
import Footer from '../../../components/common/Footer';
import Header from '../../../components/Home/Header';
import ProfileArea from '../../../components/MyProfile/ProfileArea';
import ProfileMenuArea from '../../../components/MyProfile/ProfileMenuArea';

const MyProfile = () => {
    return (
        <>
            <Head>
                <title>My Profile Page</title>
            </Head>

            <Header />
            <BreadCrumb title="My Profile" subtitle="My Profile" />
            <ProfileArea />
            <ProfileMenuArea />
            <Footer white_bg="white-bg" />
        </>
    );
};

export default MyProfile;