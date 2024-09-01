import React, { useEffect, useState, useContext } from "react";
import "./View.css";
import { PostContext } from "../../store/PostsContext";
import { firestore } from "../../firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";

function View() {
  const [userDetails, setUserDetails] = useState(null);
  const { postDetails } = useContext(PostContext);

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (postDetails?.userId) {
        try {
          // Reference to the 'users' collection and query based on userId
          const usersCollection = collection(firestore, "users");
          const q = query(
            usersCollection,
            where("uid", "==", postDetails.userId)
          );
          const querySnapshot = await getDocs(q);

          // Loop through the results and set the user details
          querySnapshot.forEach((doc) => {
            setUserDetails(doc.data());
            console.log(userDetails);
          });
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      }
    };

    fetchUserDetails();

    // Add postDetails as a dependency to run the effect when it changes
  }, [postDetails]);

  if (!userDetails) {
    return <p>Loading.......</p>;
  }

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          width={"600px"}
          height={"400px"}
          src={postDetails.imageUrl || "../../../Images/R15V3.jpg"}
          alt={postDetails.title || ""}
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price}</p>
          <span>{postDetails.title}</span>
          <p>{postDetails.category}</p>
          <span>{new Date(postDetails.date).toDateString()}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>Name : {userDetails.userName || "No name"}</p>
          <p>Contact : {userDetails.phone || "1234567890"}</p>
          <p>Email : {userDetails.email || "No email"}</p>
        </div>
      </div>
    </div>
  );
}

export default View;
