import React, { Component, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./global.css";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import MovieDetails from "./pages/MovieDetails";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <main>
            <section>
              <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/page1"} element={<Page1 />} />
                <Route path={"/page2"} element={<Page2 />} />
                <Route
                  path={"/moviedetails/:data"}
                  element={<MovieDetails />}
                />
              </Routes>
            </section>
          </main>
        </BrowserRouter>
        <Footer />
      </>
    );
  }
}

export default App;
