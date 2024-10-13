import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Label from "./ui/label"; // Adjust path as necessary
import Input from "./ui/input"; // Adjust path as necessary
import { cn } from "../../../lib/utils";
import { Link } from "react-router-dom";

const Signin = () => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

  const controls = useAnimation();

  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    controls.start({
      backgroundColor: newTheme === "dark" ? "#000" : "#fff",
      transition: { duration: 0.5 },
    });
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
    controls.set({ backgroundColor: savedTheme === "dark" ? "#000" : "#fff" });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <motion.div
      animate={controls}
      className="h-screen flex items-center justify-center"
      style={{ backgroundColor: theme === "dark" ? "#000" : "#fff" }} 
    >
      <motion.div
        animate={{
          backgroundColor: theme === "dark" ? "#1a1a1a" : "#ffffff",
          color: theme === "dark" ? "#ffffff" : "#000000",
        }}
        transition={{ duration: 0.5 }}
        className={cn(
          "max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 border-2",
          theme === "dark" ? "border-neutral-700" : "border-neutral-300" // Dynamic border color for the card
        )}
      >
        {/* Theme Toggle Button */}
        <div className="flex items-center justify-end">
          <label className="relative inline-flex items-center cursor-pointer mr-2">
            <input
              type="checkbox"
              className="sr-only"
              checked={theme === "dark"}
              onChange={handleThemeToggle}
            />
            <div className="w-12 h-6 bg-gray-200 dark:bg-gray-800 rounded-full shadow-inner"></div>
            <div
              className={`absolute w-6 h-6 bg-white rounded-full shadow transition-transform duration-300 ease-in-out ${
                theme === "dark" ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </label>
          <span className="text-xl">{theme === "dark" ? "🌙" : "☀️"}</span>
        </div>

        <h2 className="font-bold text-xl">
          Welcome to EI Classroom
        </h2>
        <p className="text-sm max-w-sm mt-2">
          Log in to access your classroom.
        </p>
        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email" style={{ color: theme === "dark" ? "#ffffff" : "#000000" }}>Email Address</Label>
            <Input
              id="email"
              placeholder="projectmayhem@fc.com"
              type="email"
              className={cn(
                theme === "dark" ? "bg-zinc-800 border-white text-white placeholder-gray-400" : "bg-gray-50 border-black text-black placeholder-gray-600"
              )}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password" style={{ color: theme === "dark" ? "#ffffff" : "#000000" }}>Password</Label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              className={cn(
                theme === "dark" ? "bg-zinc-800 border-white text-white placeholder-gray-400" : "bg-gray-50 border-black text-black placeholder-gray-600"
              )}
            />
          </LabelInputContainer>

          <button
            className={cn(
              "relative block w-full h-10 rounded-md font-medium transition duration-200 ease-in-out shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]",
              theme === "dark"
                ? "bg-gradient-to-br from-black to-zinc-900 text-white"
                : "bg-gradient-to-br from-neutral-600 to-neutral-800 text-white"
            )}
            type="submit"
          >
            Log In
            <BottomGradient />
          </button>
        </form>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        <p className="text-sm max-w-sm mt-2">
          Don't have an account? <Link to='/signup' className='text-blue-500 underline'>Sign up!</Link>
        </p>
      </motion.div>
    </motion.div>
  );
};

// Helper Component for Label and Input Container
const LabelInputContainer = ({ children, className }) => (
  <div className={`flex flex-col ${className}`}>
    {children}
  </div>
);

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

export default Signin;