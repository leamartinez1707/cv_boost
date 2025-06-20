import { Route, Routes, BrowserRouter } from "react-router-dom"
import HomeView from "./pages/HomeView"
import EditorVieww from "./pages/EditorVieww"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/editor" element={<EditorVieww />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
