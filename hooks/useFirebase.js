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
import Swal from "sweetalert2";
// import { useDispatch } from "react-redux";
// import { MyOrder } from "../redux/features/myOrderSlice";
import {useRouter} from "next/router";
import axios from "axios";

// initializeFirebaseApp()

const useFirebase = () => {
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
      .then(async (result) => {
        const user = result.user;
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
              idToken: await user.getIdToken(),
            }
          )
          .then((res) => {
            if (res.status === 200) {
              localStorage.setItem("accessToken", res.data.data.accessToken);
            }
          })
          .catch((err) => {
            console.log(err);
            Swal.fire({
              title: "Error",
              text: "Something went wrong. Please try again later.",
              icon: "error",
            });
            signOut(auth);
          });
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        console.log({ credential, token, user });
        setUser(user);
        usersCollection(user.displayName, user.email, "PUT");
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Login Successfully",
          timer: 1500,
        });
        router.push("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
      });
  };

  // register user
  const handleRegister = (name, email, password, reset, router) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser({ displayName: name, email });
        usersCollection(name, email, "POST");
        // update user profile
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});

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

  // use collection
  const usersCollection = (name, email, userMethod) => {
    const userData = {
      displayName: name,
      email,
    };
    const url = `https://obscure-shelf-38503.herokuapp.com/users`;
    fetch(url, {
      method: userMethod,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

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
  };
};

export default useFirebase;
