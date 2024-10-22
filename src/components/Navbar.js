"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
// import Banner from "@/components/Ads";

const NavBar = () => {
  const [top, setTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 bg-white shadow-lg`}
      >
        {/* <Banner /> */}
        <div className="flex flex-row justify-between items-center py-1">
          <div className="flex flex-row justify-start md:px-12 md:mx-12 items-center text-center font-semibold">
            <Link href="/">
              <div className="flex items-center">
                <img
                  src="/logo1.png"
                  alt="N9 Solution Logo"
                  className="h-10 w-auto"
                />
              </div>
            </Link>
          </div>
          <div className="group flex flex-col items-center">
            <button
              className="p-2 rounded-lg lg:hidden text-blue-900"
              onClick={handleClick}
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                  />
                )}
              </svg>
            </button>
            <ul
              className={`lg:flex lg:flex-row lg:space-x-6 lg:p-5 ${
                isOpen ? "block" : "hidden"
              } absolute top-16 right-0 bg-white lg:relative lg:bg-transparent lg:top-auto lg:right-auto lg:w-auto`}
            >
              <li>
                <Link
                  href="/Popularcourses"
                  className="font-bold text-blue-900 hover:bg-blue-100 inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/Trainer"
                  className="font-bold text-blue-900 hover:bg-blue-100 inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl"
                >
                  Trainer
                </Link>
              </li>
              <li>
                <Link
                  href="Blog"
                  className="font-bold text-blue-900 hover:bg-blue-100 inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="Career"
                  className="font-bold text-blue-900 hover:bg-blue-100 inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="/About"
                  className="font-bold text-blue-900 hover:bg-blue-100 inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/Contact"
                  className="font-bold text-blue-900 hover:bg-blue-100 inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
