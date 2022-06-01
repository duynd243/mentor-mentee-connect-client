import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import 'swiper/css/bundle';
import 'react-responsive-modal/styles.css';
import {coursesData} from '../../redux/features/coursesSlice';
import {store} from '../../redux/store';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';
import {blogData} from '../../redux/features/blogSlice';
import {eventData} from '../../redux/features/eventSlice';
import {teamData} from '../../redux/features/teamSlice';
import {categoryData} from '../../redux/features/categorySlice';
import {initializeApp} from "firebase/app";
import {getTotal} from '../../redux/features/cartSlice';

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}


const firebaseConfig = {
  apiKey: "AIzaSyANiqMFoRwZUN4iuVfZjZ2vPAsiQBW_ELg",
  authDomain: "test-project-2403.firebaseapp.com",
  projectId: "test-project-2403",
  storageBucket: "test-project-2403.appspot.com",
  messagingSenderId: "52075358286",
  appId: "1:52075358286:web:900ed881740efc6fe8bb1f",
  measurementId: "G-5829C7YMKN"
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
