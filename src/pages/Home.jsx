import React from "react";
import Header from "../components/Header/Header";
import SubHeader from "../components/SubHeader/SubHeader";
import Posts from "../components/Posts/Post";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div>
      <Header />
      <SubHeader />
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;
