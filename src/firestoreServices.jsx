import { firestore } from "./firebase/config";
import { collection, addDoc } from "firebase/firestore";

// function for adding a new list
export const addListing = async (listingData) => {
  try {
    const docRef = await addDoc(collection(firestore, "users"), listingData);
    alert("Document written with ID", docRef.id);
  } catch (error) {
    console.error("Error adding document", error);
  }
};

// Example function to handle form submission
// ------------------------------------------
// import { addListing } from './firestoreService';

// const handlePostAd = async () => {
//   const newAd = {
//     title: 'Bicycle for sale',
//     description: 'A slightly used bicycle in good condition.',
//     price: 100,
//     imageUrl: 'link_to_image',
//     userId: 'current_user_id'
//   };

//   await addListing(newAd);
// };
