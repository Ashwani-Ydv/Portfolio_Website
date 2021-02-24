import React from "react";
import "./App.css";
import "antd/dist/antd.css";

import AppHome from "./component/Home";
import Profile from "./component/Profile";

import { Layout } from "antd";
const { Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Profile />
    </div>
  );
}

export default App;
