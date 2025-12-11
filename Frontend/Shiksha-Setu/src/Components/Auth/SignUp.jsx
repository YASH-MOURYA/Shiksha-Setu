import React, { useState } from 'react'
import signupImg from "../../assets/Auth/signUp.png";
import { Link } from "react-router-dom";

export const SignUp = () => {
    const [selected, setSelected] = useState("");
    return (
        <div className=' flex flex-row h-[calc(100vh-44px)] bg-[#EEEEEE] '>

            <div className=' w-[50%]  '>
                <div className='p-30 text-black flex flex-col gap-4'>
                    <form className='flex flex-col gap-4'>
                        <h2 className='font-bold text-4xl '>Welcome Back</h2>
                        <p>Create a free account now </p>
                        <div className="flex gap-4">

                            {/* Student */}
                            <label
                                className={`px-4 py-2 rounded-lg border cursor-pointer transition
          ${selected === "student"
                                        ? "bg-blue-500 text-white border-blue-500"
                                        : "border-gray-400 text-gray-700 hover:bg-gray-100"
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="choice"
                                    value="student"
                                    className="hidden"
                                    onChange={(e) => setSelected(e.target.value)}
                                />
                                Student
                            </label>

                            {/* Teacher */}
                            <label
                                className={`px-4 py-2 rounded-lg border cursor-pointer transition
          ${selected === "teacher"
                                        ? "bg-blue-500 text-white border-blue-500"
                                        : "border-gray-400 text-gray-700 hover:bg-gray-100"
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="choice"
                                    value="teacher"
                                    className="hidden"
                                    onChange={(e) => setSelected(e.target.value)}
                                />
                                Teacher
                            </label>
                        </div>


                        <div>
                            <label>Name  </label>
                            <input type='name' name='name' placeholder='name'></input>
                        </div>

                        <div>
                            <label>Email Address </label>
                            <input type='email' name='email' placeholder='xyz@gmail.com'></input>
                        </div>

                        <div>
                            <label>Password </label>
                            <input type='password' name='password' placeholder='123_abc'></input>
                        </div>




                    </form>
                    <button>Sign Up</button>

                    <p className="text-sm text-gray-600">
                        Registered Already?{" "}
                        <Link
                            to="/login"
                            className="text-blue-500 font-semibold hover:underline"
                        >
                            Login
                        </Link>
                    </p>


                </div>

            </div>


            {/* image section */}
            <div className=' w-[50%] h-full hidden md:flex'>
                <img src={signupImg} className='w-full h-full object-cover' />
            </div>





        </div>
    )
}
