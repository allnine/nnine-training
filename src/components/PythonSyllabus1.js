"use client";

import React, { useState } from "react";
import PythonClassType from "./PythonClassType";


const PythonSyllabus1 = () => {
  // State to manage dropdown visibility for each section
  const [openDropdowns, setOpenDropdowns] = useState({});

  // Function to toggle dropdown visibility
  const toggleDropdown = (section) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Array of syllabus sections
  const syllabusSections = [
    {
      title: "Introduction to Python Programming",
      lectures: [
        "Introduction to Python Programming",
        "Installation of Python and pip package manager",
        "Introduction to Google Colab, Jupyter Notebook / IDE",
        "Python Program Structure and Statements",
        "Arithmetic Operators and Expressions",
        "Variable Declaration and Naming Conventions",
        "Data Types: int, float, complex",
      ],
      info: "7 lectures • 2 hours",
    },
    {
      title: "Conditional Statements and Iteration",
      lectures: [
        "Conditional Statements and Recursion",
        "Iteration and Looping Constructs",
        "String Manipulation in Python",
        "Built-in Data Types: Lists, Tuples, Dictionaries",
      ],
      info: "4 lectures • 1.5 hours",
    },
    {
      title: "Functions and Object-Oriented Programming",
      lectures: [
        "Functions and Modular Programming",
        "Object-Oriented Programming (OOP) Concepts",
      ],
      info: "2 lectures • 1 hour",
    },
    {
      title: "Exception Handling and File Operations",
      lectures: [
        "Handling Exceptions and File Operations",
        "Introduction to Exceptions Handling",
        "File Input and Output Operations",
      ],
      info: "3 lectures • 1 hour",
    },
    {
      title: "Introduction to SQL in Python",
      lectures: [
        "Introduction to SQL in Python",
        "Creating and Managing Databases",
        "Defining Table Structures and Constraints",
        "SQL Data Manipulation Language (DML): INSERT, SELECT, UPDATE, DELETE statements",
        "Filtering Data with WHERE clause",
      ],
      info: "5 lectures • 2 hours",
    },
    {
      title: "Version Control with Git and GitHub",
      lectures: [
        "Installation and Configuration of Git Bash",
        "Introduction to Git Version Control System",
        "Setting up a GitHub Account and Profile",
        "Repository Management: Creating, Initializing, and Cloning Repositories",
        "Working with Branches and Merging Changes",
        "Remote Repository Management: Pushing and Pulling Changes",
      ],
      info: "6 lectures • 1.5 hours",
    },
    {
      title: "Data Analysis with Pandas",
      lectures: [
        "Introduction to Pandas Library",
        "DataFrame Data Structure",
        "Reading and Writing CSV Files",
        "Data Manipulation and Analysis with Pandas",
        "Basic Data Visualization with Matplotlib, Seaborn, and Plotly",
      ],
      info: "5 lectures • 2 hours",
    },
    {
      title: "Project Work",
      lectures: [
        "Apply learned concepts to real-world projects:",
        "Data analysis and visualization",
        "Web development with Flask or Django",
        "Automation scripts",
        "Machine Learning projects",
      ],
      info: "4 lectures • 3 hours",
    },
  ];
  

  return (
    <div className="w-full flex flex-col md:flex-row sm:flex-row sm:mt-4">
      <div className="w-[80%] flex flex-col mt-14">
      <div className="w-full">
  <h1 className="font-bold text-3xl ml-8 p-[10px] font-poppins mb-[37px] text-[#003366]">
    Course Syllabus
  </h1>
  {syllabusSections.map((section, index) => (
    <div key={index} className={`relative mx-auto w-[400px] md:w-full`}>
      <div
        className={`border-2 px-4 border-[#004AAD] border-opacity-[5%] transition-all   ${
          !openDropdowns[section.title] && index !== syllabusSections.length - 1
            ? "border-b-5"
            : ""
        }`}
        style={{ width: '100%', maxWidth: '800px', minWidth: '300px' }} // Setting max and min widths
      >
        <div
          className="flex items-center p-[10px]"
          onClick={() => toggleDropdown(section.title)}
        >
          <button className="dropdown-button mr-2">
            <img
              src="/dropdown.svg"
              alt="Toggle Dropdown"
              className="mr-0 w-[11px] h-[14px]"
            />
          </button>
          <span className="font-semibold font-poppins">
            {section.title}
          </span>
          <span className="hidden md:block text-right ml-auto font-poppins">
            {section.info}
          </span>
        </div>
      </div>
      {openDropdowns[section.title] && (
        <div className="relative w-full border border-[#004AAD] border-opacity-[5%] z-10 mt-1 mr-4">
          <ul className="p-2">
            {section.lectures.map((lecture, idx) => (
              <li key={idx} className="py-1">
                <span className="mx-1">•</span>
                {lecture}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  ))}
</div>

      </div>
      <PythonClassType/>
    </div>
  );
};

export default PythonSyllabus1;