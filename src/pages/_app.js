import React, { useEffect } from "react";
import { Provider } from "react-redux";
import "swiper/css/bundle";
import "react-responsive-modal/styles.css";
import { coursesData } from "../../redux/features/coursesSlice";
import { store } from "../../redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";
import { blogData } from "../../redux/features/blogSlice";
import { eventData } from "../../redux/features/eventSlice";
import { teamData } from "../../redux/features/teamSlice";
import { categoryData } from "../../redux/features/categorySlice";
import { initializeApp, getApps } from "firebase/app";
import { getTotal } from "../../redux/features/cartSlice";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

const firebaseConfig = {
  apiKey: "AIzaSyBdkKaULWLY3JI3DGL_H-Z5nSMybojDC90",
  authDomain: "mentor-mentee-connecting.firebaseapp.com",
  projectId: "mentor-mentee-connecting",
  storageBucket: "mentor-mentee-connecting.appspot.com",
  messagingSenderId: "322678416517",
  appId: "1:322678416517:web:5c09c4c963c8a8771535ec",
};
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    store.dispatch(coursesData());
    store.dispatch(blogData());
    store.dispatch(eventData());
    store.dispatch(teamData());
    store.dispatch(categoryData());
    store.dispatch(getTotal());
  }, [store]);

  return (
    <React.Fragment>
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer />
      </Provider>
    </React.Fragment>
  );
}

export default MyApp;
