import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
"Add your sdk configuration from firebase here"
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
