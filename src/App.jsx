import { Route, Routes, BrowserRouter } from "react-router-dom"
import HomeView from "./pages/HomeView"
import EditorView from "./pages/EditorView"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/editor" element={<EditorView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
