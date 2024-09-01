import "./Add.css";
import React, { useContext, useState } from "react";
import Logo from "../../assets/Logo";
import { AuthContext } from "../../store/Context";
import { useNavigate } from "react-router-dom";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { storage, firestore } from "../../firebase/config";

function Add() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!image) {
      alert("Please upload an image!");
      return;
    }

    try {
      // Step 1: Upload image to Firebase Storage
      const storageRef = ref(storage, `images/${image.name}`);
      const snapshot = await uploadBytes(storageRef, image);
      const imageUrl = await getDownloadURL(snapshot.ref);

      // Step 2: Add product details and image URL to Firestore
      await addDoc(collection(firestore, "products"), {
        userId: user.uid,
        name: name,
        category: category,
        price: price,
        imageUrl: imageUrl,
        createdAt: new Date(),
      });

      alert("Upload successful");
      // Clear form inputs
      setName("");
      setCategory("");
      setPrice("");
      setImage(null);
      navigate("/");
    } catch (error) {
      console.error("Error uploading file or saving data to Firestore:", error);
      alert("Failed to upload. Please try again.");
    }
  }

  return (
    <>
      <div className="container">
        <div className="signupParentDiv">
          <div className="logo-container">
            <Logo className="logo" />
          </div>
          <form>
            <label htmlFor="name">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              name="name"
            />
            <br />
            <label htmlFor="category">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              id="category"
              name="category"
            />
            <br />
            <label htmlFor="price">Price</label>
            <br />
            <input
              className="input"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              id="price"
              name="price"
            />
            <br />
            <label htmlFor="file">Post</label>
            <br />
            {image && (
              <img
                width={"200px"}
                height={"200px"}
                src={URL.createObjectURL(image)}
                alt=""
              />
            )}
            <br />
            <br />
            <input
              className="input"
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              id="file"
              name="file"
            />
            <br />
            <br />
            <button onClick={handleSubmit} className="signup-btn">
              UPLOAD
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Add;
