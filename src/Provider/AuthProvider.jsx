import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import axios from "axios";



export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user , setUser] = useState()
    const [loading , setLoading] = useState(true)


    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth , googleProvider)
    }
    const createUser = (email , password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }
    const signIn = (email , password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }
    const userProfile = (name , image) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
          })
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser =>{
            const UserEmail = currentUser?.email || user?.email;
            const loggedUser = {email : UserEmail}
            setLoading(false)
            setUser(currentUser)
            if(currentUser){
                axios.post('http://localhost:5000/jwt' ,loggedUser , {withCredentials: true} )
                .then(res => {
                    console.log(res.data);
                })
            }
            else{
                axios.post('http://localhost:5000/signOut' , loggedUser , {withCredentials: true})
                .then(res => {
                    console.log(res.data);
                })
            }
        })
        return () =>{
            unsubscribe();
        }
    },[])




    const authInfo = {loading , user, googleSignIn , createUser ,userProfile , signIn , logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children : PropTypes.node
}
export default AuthProvider;