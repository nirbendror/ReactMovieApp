import React from "react";
import './App.css';
import ContactUs from "./components/ContactUs";
import MovieContainer from "./components/MovieContainer";

function App() {

  return (
    <div>
      <div className="App">
        <MovieContainer />
      </div>
      <ContactUs />
    </div>
  );
}

export default App;
