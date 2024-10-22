import React from "react";
import { useRouter } from "next/navigation";

function Card2(props) {
  const router = useRouter(); // Use useRouter hook

  // Function to handle enrollment
  const handleEnrollNow = () => {
    // Navigate user to the corresponding Google Form URL for enrollment
    window.open(props.googleFormUrl, "_blank");
  };

  // Function to handle viewing syllabus
  const handleViewSyllabus = () => {
    router.push(`${props.syllabusUrl}`);
    // const pdfUrl = props.syllabusPdfUrl; // Get the syllabus PDF URL
    // const width = screen.availWidth;
    // const height = screen.availHeight;
    // const windowFeatures = `width=${width}, height=${height}`;
    // window.open(pdfUrl, windowFeatures);
    // Navigate user to the syllabus page
    // router.push(`/Popularcourses/${course.id}/syllabus`); // Use router.push for navigation
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 lg:gap-6 ">
      <div className="relative w-[300px] sm:w-[700px] md:w-96 lg:w-80 rounded-lg shadow-2xl bg-[#FBF3F3] max-w-sm rounded-bl[40px] rounded-bl-[40px] rounded-tr-[40px] rounded-tl-[10px] flex-shrink-0 overflow-hidden mx-3 my-5 transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl">
        <img
          src={props.imageUrl}
          alt=""
          className="w-full h-[150px] object-cover shadow-xl"
        />
        <div className="px-4 py-4">
          <h1 className="font-bold font-poppins text-center text-base sm:text-2xl mb-2">
            {props.title}
          </h1>
          <h2 className="font-medium text-center font-Montserrat text-xs">
            Duration: {props.courseDuration}
          </h2>
        </div>
        <div className="flex flex-row justify-center gap-3 pb-4 px-4">
          <button
            onClick={handleViewSyllabus}
            className="bg-[#0765BB]  rounded-full px-3 py-1 text-[#FFFFFF] font-poppins  font-bold shadow-2xl"
          >
            View Syllabus
          </button>
          <button
            onClick={handleEnrollNow}
            className="bg-[#28F455] rounded-full px-3 py-1 text-[#FFFFFF]  font-poppins  font-bold"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card2;
