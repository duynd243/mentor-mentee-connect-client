import Link from 'next/link';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';

const LoginArea = () => {
   // useAuth
   const { handleGoogleSignIn, loginUser, passwordResetEmail } = useAuth();
   // router
   const router = useRouter();
   // setEmail 
   const [email, setEmail] = useState('')
   // useForm
   const { register, handleSubmit, reset } = useForm();
   // onSubmit
   const onSubmit = data => {
      loginUser(data.email, data.password, reset, router)
   }
   // handleForgotPassword
   const handleForgotPassword = () => {
      passwordResetEmail(email)
   }
   return (
      <>

         <section className="signup__area p-relative z-index-1 pt-100 pb-145">
            <div className="sign__shape">
               <img className="man-1" src="assets/img/icon/sign/man-1.png" alt="" />
               <img className="man-2" src="assets/img/icon/sign/man-2.png" alt="" />
               <img className="circle" src="assets/img/icon/sign/circle.png" alt="" />
               <img className="zigzag" src="assets/img/icon/sign/zigzag.png" alt="" />
               <img className="dot" src="assets/img/icon/sign/dot.png" alt="" />
               <img className="bg" src="assets/img/icon/sign/sign-up.png" alt="" />
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
                     <div className="section__title-wrapper text-center mb-55">
                        <h2 className="section__title">Sign in to <br />  recharge direct.</h2>
                        <p>it you dont have an account you can <a href="#">Register here!</a></p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                     <div className="sign__wrapper white-bg">
                        <div className="sign__header mb-35">
                           <div onClick={() => handleGoogleSignIn(router)} className="sign__in text-center">
                              <a style={{ cursor: 'pointer' }} className="sign__social g-plus text-start mb-15"><i className="fab fa-google-plus-g"></i>Sign Up with Google</a>
                              <p> <span>........</span> Or, <Link href="/sign-up"><a >sign up</a></Link> with your email<span> ........</span> </p>
                           </div>
                        </div>
                        <div className="sign__form">
                           <form onSubmit={handleSubmit(onSubmit)}>
                              <div className="sign__input-wrapper mb-25">
                                 <h5>Work email</h5>
                                 <div className="sign__input">
                                    <input required {...register("email")} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="e-mail address" />
                                    <i className="fal fa-envelope"></i>
                                 </div>
                              </div>
                              <div className="sign__input-wrapper mb-10">
                                 <h5>Password</h5>
                                 <div className="sign__input">
                                    <input required {...register("password")} type="password" placeholder="Password" />
                                    <i className="fal fa-lock"></i>
                                 </div>
                              </div>
                              <div className="sign__action d-sm-flex justify-content-between mb-30">
                                 <div className="sign__agree d-flex align-items-center">
                                    <input className="m-check-input" type="checkbox" id="m-agree" />
                                    <label className="m-check-label" htmlFor="m-agree">Keep me signed in
                                    </label>
                                 </div>
                                 <div className="sign__forgot">
                                    <button style={{ cursor: 'pointer', background: 'transparent' }}
                                       onClick={handleForgotPassword}>
                                       Forgot your password?</button>
                                 </div>
                              </div>
                              <button className="tp-btn  w-100"> <span></span> Sign In</button>
                              <div className="sign__new text-center mt-20">
                                 <p>New to Eduker ? <Link href="/sign-up">
                                    <a >Sign Up</a>
                                 </Link> </p>
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