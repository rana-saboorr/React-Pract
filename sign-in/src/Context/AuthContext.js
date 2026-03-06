import { createContext, useContext } from "react";

export const AuthContext = createContext({
    user:null,
    signup: ()=>{},
    signin: ()=>{},
    logout:()=>{},
});

export const useAuth = () =>{
    return useContext(AuthContext);
}

export const AuthProvider = AuthContext.Provider;