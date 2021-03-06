import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/files/MyNav";
import MyFooter from "./components/files/MyFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyMain from "./components/main/MyMain";
import MyDetails from "./components/details/MyDetails";
import SignUp from "./components/signin/SignUp";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNav />
        <Routes>
          <Route path="/" element={<MyMain />} />
          <Route path="/details/:_id" element={<MyDetails />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>

        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
