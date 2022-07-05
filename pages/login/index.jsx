import Head from "next/head";
import BreadCrumb from "components/common/BreadCrumb";
import Footer from "components/common/Footer";
import Header from "components/Home/Header";
import LoginArea from "components/Login/LoginArea";
import useAuth from "../../hooks/useAuth";
import React from "react";
import Link from "next/link";
import {router} from "next/client";
import {useRouter} from "next/router";

const SignIn = () => {

    const {user} = useAuth();
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>

            <Header currentRoute={router?.route}/>

            {user?.email &&
                <section className="text-center pb-120">
                    <div className="error__thumb m-img mb-45">
                        <img src={"/assets/img/error/help.png"} alt=""/>
                    </div>
                    <h1 className="mb-25">You are already logged in!</h1>
                    <Link href="/">
                        <a style={{opacity: 0.85}} className="tp-btn">Back to home</a>
                    </Link>
                </section>

            }
            {!user?.email && <><BreadCrumb title="Login" subtitle="Login"/><LoginArea/></>}
            <Footer/>
        </>
    );
};

export default SignIn;
