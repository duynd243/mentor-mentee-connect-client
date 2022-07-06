import {getApps, initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";

const clientCredentials = {
    apiKey: "AIzaSyBdkKaULWLY3JI3DGL_H-Z5nSMybojDC90",
    authDomain: "mentor-mentee-connecting.firebaseapp.com",
    projectId: "mentor-mentee-connecting",
    storageBucket: "mentor-mentee-connecting.appspot.com",
    messagingSenderId: "322678416517",
    appId: "1:322678416517:web:5c09c4c963c8a8771535ec",
    measurementId: "G-2DZBY22SN9",
};

const initFirebaseApp = function () {
    if (!getApps().length) {
        initializeApp(clientCredentials);
        console.log("Firebase has been init successfully");
    }
}

const firebaseApp = initializeApp(clientCredentials);
const storage = getStorage(firebaseApp);
export {initFirebaseApp, firebaseApp, storage};