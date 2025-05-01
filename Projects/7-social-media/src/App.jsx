import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import PostListProvider from "./store/post-list-store";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="main-content">
          <Header></Header>
          <Main selectedTab={selectedTab}></Main>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
