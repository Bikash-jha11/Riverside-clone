import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./component/Register.tsx";
import Login from "./component/Login.tsx";
import Home from "./component/Home.tsx";
import Join from "./component/JoinPage.tsx";
import StreamPage from "./component/StreamPage.tsx";
import {me} from './redux/actions/authAction.ts'
import { Dispatch } from "redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function App() {
  // @ts-ignore
  const { auth } = useSelector((state) => state);
  const dispatch: Dispatch<any> = useDispatch();
     useEffect(() => {
          dispatch(me())
     },[auth,dispatch])
     

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={auth.token ? <Home /> : <Login />} />
          <Route path="/register" element={<Register />}></Route>
          <Route path="/join" element={<Join />}></Route>
          <Route path="/stream" element={<StreamPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
