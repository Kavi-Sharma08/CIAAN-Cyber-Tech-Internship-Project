import React, { useState } from "react";
import SignupContainer from "../containers/SignupContainer";
import Input from "./Input";
import getFormConfig from "../config/SignupFormConfig";
import axios from "axios";
const AuthPage = () => {
  const [Login, setLogin] = useState(false);
  const [FormData, setFormData] = useState({
    email : "Kavi@gmail.com",
    password : "Kavi@123"
  })  

  const formConfig = getFormConfig(Login);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Login) {
        console.log(FormData)
      
    } else {
        const data = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/signup` , FormData)
      
    }
  };

  return (
    <SignupContainer>
      <h2 className={`text-3xl font-bold text-center mb-6 ${formConfig.headingColor}`}>
        {formConfig.heading}
      </h2>
      <p className={`text-center ${formConfig.subtextColor} mb-8`}>
        {formConfig.subtext}
      </p>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          placeholder="your@email.com"
          value={FormData.email}
          onChange={e => setFormData(prev=>({...prev ,email : e.target.value}))}
        />
        <Input
          label="Password"
          type="password"
          placeholder={Login ? "Enter your password" : "Create a password"}
          value={FormData.password}
          onChange={e => setFormData(prev=>({...prev , password : e.target.value}))}
        />
        <button
          type="submit"
          className="w-full py-3 bg-blue-700 text-white text-lg rounded-xl font-semibold shadow-md transition-all duration-200 focus:ring-2 focus:ring-[#2563eb]/60 cursor-pointer active:scale-95"
        >
          {formConfig.buttonText}
        </button>
      </form>
      <hr className="my-6 border-[#393552]" />
      <p className="text-center text-[#908caa]">
        {formConfig.promptText}
        <button
          onClick={() => setLogin((prev) => !prev)}
          className="ml-2 text-blue-600 font-semibold hover:underline"
        >
          {formConfig.promptButtonText}
        </button>
      </p>
    </SignupContainer>
  );
};

export default AuthPage;
