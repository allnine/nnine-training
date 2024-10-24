"use client";
import React, { useState } from "react";
import PythonDjangoClassType from "./PythonDjangoClassType";
import AWSSolutionClassType from "./AWSSolutionClassType";
const AWSSolutionSyllabus1 = () => {
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
      title: "AWS Fundamentals",
      lectures: [
        "Introduction to AWS",
        "AWS Identity and Access Management (IAM)",
      ],
      info: "6 lectures • 2 hours",
    },
    {
      title: "Compute Services",
      lectures: [
        "Amazon EC2 (Elastic Compute Cloud)",
        "AWS Lambda",
      ],
      info: "5 lectures • 1.5 hours",
    },
    {
      title: "Storage Services",
      lectures: [
        "Amazon S3 (Simple Storage Service)",
        "Amazon EBS (Elastic Block Store)",
      ],
      info: "5 lectures • 2 hours",
    },
    {
      title: "Database Services",
      lectures: [
        "Amazon RDS (Relational Database Service)",
        "Amazon DynamoDB",
      ],
      info: "8 lectures • 2.5 hours",
    },
    {
      title: "Networking Services",
      lectures: [
        "Amazon VPC (Virtual Private Cloud)",
        "AWS Direct Connect",
      ],
      info: "4 lectures • 1.5 hours",
    },
    {
      title: "Application Integration Services",
      lectures: [
        "Amazon API Gateway",
        "Amazon SQS (Simple Queue Service)",
      ],
      info: "3 lectures • 1.5 hours",
    },
    {
      title: "Monitoring and Management Services",
      lectures: [
        "Amazon CloudWatch",
        "AWS CloudFormation",
      ],
      info: "8 lectures • 3 hours",
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
            <div
              key={index}
              className={`relative w-full max-w-[800px]`}
            >
              <div
                className={`border-2 px-4 border-[#004AAD] border-opacity-[5%] transition-all ${
                  !openDropdowns[section.title] &&
                  index !== syllabusSections.length - 1
                    ? "border-b-5"
                    : ""
                }`}
              >
                <div
                  className="flex items-center p-[10px] cursor-pointer"
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
                <div className="w-full border border-[#004AAD] border-opacity-[5%] z-10 mt-1 mr-4">
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
      <AWSSolutionClassType/>
    </div>
  );
};
export default AWSSolutionSyllabus1;