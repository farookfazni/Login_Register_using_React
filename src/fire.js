import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCYJlHFP03yW3sg1Vl-mQ5-KsfUjCDrUZs",
  authDomain: "login-project-de299.firebaseapp.com",
  projectId: "login-project-de299",
  storageBucket: "login-project-de299.appspot.com",
  messagingSenderId: "1088972413797",
  appId: "1:1088972413797:web:961e9daf7e56d7f807df8c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;
