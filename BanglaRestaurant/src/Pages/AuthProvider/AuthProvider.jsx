import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";




export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const signInWithGoogle = () => {
        setLoading(true)

        return signInWithPopup(auth, googleProvider)
    }
    const signInWithGithub = () => {
        setLoading(true)

        return signInWithPopup(auth, githubProvider)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    // observe auth state change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('current value of the current user', currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe
        }
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut,
        signInWithGoogle,
        signInWithGithub
    }
    return (
        <>
            <AuthContext.Provider value={authInfo}>
                {children}

            </AuthContext.Provider>
        </>
    );
};

export default AuthProvider;