import Head from 'next/head';
import Footer from "../../components/common/Footer";
import Header from "../../components/Home/Header";
import BreadCrumb from "../../components/common/BreadCrumb";
import {useQuery} from "react-query";
import userApi from "../../apis/user";
import Swal from "sweetalert2";
import {useRouter} from "next/router";
import LoadingSkeleton from "../../components/common/LoadingSkeleton";
import React, {useState} from "react";
import useAuth from "../../hooks/useAuth";
import ProfileArea from "../../components/MyProfile/ProfileArea";
import ProfileMenuArea from "../../components/MyProfile/ProfileMenuArea";

const MyProfile = () => {
    const router = useRouter();
    // User from Firebase Auth
    const firebaseUser = useAuth().user;

    const [updatedUser, setUpdatedUser] = useState({});
    const {data: userData, isLoading} = useQuery(['userData', updatedUser],
        () => userApi.getUserInfo(), {
            onError: (err) => {
                Swal.fire({
                    position: "top-center",
                    icon: "error",
                    title: "You are not logged in",
                    allowOutsideClick: false,
                }).then(() => {
                    router.push("/login");
                });
            }
        }
    );

    const onUserUpdated = (user) => {
        setUpdatedUser(() => user)
    }
    return (
        <>
            <Head>
                <title>My Profile</title>
            </Head>

            <Header/>
            <BreadCrumb title="My Profile" subtitle="My Profile"/>
            {isLoading &&
                <LoadingSkeleton/>
            }

            {!isLoading && userData &&
                <>
                    <ProfileArea userData={userData} firebaseUser={firebaseUser}/>
                    <ProfileMenuArea userData={userData} firebaseUser={firebaseUser} onUserUpdated={onUserUpdated}/>
                </>
            }
            <Footer/>
        </>
    );
};

export default MyProfile;