import React from "react";
import { ArtistContextProvider } from "./context/ArtistContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.scss";

const App: React.FC = () => {
  return (
    <ArtistContextProvider>
      <Header />
      <Hero />
    </ArtistContextProvider>
  );
};

export default App;
