import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/HomePage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/SerachPage/Search";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/details/:id" element={<DetailsPage />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
