import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";

export const AuthContext = createContext(null)

export default function Context({ children }) {
    const [user, setUser] = useState('hello')
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(auth.currentUser)
            setUser(currentUser)
            setLoading(false)
            console.log('user state changed', currentUser)
        })

        return () => unSubscribe()
    }, [])

    if (loading) {
        return <div>Loading...</div>; // Render loading state
    }

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}