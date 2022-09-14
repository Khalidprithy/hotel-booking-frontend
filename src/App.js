import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Home from "./components/Pages/Home";
import Hotel from "./components/Pages/Hotel";
import List from "./components/Pages/List";
import Footer from "./components/Shared/Footer";

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/hotels" element={<List></List>}></Route>
        <Route path="/hotel/:id" element={<Hotel></Hotel>}></Route>
      </Routes>
      <Footer></Footer>
    </div >
  );
}

export default App;
