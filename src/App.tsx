import { Route, Routes } from "react-router"
import { Main } from "./pages/Main"
import { About } from "./pages/About"
import { Blog } from "./pages/Blog"

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  )
}
