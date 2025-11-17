import { Route, Routes } from "react-router"
import { Main } from "./pages/Main"

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  )
}
