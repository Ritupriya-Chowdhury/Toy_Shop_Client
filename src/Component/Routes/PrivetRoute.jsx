import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({ children }) => {
    const {user,loader}=useContext(AuthContext);
   const location =useLocation()

    if(loader){ return  <button type="button" className="bg-indigo-500 ..." disabled>
    
    Processing...
  </button>
    }
    if(user) return children;

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivetRoute;