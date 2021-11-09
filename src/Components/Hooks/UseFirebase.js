import initializeAuthentication from "../Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, updateProfile, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from 'react';

initializeAuthentication();

const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('')
                const newUser = { email: email, displayName: name }
                setUser(newUser)

                //update user name in firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/home')
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(error.message);
            })
            .finally(() => setIsLoading(false));

    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password,)
            .then((userCredential) => {
                const destination = location?.state?.from || '/home';
                history.push(destination)

                setError('')
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const googleLogin = (location, history) => {

        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                const destination = location?.state?.from || '/home';
                history.push(destination)
                setError('')
            }).catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe;
    }, [])



    const logOut = () => {
        setIsLoading(true)

        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        registerUser,
        loginUser,
        logOut,
        isLoading,
        googleLogin,
        error
    }
};

export default UseFirebase;