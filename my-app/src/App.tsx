import React from 'react';
import './App.css';
import TitleHeader from "./components/TitleHeader";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
      <>
        <TitleHeader></TitleHeader>
        <MainContent></MainContent>
        <Footer></Footer>
      </>
  );
}

export default App;
