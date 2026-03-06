import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Logo } from "../Components/index";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../store/authSlice";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, watch } = useForm();
  const [error, setError] = useState("");

  const onSubmit = (formData) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((u) => u.email === formData.email)) {
      setError("User with this email already exists");
      return;
    }

    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      movies: [],
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    dispatch(authLogin({ userData: newUser }));
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    navigate("/protectedsearch");
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-800">
      <div className="mx-auto w-full max-w-lg bg-gray-200 p-10 border border-black/10">
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Signup</h2>
        {error && <p className="text-red-600 mt-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            {...register("name", { required: "Name is required" })}
          />
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "Invalid email address",
              },
            })}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters.",
              },
            })}
          />
          <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            {...register("confirmpassword", {
              required: "Confirm your password",
              validate: (val) =>
                val === watch("password") || "Passwords do not Match",
            })}
          />
          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </form>

        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/signin"
            className="font-medium text-blue-600 transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
