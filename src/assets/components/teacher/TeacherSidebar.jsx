import React, { Children, useState, useEffect } from 'react';
import { cn } from '../../../../lib/utils';
import { 
  LayoutDashboard,
  NotebookPen,
  FlaskConical,
  LibraryBig,
  NotepadText,
  UserCircle, 
  Settings, 
  LogOut 
} from 'lucide-react';
import { Sidebar, SidebarBody, SidebarLink } from '../ui/sidebar';
import {  Routes, Route, Link } from 'react-router-dom';
import Dash from './Dash';
import Assignment from './Assignment';
import Tests from './Tests';
import Books from './Books';
import Notes from './Notes';
import Profile from './Profile';

const TeacherSidebar = () => {

  const [theme, setTheme] = useState(
    typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

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

    setTimeout(() => {
      setLoading(false);
    }, 50);
  }, []);

  const [open, setOpen] = useState(false);

  const links = [
    {
      label: "Dashboard",
      href: "/teachers/",
      icon: <LayoutDashboard className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    },
    {
      label: "Assignment",
      href: "/teachers/assignment",
      icon: <NotebookPen className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    },
    {
      label: "Tests",
      href: "/teachers/tests",
      icon: <FlaskConical className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    },
    {
      label: "Books",
      href: "/teachers/books",
      icon: <LibraryBig className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    },
    {
      label: "Notes",
      href: "/teachers/notes",
      icon: <NotepadText className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    },
    {
      label: "Profile",
      href: "/teachers/profile",
      icon: <UserCircle className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    },
    {
      label: "Settings",
      href: "/teachers/settings",
      icon: <Settings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    },
    {
      label: "Logout",
      href: "/signin",
      icon: <LogOut className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    }
  ];

  return (
    <div className={cn(
      " flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
      "h-screen"
    )}>
      <Sidebar open={open} setOpen={setOpen} >
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-14 flex flex-col gap-2">
              {links.map((link, idx) => (
                <Link to={link.href} key={idx} className="flex items-center gap-2 p-2 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-lg">
                {link.icon}
                <span className='text-neutral-700 dark:text-neutral-200 text-md'>{link.label}</span>
                </Link>
              ))}
            </div>
            <div className="flex items-center justify-center mt-9">
          <label className="relative inline-flex items-center cursor-pointer ">
            <input
              type="checkbox"
              className="sr-only"
              checked={theme === "dark"}
              onChange={handleThemeToggle}
            />
            <div className="w-6 h-4 bg-gray-200 dark:bg-neutral-900 rounded-full shadow-inner"></div>
            <div
              className={`absolute w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 ease-in-out ${
                theme === "dark" ? "translate-x-2" : "translate-x-0"
              }`}
            ></div>
          </label>
          {/* <span className="text-lg">{theme === "dark" ? "🌙" : "☀️"}</span> */}
        </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Suryansh Singh",
                href: "/teachers/profile",
                icon: (
                  <div className="h-7 w-7 flex-shrink-0 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                )
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
};

const Logo = () => {
  return (
    <a
      href="#"
      className="font-normal flex space-x-2 items-center text-md text-black dark:text-white py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <span className="font-medium text-black dark:text-white whitespace-pre opacity-0 animate-fadeIn">
        EI Classroom
      </span>
    </a>
  );
};

const LogoIcon = () => {
  return (
    <a
      href="#"
      className="font-normal flex space-x-2 items-center text-md text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </a>
  );
};

const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className=" rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        <div className='p-2 md:p-10 rounded-tl-2xl  w-screen h-screen bg-white dark:bg-neutral-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'>
        <div className=' flex items-center justify-center text-black  dark:text-white'>
          <Routes>
            <Route path="/" element={<Dash />} />
            <Route path="/assignment" element={<Assignment />} />
            <Route path="/tests" element={<Tests />} />
            <Route path="/books" element={<Books />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
          </div>
          </div>
      </div>
    </div>
  );
};

const SettingsPage = () => <div>Settings Page</div>;

export default TeacherSidebar;