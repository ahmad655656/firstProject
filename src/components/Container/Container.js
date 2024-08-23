import React from "react";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";
import './Container.css'
export default function Container({ children }) {
  return (
    <div className="container">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
