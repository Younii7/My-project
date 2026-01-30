import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Post from "./components/Post";
import "./styles/App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Header name="LYS" title="프론트엔드 프로그래밍 컴포넌트입니다." />
    <Home>
      <Post />
    </Home>
    <Footer name="LYS" email="khan@tukorea.ac.kr" />
  </>
);
