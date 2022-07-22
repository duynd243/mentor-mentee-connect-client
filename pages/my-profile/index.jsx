import Head from "next/head";
import Footer from "../../components/common/Footer";
import Header from "../../components/Home/Header";
import BreadCrumb from "../../components/common/BreadCrumb";
import { useQuery } from "react-query";
import userApi from "../../apis/user";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import LoadingSkeleton from "../../components/common/LoadingSkeleton";
import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import ProfileArea from "../../components/MyProfile/ProfileArea";
import ProfileMenuArea from "../../components/MyProfile/ProfileMenuArea";
import certificateApi from "apis/certificates";
import MentorRegister from "components/MyProfile/MentorRegister";
import constants from "../../data/constants";

const MyProfile = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  // handleShow
  const handleShow = () => {
    setShow(true);
  };
  // User from Firebase Auth
  const firebaseUser = useAuth().user;

  const [updatedUser, setUpdatedUser] = useState({});
  const { data: userData, isLoading } = useQuery(
    ["userData", updatedUser],
    () => userApi.getUserInfo(),
    {
      onError: (err) => {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "You are not logged in",
          allowOutsideClick: false,
        }).then(() => {
          router.push("/login");
        });
      },
    }
  );

  const onUserUpdated = (user) => {
    setUpdatedUser(() => user);
  };
  const { data: certificates } = useQuery("certificatess", () =>
    certificateApi.getAllCertificatesLoginUser({
      status: 2,
    })
  );
  console.log(certificates?.data?.length);
  return (
    <>
      <Head>
        <title>Hồ sơ của tôi</title>
      </Head>

      <Header />
      <BreadCrumb title="Hồ sơ của tôi" subtitle="Hồ sơ của tôi" />
      {isLoading && <LoadingSkeleton />}

      {!isLoading && userData && (
        <>
          {userData?.roleId == constants.roles.mentee.id && (
            <div className="profile__edit-input d-flex justify-content-end mt-20 mr-30">
              <button type="submit" className="tp-btn" onClick={handleShow}>
                Đăng ký làm mentor
              </button>
            </div>
          )}
          <ProfileArea userData={userData} firebaseUser={firebaseUser} />
          <ProfileMenuArea
            userData={userData}
            firebaseUser={firebaseUser}
            onUserUpdated={onUserUpdated}
          />
        </>
      )}
      <Footer />

      <MentorRegister
        show={show}
        handleClose={handleClose}
        userData={userData}
        certificateData={certificates?.data}
        // onChange={onChange}
      />
    </>
  );
};

export default MyProfile;
