import React from "react";
// import { Provider } from "react-redux";
import "swiper/css/bundle";
import "react-responsive-modal/styles.css";
import "../styles/globals.css";
// import { coursesData } from "../../redux/features/coursesSlice";
// import { store } from "../../redux/store";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";
// import { blogData } from "../../redux/features/blogSlice";
// import { eventData } from "../../redux/features/eventSlice";
// import { teamData } from "../../redux/features/teamSlice";
// import { categoryData } from "../../redux/features/categorySlice";
// import { getTotal } from "../../redux/features/cartSlice";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {initFirebaseApp} from "../firebase/initFirebase";

if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
}
initFirebaseApp();
// Create a client
const queryClient = new QueryClient();

function MyApp({Component, pageProps}: any) {

    return (
        <QueryClientProvider client={queryClient}>
            <React.Fragment>
                {/* <Provider store={store}> */}
                <Component {...pageProps} />
                <ToastContainer/>
                {/* </Provider> */}
            </React.Fragment>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    );
}

export default MyApp;
