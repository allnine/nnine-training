"use client"; // This marks the file as a client component

import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import CourseList from "../components/CourseList";
import { fetchMarkdownFile } from "../utils/fetchMarkdown";
import Hero2 from "@/components/Hero2";
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

  console.log(courseData); // This should now show the data

  return (
    <div>
      <br />
   <Hero2/>
      <CourseList courseData={courseData} />
    </div>
  );
}
