import React from "react";
import RegisterImg from "../assets/Auth/Register.webp"; 
import Template from "../Components/Auth/Template";

const Register = () => {
  return (
    <Template
      title="Join the millions learning  with SikshaSetu "
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={RegisterImg}
      formType="Register"

    />
  );
};

export default Register;