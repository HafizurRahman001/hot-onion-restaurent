import firebaseConfig from "./fireBase.config";
import { initializeApp } from "firebase/app";

const initialFireBaseApp = () => {
    initializeApp(firebaseConfig);
};
export default initialFireBaseApp;