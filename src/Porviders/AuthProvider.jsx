import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "@firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase";

export const AuthContext= createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading]= useState(false)

    const createUser = (email , password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unSub = onAuthStateChanged(auth, currenUser=>{
            console.log(currenUser)
            setLoading(false)
            setUser(currenUser)
        })
        return ()=>{
            return unSub()
        }
    },[])

    const info ={
        user, loading, setLoading, createUser, logIn
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;