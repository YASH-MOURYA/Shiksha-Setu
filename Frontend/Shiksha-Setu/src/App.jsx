import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Courses from "./Pages/Courses";
import Navbar from "./Components/Navbar";
import CourseDetail from "./Pages/CourseDetail";
import Tutorials from "./Pages/Tutorials";
import TutorialDetail from "./Pages/TutorialDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Home & Auth */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Courses */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/details/:id" element={<CourseDetail />} />

        {/* Tutorials */}
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/tutorials/:id" element={<TutorialDetail />} />
      </Routes>
    </>
  );
}

export default App;
