import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";

const store = configureStore({
  reducer: rootReducer,
});
function Root() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation speed
      once: true,    // animate only first time
      offset: 80,
    });
  }, []);

  return <App />;
}


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
     <Root />
     </Provider>
  
  </StrictMode>
);
