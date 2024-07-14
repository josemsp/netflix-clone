import { db, firebaseAuth } from "@/services/firebase"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User, UserCredential } from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react"
import { collection, addDoc, setDoc, doc } from "firebase/firestore";

// const AuthContext = createContext<User | null>(null)
interface AuthContextProps {
  signUp: (email: string, password: string) => Promise<UserCredential>;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  logOut: () => Promise<void>;
  user: User | null;
  addUserDocument: (email: string) => Promise<void>;
}
const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  const signUp = async (email: string, password: string) => {
    const user = await createUserWithEmailAndPassword(firebaseAuth, email, password)
    await setDoc(doc(db, 'users', email), {
      savedShows: []
    });
    // await addDoc(collection(db, 'users'), {
    //   email,
    //   savedShows: [],
    // });
    return user
  }

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password)
  }

  const logOut = () => {
    return signOut(firebaseAuth)
  }

  const addUserDocument = async (email: string): Promise<void> => {
    await addDoc(collection(db, 'users'), {
      email,
      savedShows: [],
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      return setUser(currentUser)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, logOut, addUserDocument }}>
      {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthContextProvider');
  }

  return context
}