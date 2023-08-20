import firebase, { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyArlpAWSYstrAOV3JBrrqlip2aZDalnLWU",
    authDomain: "my-portfolio-1ab7a.firebaseapp.com",
    projectId: "my-portfolio-1ab7a",
    storageBucket: "my-portfolio-1ab7a.appspot.com",
    messagingSenderId: "533928556210",
    appId: "1:533928556210:web:326afd731816b439943bab",
    measurementId: "G-5XF323MQD4"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const storage = getStorage(app)

export { auth, storage };
