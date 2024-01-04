import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDMv1BZTJAeUd5bJ4aY89ayPHVVrvNG_7Q",
  authDomain: "swiftsignin-6bb10.firebaseapp.com",
  projectId: "swiftsignin-6bb10",
  storageBucket: "swiftsignin-6bb10.appspot.com",
  messagingSenderId: "958276056007",
  appId: "1:958276056007:web:a807bb115b7e06686f9fe2",
  measurementId: "G-J6EB88V29C",
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
