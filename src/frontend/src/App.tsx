import {Route, Routes} from "react-router-dom";

import NotFoundPage from "./pages/NotFoundPage.tsx";
import HomePage from "./pages/HomePage.tsx";

const App = () => {

  return (
      <div className="app">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </div>
  )
}

export default App