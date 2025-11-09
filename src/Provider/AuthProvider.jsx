import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';
import { AuthContext } from './AuthContext';

const  googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState()

    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInGoogle = () =>{
        return signInWithPopup(auth,googleProvider)
    }
    const updateUser = (userProfile) =>{
        return updateProfile(auth.currentUser,userProfile)
    }
    const logOut= () => {
        return signOut(auth)
    }
    
    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        signInGoogle,
        user,
        setUser,
        createUser,
        updateUser,
        logOut,
        signInUser
    }
    return (
        <AuthContext value={authInfo}>{children}</AuthContext>
    );
};

export default AuthProvider;