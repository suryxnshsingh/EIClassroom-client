import React, { useState, useEffect } from "react";
import Label from "./ui/label";
import Input from "./ui/input";
import { cn } from "../../../lib/utils";

const Signin = () => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );
  const [loading, setLoading] = useState(true); // Loading state

  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }

    // Simulate loading effect (e.g., fetching data)
    setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
    }, 2000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  // If loading, display skeleton
  if (loading) {
    return <SkeletonSignin />;
  }

  return (
    <div className="bg-white dark:bg-black dark:bg-dot-white/[0.2] bg-dot-black/[0.2] h-screen flex items-center justify-center">
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 border-0 md:border-2 border-neutral-300 dark:border-neutral-700  bg-white dark:bg-black">
      {/* Theme Toggle Button */}
      <div className="flex items-center justify-center mb-6">
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

        <h2 className="font-bold text-center text-xl text-neutral-800 dark:text-neutral-200">
          EI Classroom
        </h2>
        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="••••••••" type="password" />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Sign in &rarr;
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center">
            Don't have an account? <a href="/signup" className="text-blue-500 underline">Create Account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

// Skeleton Loader for the Signin component
const SkeletonSignin = () => {
  return (
    <div className="bg-white dark:bg-black dark:bg-dot-white/[0.2] bg-dot-black/[0.2] h-screen flex items-center justify-center">
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 border-2 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-black h-[400px]"> {/* Adjusted height */}
        <div className="animate-pulse">
          <div className="flex items-center justify-end mb-4">
            <div className="w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full shadow-inner"></div>
          </div>

          <div className="h-8 bg-gray-300 dark:bg-gray-700 mb-6 w-32 mx-auto"></div>

          <div className="w-full h-[42px] bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>

          <div className="w-full h-[42px] bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>

          <div className="w-full h-[40px] bg-gray-300 dark:bg-gray-700 rounded mb-6"></div>

          <div className="bg-gray-300 dark:bg-gray-700 h-[1px] w-full mb-8"></div>

          <div className="h-4 bg-gray-300 dark:bg-gray-700 w-48 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};

export default Signin;
