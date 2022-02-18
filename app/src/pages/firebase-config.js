import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import {getAuth,EmailAuthProvider,GoogleAuthProvider} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_58uaZQ6BEHwF9GwK0JX6dBCLgnZ225M",
  authDomain: "app-project-interview.firebaseapp.com",
  databaseURL: "https://app-project-interview-default-rtdb.firebaseio.com",
  projectId: "app-project-interview",
  storageBucket: "app-project-interview.appspot.com",
  messagingSenderId: "947345396044",
  appId: "1:947345396044:web:df275677cb48265ac03fe9",
  measurementId: "G-V6D3SQBJCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const storage=getStorage();
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();   
export const emailprovider=new EmailAuthProvider();