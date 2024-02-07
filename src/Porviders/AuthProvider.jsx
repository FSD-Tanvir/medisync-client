import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,signOut } from "@firebase/auth";
import { createContext, useEffect, useState } from "react";
// import { auth } from "../Firebase/firebase";
import { getAuth } from 'firebase/auth'
import app from '../Firebase/firebase'
const auth = getAuth(app)

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)



    // google login

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // sign in with email
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login 
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout 
    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSub = onAuthStateChanged(auth, currenUser => {
            console.log(currenUser)
            setUser(currenUser)
            setLoading(false)
        })
        return () => {
            return unSub()
        }
    }, [])

    const info = {
        user, loading, setLoading, createUser, logIn, googleLogin,logOut
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;