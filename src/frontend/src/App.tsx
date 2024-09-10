import { Route, Routes } from "react-router-dom"

import Home from "./views/Home"
import NotFound from "./views/NotFound"
import Editor from "./components/editor/Editor"

function App() {

  return (
    <div className="app">
          <Routes>
            <Route index element={<Home />} />
            <Route path="editor" element={<Editor />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
    </div>
  )
}

export default App
