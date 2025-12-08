import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Courses from "./Pages/Courses";
import Navbar from "./Components/Navbar"; 
import Courses from "./Pages/Courses";
import CourseDetails from "./Pages/CourseDetails";  

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />    {/* Navbar now works */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/details" element={<CourseDetails/>} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
