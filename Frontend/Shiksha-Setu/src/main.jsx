import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS after the app mounts
function Root() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation speed
      once: true,     // animation only once
    });
  }, []);

  return <App />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
