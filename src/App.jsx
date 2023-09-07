import React from "react";
import Header from "./components/header";
import MainContent from "./components/MainContent";
import "./App.css"; // Import your global CSS for the entire application

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
