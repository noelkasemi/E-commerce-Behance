import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useUser } from "../main/userContext";

export default function SideBar({
  activeSection = 0,
  setActiveSection,
  sections
}) {
  const [show, setShow] = useState(false);
  const { isUserLoggedIn, logout } = useUser();

  const variants = {
    open: { x: 0 },
    closed: { x: "-276px" }
  };

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <section className="flex z-50 items-center">
      {/*Open SIDEBAR */}
      {!show ? (
        <section className="flex  items-center">
          {" "}
          <button
            onClick={toggleShow}
            className="flex  md:hidden relative z-20 mt-4 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>{" "}
        </section>
      ) : null}

      <motion.section
        initial="closed"
        animate={show ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {show ? (
          <section>
            <section className="w-[267px] fixed h-full md:hidden z-50 top-0 left-0 overflow-y-auto bg-slate-200">
              {/* close sidebar */}
              <section className="flex items-center fixed bg-slate-100 top-0 left-0 h-11 shadow-sm w-[267px]">
                <button
                  onClick={toggleShow}
                  className="w-fit flex ml-2 items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <span className="w-full mr-4 flex justify-end">
                  {!isUserLoggedIn && (
                    <button className="py-1 px-4 border rounded-3xl text-sm  font-semibold hover:bg-sky-100 hover:border-blue-200 ">
                      <Link to="/login">Log In</Link>
                    </button>
                  )}
                </span>
              </section>
              {/* sidebar content */}
              <section className="flex flex-col space-y-4 ml-4 mt-12">
                {sections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveSection(index);
                      toggleShow();
                    }} // Set the active section when clicked
                    style={{ marginTop: "1rem", marginBottom: "0.5rem" }}
                    className="w-fit"
                  >
                    <h4
                      className={`${
                        activeSection === section.label // Check if this button's section label matches the active section
                          ? "border-b-2 border-black pb-2.5"
                          : "none"
                      } font-semibold hover:border-b-2 border-black pb-2.5`}
                    >
                      {section.label}
                    </h4>
                  </button>
                ))}

                <a
                  href="https://apps.apple.com/us/app/behance-creative-portfolios/id489667151"
                  style={{ marginBottom: "0.5rem" }}
                  className="w-fit"
                >
                  <img
                    src="https://texttofloss.com/wp-content/uploads/2021/01/App-Store-Button-transparent.png"
                    alt="app store"
                    width={150}
                    height={90}
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.behance.behance&pcampaignid=web_share"
                  style={{ marginBottom: "1.5rem" }}
                  className="w-fit"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                    alt="play store"
                    width={150}
                    height={90}
                  />
                </a>
                <button className="text-xs my-2 text-gray-800 w-14 font-semibold flex items-center">
                  English
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={10}
                    className="mt-1 ml-1 "
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12,13 6,6 18,6" fill="black" />
                  </svg>
                </button>
                <button className="text-xs my-2 text-gray-800 font-semibold w-fit">
                  Blog
                </button>
                <button className="text-xs my-2 text-gray-800 font-semibold w-fit">
                  TOU
                </button>
                <button className="text-xs my-2 text-gray-800 font-semibold w-fit">
                  Privacy
                </button>
                <button className="text-xs my-2 text-gray-800 font-semibold w-fit">
                  Community
                </button>
                <button className="text-xs my-2 text-gray-800 font-semibold w-fit">
                  Help
                </button>
                <button className="text-xs my-2 text-gray-800 font-semibold break-words w-fit">
                  <span>Do not sell or share my</span>
                  <br />
                  <span>personal information</span>
                </button>
              </section>
              {isUserLoggedIn ? (
                <button
                  onClick={logout}
                  className="w-2/5 ml-4 rounded-3xl h-8 text-sm text-white bg-blue-600 font-bold hover:bg-blue-700 mb-2 mt-6"
                >
                  Log out
                </button>
              ) : (
                <button className="w-2/5 ml-4 rounded-3xl h-8 text-sm text-white bg-blue-600 font-bold hover:bg-blue-700 mb-2 mt-6">
                  <Link to="/SignUp">Sign Up</Link>
                </button>
              )}
            </section>
            <section className="flex w-full h-11 md:hidden justify-end items-center space-x-2">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  ></path>
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </section>
          </section>
        ) : null}
      </motion.section>
    </section>
  );
}
