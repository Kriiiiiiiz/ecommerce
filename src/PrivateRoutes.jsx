import { UserContext } from "./context/UserContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoutes({children}){
    const {userData} = useContext(UserContext);
    console.log(userData.email.length);
    if (userData.email.length === 0){
    return(<Navigate to ="/" />)    
    }
        return(<>{children}</>)
  

}

