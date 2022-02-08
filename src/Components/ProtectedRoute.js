import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

// because only need to access when logged in
 const ProtectedRoute = ({children}) => {
    let {user} = useUserAuth();
    if(!user){// if the user not authenticated we need to redirect it to login
        return <Navigate to="/" />;
    }
    return children;
 };

 export default ProtectedRoute;
