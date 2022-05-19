import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import 'swiper/css/bundle';
import 'react-responsive-modal/styles.css';
import { coursesData } from '../../redux/features/coursesSlice';
import { store } from '../../redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';
import { blogData } from '../../redux/features/blogSlice';
import { eventData } from '../../redux/features/eventSlice';
import { teamData } from '../../redux/features/teamSlice';
import { categoryData } from '../../redux/features/categorySlice';
import { initializeApp } from "firebase/app";
import { getTotal } from '../../redux/features/cartSlice';
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}


const firebaseConfig = {
  apiKey: "AIzaSyBcOqjiLRsrVl0AGy9iLZHz8B08qqmb6Mc",
  authDomain: "eduker-next-js.firebaseapp.com",
  projectId: "eduker-next-js",
  storageBucket: "eduker-next-js.appspot.com",
  messagingSenderId: "672447339636",
  appId: "1:672447339636:web:fff1e3ba982ac13dfa0521"
};
initializeApp(firebaseConfig);

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
  )
}

export default MyApp
