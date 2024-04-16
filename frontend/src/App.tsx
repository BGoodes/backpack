import {BrowserRouter, Route, Routes} from "react-router-dom";

import NotFoundPage from "./pages/NotFoundPage.tsx";
import HomePage from "./pages/HomePage.tsx";

import './style/App.css';

const App = () => {

  return (
    <BrowserRouter basename="backpack">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App