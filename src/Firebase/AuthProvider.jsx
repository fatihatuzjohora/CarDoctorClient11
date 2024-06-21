import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "./Firebase.confige";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
const auth = getAuth(app)

export const AuthContext=createContext()

  const AuthProvider = ({children}) => {

const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)
//----------------------------------------
const createuser=(email,password)=>{
    setLoading(true)
   return createUserWithEmailAndPassword(auth,email,password)}
//----------------------------------------
const signIn=(email,password)=>{
setLoading(true)
return signInWithEmailAndPassword(auth,email,password)
}
//----------------------------------------
const logOut=()=>{
    setLoading(true)
    return signOut(auth)
}
//----------------------------------------
useEffect(()=>{
const unsubscribe=onAuthStateChanged(auth,currentuser=>{
    const userEmail=currentuser?.email || user?.email;
    const loggedUser={email:userEmail}
    setUser(currentuser)
    console.log('current user', currentuser);
    setLoading(false)

    //token
    if(currentuser){
        axios.post('http://localhost:5000/jwt',loggedUser,{
            withCredentials:true })
            .then(res=>{
                console.log('token responce',res.data);
            })
    }
    else{
        axios.post('http://localhost:5000/logout',loggedUser,{ withCredentials:true})
        .then(res=>{
            console.log(res.data);
        })
    }
})
return ()=>{
    return unsubscribe()
}
},[])
//----------------------------------------

const authInFo={
user,
loading,
createuser,
signIn,
logOut,
}


    return (
        <AuthContext.Provider value={authInFo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;