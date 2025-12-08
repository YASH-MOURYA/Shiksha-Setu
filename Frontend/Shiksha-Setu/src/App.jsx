import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Courses from "./Pages/Courses";
import Navbar from "./Components/Navbar";  
import CourseDetail from "./Pages/CourseDetail";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/details" element={<CourseDetail />} />
      </Routes>
    </>
  );
}

export default App;
