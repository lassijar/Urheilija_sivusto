//import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import AddPost from "./components/AddPost";
import Posts from "./components/Posts";
import DeletePost from "./components/DeletePost";
import PutPost from "./components/PutPost";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Posts />
              </>
            }
          />
          <Route
            path="/add"
            element={
              <>
                <Header />
                <AddPost />
              </>
            }
          />
          <Route
            path="/delete"
            element={
              <>
                <Header />
                <DeletePost />
              </>
            }
          />

          <Route
            path="/put"
            element={
              <>
                <Header />
                <PutPost />
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
