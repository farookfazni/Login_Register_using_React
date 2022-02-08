import { createContext, useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail} from 'firebase/auth';
import {auth} from '../fire';

// using context api we are getting the firbase authentications 
const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [ user, setUser] = useState("");
    // to create email and password in firebase authentication
    function signup(email, password){
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // to get the email and password from firabse authentication
    function loin(email, password){
        return signInWithEmailAndPassword(auth, email, password);
    }
    // logout
    function logout(){
        return signOut(auth);
    }
    // reset password
    function resetPassword(email){
        return sendPasswordResetEmail(auth,email);
    }
    // to get the changes in authentication 
    useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (Currentuser) => {
      setUser(Currentuser);
    });
    return () => {
      unsubcribe();
    };
  }, []);
    return <userAuthContext.Provider value={{user,signup,loin,logout,resetPassword}}>{children}</userAuthContext.Provider>
    
}

export function useUserAuth(){
    return useContext(userAuthContext);
}