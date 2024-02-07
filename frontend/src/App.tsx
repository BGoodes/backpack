import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Editor from "./editor/Editor";

import './style/App.css';

const App = () => {

  return (
    <BrowserRouter basename="backpack">
      <Routes>
        <Route index element={<Home />} />
        <Route path="editor" element={<Editor/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App