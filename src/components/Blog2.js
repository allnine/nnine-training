"use client";

import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const carouselImages = [
  { id: 1, image: "carousel1.png", alt: "First Slide Image" },
  { id: 2, image: "carousel2.png", alt: "Second Slide Image" },
  { id: 3, image: "carousel3.png", alt: "Third Slide Image" },
];

const trendingPosts = [
  { id: 1, title: "Bespoke software solutions for your unique business needs", description: "Lorem ipsum dolor sit amet consectetur. Dignissim sit sagittis id ullamcorper lectus ac ac.", image: "blog.png", link: "https://example.com/blog1" },
  { id: 2, title: "Bespoke software solutions for your unique business needs", description: "Lorem ipsum dolor sit amet consectetur. Dignissim sit sagittis id ullamcorper lectus ac ac.", image: "blog.png", link: "https://example.com/blog1" },
  { id: 1, title: "Bespoke software solutions for your unique business needs", description: "Lorem ipsum dolor sit amet consectetur. Dignissim sit sagittis id ullamcorper lectus ac ac.", image: "blog.png", link: "https://example.com/blog1" },
  { id: 1, title: "Bespoke software solutions for your unique business needs", description: "Lorem ipsum dolor sit amet consectetur. Dignissim sit sagittis id ullamcorper lectus ac ac.", image: "blog.png", link: "https://example.com/blog1" },
  { id: 1, title: "Bespoke software solutions for your unique business needs", description: "Lorem ipsum dolor sit amet consectetur. Dignissim sit sagittis id ullamcorper lectus ac ac.", image: "blog.png", link: "https://example.com/blog1" },
  { id: 1, title: "Bespoke software solutions for your unique business needs", description: "Lorem ipsum dolor sit amet consectetur. Dignissim sit sagittis id ullamcorper lectus ac ac.", image: "blog.png", link: "https://example.com/blog1" },
  // Additional blog items...
];

const featuredBlogs = [
  { id: 1, title: "Bespoke software solutions for your unique business needs", description: "Lorem ipsum dolor sit amet consectetur. Dignissim sit sagittis id ullamcorper lectus ac ac.", image: "blog.png", link: "https://example.com/blog1" },
  { id: 2, title: "Bespoke software solutions for your unique business needs", description: "Lorem ipsum dolor sit amet consectetur. Dignissim sit sagittis id ullamcorper lectus ac ac.", image: "blog.png", link: "https://example.com/blog1" },
  { id: 2, title: "Bespoke software solutions for your unique business needs", description: "Lorem ipsum dolor sit amet consectetur. Dignissim sit sagittis id ullamcorper lectus ac ac.", image: "blog.png", link: "https://example.com/blog1" },
  { id: 2, title: "Bespoke software solutions for your unique business needs", description: "Lorem ipsum dolor sit amet consectetur. Dignissim sit sagittis id ullamcorper lectus ac ac.", image: "blog.png", link: "https://example.com/blog1" },
  { id: 2, title: "Bespoke software solutions for your unique business needs", description: "Lorem ipsum dolor sit amet consectetur. Dignissim sit sagittis id ullamcorper lectus ac ac.", image: "blog.png", link: "https://example.com/blog1" },
  { id: 2, title: "Bespoke software solutions for your unique business needs", description: "Lorem ipsum dolor sit amet consectetur. Dignissim sit sagittis id ullamcorper lectus ac ac.", image: "blog.png", link: "https://example.com/blog1" },
  // Additional blog items...
];
const otherBlogs = [

  { id: 1, title: "Bespoke software solutions for your unique business needs", description: "Lorem ipsum dolor sit amet consectetur. Dignissim sit sagittis id ullamcorper lectus ac ac.", image: "blog.png", link: "https://example.com/blog1" },
  { id: 2, title: "Bespoke software solutions for your unique business needs", description: "Lorem ipsum dolor sit amet consectetur. Dignissim sit sagittis id ullamcorper lectus ac ac.", image: "blog.png", link: "https://example.com/blog1" },
  { id: 2, title: "Bespoke software solutions for your unique business needs", description: "Lorem ipsum dolor sit amet consectetur. Dignissim sit sagittis id ullamcorper lectus ac ac.", image: "blog.png", link: "https://example.com/blog1" },
  { id: 2, title: "Bespoke software solutions for your unique business needs", description: "Lorem ipsum dolor sit amet consectetur. Dignissim sit sagittis id ullamcorper lectus ac ac.", image: "blog.png", link: "https://example.com/blog1" },
  { id: 2, title: "Bespoke software solutions for your unique business needs", description: "Lorem ipsum dolor sit amet consectetur. Dignissim sit sagittis id ullamcorper lectus ac ac.", image: "blog.png", link: "https://example.com/blog1" },
  { id: 2, title: "Bespoke software solutions for your unique business needs", description: "Lorem ipsum dolor sit amet consectetur. Dignissim sit sagittis id ullamcorper lectus ac ac.", image: "blog.png", link: "https://example.com/blog1" },
  // Additional blog items...

]

const Blog2 = ({ title, description, image }) => {
  const router = useRouter();

  const handleReadMore = () => {
    router.push("/Blog/BlogDetails");
  };

  return (
    <div className="bg-[#D8E1FA] rounded-3xl gap-[10px] mt-4 shadow-bottom flex-shrink-0 w-full max-w-[300px] md:max-w-[376px] mx-auto">
      <div className="flex items-center mt-3 ml-5 mr-5">
        <img src={image} alt="" className='mt-4 w-full h-[200px] object-cover rounded-t-3xl' />
      </div>
      <div className='gap-[8px] p-2'>
        <h1 className="text-xl font-poppins font-semibold bg-gradient-to-r from-[#071144] to-[#738FF2] bg-clip-text text-transparent">
          {title}
        </h1>
        <h3 className='font-poppins text-sm'>{description}</h3>
      </div>
      <div className='flex items-center justify-center'>
        <button
          onClick={handleReadMore}
          className="bg-[#0C07F9] text-white font-poppins py-2 px-4 rounded-3xl transition-colors mb-10 font-bold"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

const BlogList = () => {
  const trendingRef = useRef(null);
  const featuredRef = useRef(null);
 
  const otherRef = useRef(null);
  

  const scrollLeft = (ref) => {
    ref.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = (ref) => {
    ref.current.scrollBy({ left: 300, behavior: 'smooth' });
  };
  
  return (
    <div className="pt-24 mx-auto max-w-screen-xl mb-5">
      {/* Carousel for Sliding Photos */}
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={1000}
        stopOnHover={false}
      >
        {carouselImages.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.alt} className="w-full h-[300px] md:h-[400px] object-cover" />
          </div>
        ))}
      </Carousel>

      {/* Trending Blogs Section */}
      <div className="mt-16 relative">
        <h2 className="text-2xl md:text-3xl font-poppins font-semibold text-[#071144] text-center">Trending Blogs</h2>
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={() => scrollLeft(trendingRef)}
            className="bg-gray-300 p-2 rounded-full z-10 transform -translate-x-4 md:-translate-x-8"
          >
            {"<"}
          </button>
          <div ref={trendingRef} className="flex overflow-x-auto space-x-4 md:space-x-6 px-4 md:px-6 no-scrollbar">
            {trendingPosts.map(blog => (
              <Blog2
                key={blog.id}
                title={blog.title}
                description={blog.description}
                image={blog.image}
              />
            ))}
          </div>
          <button
            onClick={() => scrollRight(trendingRef)}
            className="bg-gray-300 p-2 rounded-full z-10 transform translate-x-4 md:translate-x-8"
          >
            {">"}
          </button>
        </div>
      </div>

      {/* Featured Blogs Section */}
      <div className="mt-16 relative">
        <h2 className="text-2xl md:text-3xl font-poppins font-semibold text-[#071144] text-center">Featured Blogs</h2>
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={() => scrollLeft(featuredRef)}
            className="bg-gray-300 p-2 rounded-full z-10 transform -translate-x-4 md:-translate-x-8"
          >
            {"<"}
          </button>
          <div ref={featuredRef} className="flex overflow-x-auto space-x-4 md:space-x-6 px-4 md:px-6 no-scrollbar">
            {featuredBlogs.map(blog => (
              <Blog2
                key={blog.id}
                title={blog.title}
                description={blog.description}
                image={blog.image}
              />
            ))}
          </div>
          <button
            onClick={() => scrollRight(featuredRef)}
            className="bg-gray-300 p-2 rounded-full z-10 transform translate-x-4 md:translate-x-8"
          >
            {">"}
          </button>
        </div>
      </div>
      {/* Other Blogs Section */}
      <div className="mt-16 relative">
        <h2 className="text-2xl md:text-3xl font-poppins font-semibold text-[#071144] text-center">OtherBlogs</h2>
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={() => scrollLeft(otherRef)}
            className="bg-gray-300 p-2 rounded-full z-10 transform -translate-x-4 md:-translate-x-8"
          >
            {"<"}
          </button>
          <div ref={otherRef} className="flex overflow-x-auto space-x-4 md:space-x-6 px-4 md:px-6 no-scrollbar">
            {otherBlogs.map(blog => (
              <Blog2
                key={blog.id}
                title={blog.title}
                description={blog.description}
                image={blog.image}
              />
            ))}
          </div>
          <button
            onClick={() => scrollRight(otherRef)}
            className="bg-gray-300 p-2 rounded-full z-10 transform translate-x-4 md:translate-x-8"
          >
            {">"}
          </button>
        </div>
      </div>

      {/* CSS to Hide Scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>



{/* 
      <div className='flex items-center justify-center mt-20 mb-20'>
        <button
        onClick={handleposts}
        className='bg-[#0C07F9] text-2xl  rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none p-2 text-white font-poppins shadow-xl'> Loading more....</button>
       
      </div> */}
    </div>
  );
};

export default Blog2;
