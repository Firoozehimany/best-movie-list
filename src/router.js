import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import MoviePage from "./pages/moviePage";
export default function Router() {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"></Route>
        <Route element={<MoviePage/>} path="movie:id"></Route>
      </Routes>
    </BrowserRouter>
  )
}
