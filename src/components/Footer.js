import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">
          {/* Top area: Blocks */}
          <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">
            {/* 1st block */}
            <div className="col-span-12 lg:col-span-4">
              <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                <h3 className="font-bold text-4xl mb-4">N9 Solution</h3>
                <div className="text-md font-medium text-gray-600">
                  <h5>5th Floor, White House Building</h5>
                  <p>Chabahil,Kathmandu</p>
                  <p>Nepal</p>
                </div>
              </div>
            </div>

            {/* 2nd block */}
            <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
              <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
              <ul className="text-md">
                <li className="mb-2">
                  <Link
                    href="/about"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/course"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Programs
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/contactus#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* 3rd block */}
            <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
              <h6 className="text-[#013289] text-xl font-bold mb-4">
                OUR SERVICES
              </h6>
              <ul className="text-md">
                <li className="mb-2">
                  <Link
                    href="#services"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    DevOps Service
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="#services"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Web 3.0 Devops service
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="#services"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Cloud Services & Migrations
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="#services"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    General IT Consultations
                  </Link>
                </li>
              </ul>
            </div>

            {/* 4th block */}
            <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-900">
              <div className="text-xl mb-6">Social Media Links.</div>

              <div className="text-md font-medium mb-6">
                Follow us on social media.
              </div>
              <div className="mx-auto text-center mt-2">
                <ul className="flex justify-center mb-4 md:mb-0">
                  <li>
                    <Link
                      href="https://www.linkedin.com/company/99439455/admin/feed/posts/#"
                      target="_blank"
                      className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                    >
                      <svg
                        className="w-8 h-8 fill-current text-blue-900"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M21.3 0H2.7C1.2 0 0 1.2 0 2.7v18.6C0 22.8 1.2 24 2.7 24h18.6c1.5 0 2.7-1.2 2.7-2.7V2.7C24 1.2 22.8 0 21.3 0zM7.9 20.4H4.4V9h3.5v11.4h.1zM6.1 7.7a1.9 1.9 0 1 1-.1-3.8c1 0 1.7.7 1.8 1.6v.1c0 .9-.7 2.2-1.7 2.1zM20.4 20.4h-3.4v-5.6c0-1.4-.5-2.3-1.8-2.3-1 0-1.6.7-1.9 1.4-.1.2-.1.5-.1.8v5.8h-3.4s.1-11.4 0-12.5h3.4v1.8c.4-.6 1.1-1.4 2.7-1.4 2 0 3.6 1.3 3.6 4.1v7.9z" />
                      </svg>
                    </Link>
                  </li>
                  <li className="ml-4">
                    <Link
                      href="https://www.facebook.com/nninesolution"
                      target="_blank"
                      className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                    >
                      <svg
                        className="w-8 h-8 fill-current"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                      </svg>
                    </Link>
                    </li>
                    <li className="ml-4">
                    <Link
                      href="https://www.instagram.com/n9solution/"
                      target="_blank"
                      className="flex justify-center items-center transition duration-150 ease-in-out"
                    >
                      <svg
                        className="w-8 h-8"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="currentColor"
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9-51.3-114.9-114.9-114.9zm0 190c-41.6 0-75.1-33.5-75.1-75.1s33.5-75.1 75.1-75.1 75.1 33.5 75.1 75.1-33.5 75.1-75.1 75.1zm146.4-194.3c0 14.9-12.1 27-27 27s-27-12.1-27-27 12.1-27 27-27 27 12.1 27 27zm76.1 27.2c-.2-54.5-4.9-102.7-48.6-146.4S378.5 5.7 324 5.5c-54.6-.2-109.3-.2-163.9 0C106.3 5.7 58.1 10.4 14.4 54.1-30 97.7-34.7 145.9-34.9 200.4c-.2 54.6-.2 109.3 0 163.9.2 54.5 4.9 102.7 48.6 146.4s91.9 48.4 146.4 48.6c54.6.2 109.3.2 163.9 0 54.5-.2 102.7-4.9 146.4-48.6s48.4-91.9 48.6-146.4c.2-54.6.2-109.3 0-163.9zm-48.6 219.3c-7.8 20.1-23.3 35.6-43.4 43.4-30.1 11.9-101.5 9.2-135.1 9.2s-105-.3-135.1-9.2c-20.1-7.8-35.6-23.3-43.4-43.4-11.9-30.1-9.2-101.5-9.2-135.1s-2.7-105 9.2-135.1c7.8-20.1 23.3-35.6 43.4-43.4 30.1-11.9 101.5-9.2 135.1-9.2s105-.3 135.1 9.2c20.1 7.8 35.6 23.3 43.4 43.4 11.9 30.1 9.2 101.5 9.2 135.1s2.7 105-9.2 135.1z"
                        />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
              <div className="text-sm text-gray-200 font-semibold py-1">
                Copyright &copy; {new Date().getFullYear()}
                {"  "}
                <Link href="#top" className=" hover:text-gray-900">
                  NNINE Solutions
                </Link>
                . All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
