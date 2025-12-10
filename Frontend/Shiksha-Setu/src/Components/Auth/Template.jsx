import React from "react";
import frameImage from "../../assets/Auth/frame.png";
import SignupForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";
import { useSelector } from "react-redux";

const Template = ({ title, desc1, desc2, image, formType }) => {
  // const { loading } = useSelector((state) => state.auth);   uncomment after redux
  const loading = false;//dummy for redux

  return (
    // Assuming bg-[#000814] maps to richblack-900
    <div className=" bg-richblack-900 h-[calc(100vh-4.8rem)] overflow-hidden">
      {loading ? (
        <div className=" min-h-screen flex justify-center items-center">
          {/* Enhanced Spinner: Pulse animation */}
          <div className="spinner animate-pulse w-10 h-10 rounded-full bg-blue-200"></div>
        </div>
      ) : (
        <div className="flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0">
          
          {/* LEFT CONTENT BLOCK: Slide-In from Left with Staggered Elements */}
          <div className="w-11/12 max-w-[450px] animate-slideInLeft [animation-delay:0.1s] [animation-duration:0.6s]">
            <h2 className="text-richblack-5 font-semibold text-[2.2rem] leading-[2.375rem]">
              {title}
            </h2>
         
            {/* Description Text: Fades in slightly later */}
            <p className="text-[1.125rem] leading[1.625rem] mt-4 animate-fadeIn [animation-delay:0.3s]">
              <span className="text-richblack-100">{desc1}</span>
              <br />
              <span className="text-blue-100 italic">{desc2}</span>
            </p>

            {/* LoginForm is rendered here, its internal elements will have their own animations */}
            {formType === "Register" ? <SignupForm /> : <LoginForm />}

            {/* OR Divider: Fades in */}
            <div className="flex w-full items-center my-4 gap-x-2 animate-fadeIn [animation-delay:0.8s]">
              <div className="w-full h-[1px] bg-richblack-700"></div>
              <p className="text-richblack-700 font-medium leading[1.375rem]">
                OR
              </p>
              <div className="w-full h-[1px] bg-richblack-700"></div>
            </div>

            {/* Google Button: Responsive hover effect */}
            <button
              className="w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
            border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 transition-all duration-200 hover:bg-richblack-700/50 hover:shadow-lg hover:shadow-richblack-700/50"
            >
              <FcGoogle />
              <p className=" text-white">Sign Up with Google</p>
            </button>
          </div>

          {/* RIGHT IMAGE BLOCK: Slide-In from Right with Dynamic Effects */}
          <div className="flex items-center justify-center relative w-11/12 max-w-[450px] animate-slideInRight [animation-delay:0.3s] [animation-duration:0.6s]">
            
            {/* Frame Image: Slow, continuous, subtle pulse for background energy */}
            <img
              src={frameImage}
              alt="Pattern"
              width={558}
              height={504}
              loading="lazy"
              className="animate-pulse duration-[5s] opacity-70"
            />

            {/* Student Image: The Floating Animation */}
            <img
              src={image}
              alt="Students"
              width={558}
              height={490}
              loading="lazy"
              className="absolute top-[16%] right-[6%] animate-float"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Template;