"use client"; // This marks the file as a client component

import { useEffect, useState } from "react";
<<<<<<< Updated upstream
=======

import CourseList from "../components/CourseList";

>>>>>>> Stashed changes
import { fetchMarkdownFile } from "../utils/fetchMarkdown";
import ReviewLanding from "@/components/ReviewLanding";
import Hero2 from "@/components/Hero2";
import CourseSlide from "@/components/CourseSlide";
import WhyUs from "@/components/WhyUs";
import Gifpage from "@/components/Gifpage";
import LandingTrainers from "@/components/LandingTrainers";
// import Banner from '@/components/Ads';

export default function Home() {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMarkdownFile("/markdown/courselist.md");
        setCourseData(data);
      } catch (error) {
        console.error("Error fetching markdown file:", error);
      }
    };
    fetchData();
  }, []);

  return (

    <div className="bg-[#F6F8FC] ">
    
      <Hero2 />
      <Gifpage />

      {/* <CourseList courseData={courseData} /> */}
      <CourseSlide course={courseData} />
     

      {/* <CourseList courseData={courseData} /> */}
      <WhyUs />
      <LandingTrainers />
      <ReviewLanding />
    </div>
  );
}
