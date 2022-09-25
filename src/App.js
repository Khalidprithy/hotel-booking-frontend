import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Home from "./components/Pages/Home";
import Hotel from "./components/Pages/Hotel";
import List from "./components/Pages/List";
import Footer from "./components/Shared/Footer";
// import { useContext } from "react";
// import { AuthContext } from "./context/AuthContext";

function App() {

  // const RequiredAuth = ({ children }) => {
  //   const { user } = useContext(AuthContext);

  //   if (!user) {
  //     return <Navigate to='/login' />
  //   }

  //   return children;
  // }


  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/hotels" element={<List></List>}></Route>
        <Route path="/hotels/:id" element={<Hotel></Hotel>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
      <Toaster></Toaster>
    </div >
  );
}

export default App;
