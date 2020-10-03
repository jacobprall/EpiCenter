import React from "react";
import Footer from "../splash/footer";
import Update from "./update/update_container";
import Feed from "./feed";
import Connections from "./connections";
import News from "./news";
export default function home() {
  return (
    <div className="home-container">
      <Connections />
      <div className="center-home">
        <Update />
        <Feed />
      </div>
      <News />
      <Footer />
    </div>
  );
}
