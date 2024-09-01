import { auth } from "./firebase/config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

// signup
export const signup = async (email, password, displayName) => {
  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Update the user profile with displayName
    await updateProfile(user, { displayName });

    console.log("User signed up and display name set:", displayName);
    return userCredential;
  } catch (error) {
    console.error("Error during signup or setting display name:", error);
    throw error; // Ensure errors are propagated to the calling function
  }
};

// login
export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// signout
export const signout = () => {
  return signOut(auth);
};
