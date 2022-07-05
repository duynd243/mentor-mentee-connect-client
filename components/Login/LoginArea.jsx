import Link from "next/link";
import React, {useState} from "react";
import useAuth from "../../hooks/useAuth";
import {useForm} from "react-hook-form";
import {useRouter} from "next/router";

const LoginArea = () => {
    // useAuth
    const {handleGoogleSignIn, loginUser, passwordResetEmail} = useAuth();
    // router
    const router = useRouter();
    // setEmail
    const [email, setEmail] = useState("");
    // useForm
    const {register, handleSubmit, reset} = useForm();
    // onSubmit
    const onSubmit = (data) => {
        loginUser(data.email, data.password, reset, router);
    };
    // handleForgotPassword
    const handleForgotPassword = () => {
        passwordResetEmail(email);
    };
    return (
        <>
            <section className="signup__area p-relative z-index-1 pt-100 pb-145">
                <div className="sign__shape">
                    <img className="man-1" src="assets/img/icon/sign/man-1.png" alt=""/>
                    <img className="man-2" src="assets/img/icon/sign/man-2.png" alt=""/>
                    <img
                        className="circle"
                        src="assets/img/icon/sign/circle.png"
                        alt=""
                    />
                    <img
                        className="zigzag"
                        src="assets/img/icon/sign/zigzag.png"
                        alt=""
                    />
                    <img className="dot" src="assets/img/icon/sign/dot.png" alt=""/>
                    <img className="bg" src="assets/img/icon/sign/sign-up.png" alt=""/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
                            <div className="section__title-wrapper text-center mb-55">
                                <h2 className="section__title">
                                    Sign in to <br/> recharge direct.
                                </h2>
                                <p>
                                    it you dont have an account you can{" "}
                                    <a href="#">Register here!</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="sign__wrapper white-bg">
                                <div className="sign__header mb-35">
                                    <div

                                        className="sign__in text-center"
                                    >
                                        <button onClick={() => handleGoogleSignIn(router)} type="button"
                                                className="login-with-google-btn">
                                            <div className="google-logo">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                                                    <g fill="none" fillRule="evenodd">
                                                        <path
                                                            d="M17.6 9.2l-.1-1.8H9v3.4h4.8C13.6 12 13 13 12 13.6v2.2h3a8.8 8.8 0 0 0 2.6-6.6z"
                                                            fill="#4285F4" fillRule="nonzero"/>
                                                        <path
                                                            d="M9 18c2.4 0 4.5-.8 6-2.2l-3-2.2a5.4 5.4 0 0 1-8-2.9H1V13a9 9 0 0 0 8 5z"
                                                            fill="#34A853" fillRule="nonzero"/>
                                                        <path d="M4 10.7a5.4 5.4 0 0 1 0-3.4V5H1a9 9 0 0 0 0 8l3-2.3z"
                                                              fill="#FBBC05" fillRule="nonzero"/>
                                                        <path
                                                            d="M9 3.6c1.3 0 2.5.4 3.4 1.3L15 2.3A9 9 0 0 0 1 5l3 2.4a5.4 5.4 0 0 1 5-3.7z"
                                                            fill="#EA4335" fillRule="nonzero"/>
                                                        <path d="M0 0h18v18H0z"/>
                                                    </g>
                                                </svg>
                                            </div>
                                            <span>Sign in with Google</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="sign__form">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="sign__input-wrapper mb-25">
                                            <h5>Work email</h5>
                                            <div className="sign__input">
                                                <input
                                                    required
                                                    {...register("email")}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    type="email"
                                                    placeholder="e-mail address"
                                                />
                                                <i className="fal fa-envelope"></i>
                                            </div>
                                        </div>
                                        <div className="sign__input-wrapper mb-10">
                                            <h5>Password</h5>
                                            <div className="sign__input">
                                                <input
                                                    required
                                                    {...register("password")}
                                                    type="password"
                                                    placeholder="Password"
                                                />
                                                <i className="fal fa-lock"></i>
                                            </div>
                                        </div>
                                        <div className="sign__action d-sm-flex justify-content-between mb-30">
                                            <div className="sign__agree d-flex align-items-center">
                                                <input
                                                    className="m-check-input"
                                                    type="checkbox"
                                                    id="m-agree"
                                                />
                                                <label className="m-check-label" htmlFor="m-agree">
                                                    Keep me signed in
                                                </label>
                                            </div>
                                            <div className="sign__forgot">
                                                <button
                                                    style={{
                                                        cursor: "pointer",
                                                        background: "transparent",
                                                    }}
                                                    onClick={handleForgotPassword}
                                                >
                                                    Forgot your password?
                                                </button>
                                            </div>
                                        </div>
                                        <button className="tp-btn  w-100">
                                            {" "}
                                            <span></span> Sign In
                                        </button>
                                        <div className="sign__new text-center mt-20">
                                            <p>
                                                New to Eduker ?{" "}
                                                <Link href="/sign-up">
                                                    <a>Sign Up</a>
                                                </Link>{" "}
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LoginArea;
