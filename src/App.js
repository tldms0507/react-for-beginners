import { useEffect, useState } from "react";
import Movie from "./components/Movie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";

import "./App.css"

function App() {
  return (
    <Router basename={ProcessingInstruction.env.PUBLIC_URL}>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>
        {/* 페이지 링크 뒤에 "/movie"를 붙이면 Detail페이지가 나오게 됨 */}
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}
//<Route path="/"> : Home Route 렌더링("/"url에 있을 때 Home 컴포넌트 렌더링)
export default App;
