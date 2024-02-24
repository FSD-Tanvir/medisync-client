import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "@firebase/auth";
import { createContext, useEffect, useState } from "react";
// import { auth } from "../Firebase/firebase";
<<<<<<< HEAD
import { getAuth } from "firebase/auth";
import app from "../Firebase/firebase";
const auth = getAuth(app);
=======
import { getAuth,updateProfile } from 'firebase/auth'
import app from '../Firebase/firebase'
const auth = getAuth(app)
>>>>>>> cdfaaf6889515a28fe1811ba22c8a2500e779154

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
<<<<<<< HEAD
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
=======
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
>>>>>>> cdfaaf6889515a28fe1811ba22c8a2500e779154

  // google login

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // sign in with email
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout
  const logOut = () => {
    return signOut(auth);
  };

<<<<<<< HEAD
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (currenUser) => {
      //   console.log(currenUser);

      setUser(currenUser);
      setLoading(false);
    });
    return () => {
      return unSub();
    };
  }, []);

  const info = {
    user,
    loading,
    setLoading,
    createUser,
    logIn,
    googleLogin,
    logOut,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
=======
    //   update user profile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
      };

    // login 
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout 
    const logOut = () => {
        setLoading(true)
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
        user, loading, setLoading, createUser,updateUserProfile, logIn, googleLogin,logOut
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
>>>>>>> cdfaaf6889515a28fe1811ba22c8a2500e779154
};

export default AuthProvider;
