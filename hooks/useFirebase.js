import {useEffect, useState} from "react";
// import initializeFirebaseApp from "../components/Firebase/firebase.init";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import {getStorage} from "firebase/storage";
import Swal from "sweetalert2";
// import { useDispatch } from "react-redux";
// import { MyOrder } from "../redux/features/myOrderSlice";
import {useRouter} from "next/router";
import axios from "axios";

const useFirebase = () => {
    const storage = getStorage();

    const [user, setUser] = useState({});
    //   const dispatch = useDispatch();
    const router = useRouter();
    // googleProvider
    const googleProvider = new GoogleAuthProvider();
    // auth
    const auth = getAuth();
    // handle google sign in
    const handleGoogleSignIn = (router) => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const resultUser = result.user;
                setUser(resultUser);
                // if (user.email?.split("@")[1] !== "fpt.edu.vn") {
                //   Swal.fire({
                //     title: "Error",
                //     text: "Please use your FPT email to login",
                //     icon: "error",
                //   });
                //   signOut(auth);
                //   return;
                // }
                axios
                    .post(
                        `https://mentor-mentee-connect-api.tk/api/v1/authenticate/login`,
                        {
                            idToken: resultUser.accessToken,
                        }
                    )
                    .then((res) => {
                        if (res.status === 200) {
                            if (res.data.data.role === 'Admin') {
                                Swal.fire({
                                    position: "top-center",
                                    icon: "error",
                                    title: "Your account is not allowed to login on this page.",
                                }).then(() => {
                                    setUser({});
                                    signOut(auth);
                                });
                                return;
                            }
                            localStorage.setItem("accessToken", res.data.data.accessToken);
                            Swal.fire({
                                position: "top-center",
                                icon: "success",
                                title: "Login Successfully",
                                timer: 1500,
                            });
                            router.push("/");
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                        Swal.fire({
                            title: "Error",
                            text: "Something went wrong. Please try again later.",
                            icon: "error",
                        });
                        setUser({});
                        signOut(auth);
                    });

            })
            .catch((error) => {
                // Handle Errors here.
            });
    };

    // register user
    const handleRegister = (name, email, password, reset, router) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser({displayName: name, email});
                // update user profile
                updateProfile(auth.currentUser, {
                    displayName: name,
                })
                    .then(() => {
                    })
                    .catch((error) => {
                    });

                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Register Successfully",
                    timer: 1500,
                });
                reset();
                router.push("/");
            })
            .catch((error) => {
                const errorMessage = error.message;
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: errorMessage,
                    timer: 1500,
                });
            });
    };

    // login user
    const loginUser = (email, password, reset, router) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Login Successfully",
                    timer: 1500,
                });
                reset();
                router.push("/");
            })
            .catch((error) => {
                const errorMessage = error.message;
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: errorMessage,
                    timer: 1500,
                });
            });
    };

    // password reset email
    const passwordResetEmail = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Password reset email sent",
                });
            })
            .catch((error) => {
                const errorMessage = error.message;
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: errorMessage,
                    timer: 1500,
                });
            });
    };

    // logout
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
                localStorage.removeItem("accessToken");
                Swal.fire({
                    icon: "success",
                    title: "Logout Successfully",
                });
                router.push("/");
            })
            .catch((error) => {
                const errorMessage = error.message;
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: errorMessage,
                    timer: 1500,
                });
            });
    };

    // on auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
        return () => unsubscribe();
    }, [auth]);

    //   useEffect(() => {
    //     if (!user?.email) {
    //     } else {
    //       dispatch(MyOrder(user?.email));
    //     }
    //   }, [user, dispatch]);

    return {
        user,
        handleGoogleSignIn,
        handleRegister,
        loginUser,
        passwordResetEmail,
        logout,
        storage
    };
};

export default useFirebase;