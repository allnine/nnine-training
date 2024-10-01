import React from "react";

const Gifpage = () => {
  // Define an array of items to map over
  const items = [
    {
      imgSrc: "design.gif",
      title: "Graphics & Multimedia",
    },
    {
      imgSrc: "redesign.gif",
      title: "Web & Software",
    },
    {
      imgSrc: "media-mix.gif",
      title: "Digital Marketing",
    },
    {
      imgSrc: "cybersecurity.gif",
      title: "Cyber Security",
    },
    {
      imgSrc: "uploading.gif",
      title: "Cloud Computing",
    },
  ];

  return (
    <div>
      <div>
  <div className="flex justify-center items-center lg:h-[200px] lg:bg-[url('/bg1.png')] bg-cover bg-center">
    <div className="grid grid-cols-2 gap-5 lg:flex lg:flex-row lg:gap-9 justify-center">
      {items.map((item, index) => (
        <div
          key={index}
          className="h-[150px] w-[150px] shadow-2xl rounded-xl flex flex-col items-center justify-center bg-[#FFFFFF]"
        >
          <img
            src={item.imgSrc}
            className="h-[50px] w-[50px]"
            alt={item.title}
          />
          <h1 className="font-Quicksand font-bold pl-7 text-xl">
            {item.title}
          </h1>
        </div>
      ))}
    </div>
  </div>
</div>

    </div>
  );
};

export default Gifpage;
