import { useState, useEffect, useRef, useCallback } from "react";
import CountrySelect from "../data/country";

export default function Form({ onClose, userName, profileImgSrc  }) {
  const [show, setShow] = useState(true); // Set show to true to display Freelance section initially
  const [show2, setShow2] = useState(false); // Toggles between options
  const [show3, setShow3] = useState(false); // Toggles the information upon hover
  const [isToggled, setToggled] = useState(false); // Toggles the hire section
  const [data, setData] = useState(null); // Used to check if user has entered the desired currency
  const [selectedStatus, setSelectedStatus] = useState("freelance"); // Set "freelance" as the default
  const [selectedTimeline, setSelectedTimeline] = useState(""); // Sets the selected timeline
  const [message, setMessage] = useState(""); // Used to check if user has written a message
  const [selectedCountry, setSelectedCountry] = useState(""); // Sets the selected country
  const [selectedCurrency, setSelectedCurrency] = useState(""); // Sets the selected currency
  const [isFormComplete, setIsFormComplete] = useState(false); // Used to check if the form is complete

  const toggleShow = () => {
    setShow(!show);
  };

  const toggleShow3 = () => {
    setShow3(!show3);
  };

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
    if (e.target.value === "freelance") {
      setShow2(true); // Show the Freelance section when "Freelance" is selected
    } else {
      setShow2(false); // Hide the Freelance section when "Full time" is selected
    }
  };


  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTimeline(e.target.value);
  };


  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };


  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };



  useEffect(() => {
    const isMessageTyped = message.trim() !== ""; // Check if the message textarea has a value
    const isToggleOn = isToggled;

    if (isToggleOn) {
      if (selectedStatus === "freelance") {
        setIsFormComplete(
          isMessageTyped &&
            selectedStatus &&
            selectedTimeline &&
            selectedCurrency
        );
      } else if (selectedStatus === "full-time") {
        setIsFormComplete(
          isMessageTyped && selectedStatus && selectedCountry
        );
      }
    } else {
      setIsFormComplete(isMessageTyped);
    }
  }, [
    message,
    isToggled,
    selectedStatus,
    selectedTimeline,
    selectedCurrency,
    selectedCountry,
  ]);

  // Api for the currencies 
  useEffect(() => {
    const apiUrl =
      "https://openexchangerates.org/api/latest.json?app_id=1ea97cd274be4d06a824b3a98368f493";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((fetchedData) => {
        setData(fetchedData);
      })
      .catch((error) => {
        console.error("An error occurred while fetching data:", error);
      });
  }, []);

  // Close the form when clicking outside of it
  const formRef = useRef(null);
  const handleClickOutside = useCallback(
    (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        onClose(); // Call the onClose function passed as a prop
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <section className="flex mx-auto items-center h-full flex-col absolute z-50 bg-white sm:w-3/5 lg:w-1/3 w-full  mt-12 -top-12 sm:h-fit ">
      <form 
        ref={formRef}
        className="flex flex-col w-full items-center h-full p-4 px-6 border-2 shadow-xl"
      >
        <img
          className="rounded-full mt-2 w-20 h-20"
          src={profileImgSrc} 
          alt=""
        ></img>
        <h1 className="mb-4 font-bold text-xl mt-2">{userName.charAt(0).toUpperCase() + userName.slice(1)}</h1>
        <p className="flex font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 mb-2 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            />
          </svg>
          Message
        </p>
        <textarea
          onChange={handleMessageChange}
          className="border-gray-200 p-2 border-2 w-full h-64 rounded"
          placeholder="Your message"
        ></textarea>

        {/* button to switch between options */}
        <label className="flex items-center cursor-pointer">
          <section className="relative">
            <input
              type="checkbox"
              className="hidden"
              checked={isToggled}
              onChange={handleToggle}
              onClick={toggleShow}
            />
            <p
              className={`toggle-wrapper w-10 h-6  ${
                isToggled ? "bg-blue-500" : "bg-gray-300"
              } rounded-full shadow-inner`}
            ></p>
            <p
              className={`toggle-thumb absolute w-6 h-6 bg-white top-0 rounded-full shadow-md transform transition-transform duration-300 ease-in ${
                isToggled ? "translate-x-4 bg-gray-200" : ""
              }`}
            ></p>
          </section>
          <section className="ml-3 relative my-4 flex space-x-4 ">
            <p className="hover:text-blue-500  font-lg">
              I'm interested in hiring {userName.charAt(0).toUpperCase() + userName.slice(1)}
            </p>

            {/* disclaimer */}
            <article>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                onMouseEnter={toggleShow3}
                onMouseLeave={toggleShow3}
                className="w-6 hover:text-blue-500  font-lg h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
              {show3 && (
                <p className="w-64 -top-24 right-4 duration-2 absolute bg-black text-white text-sm p-2 px-4 font-semibold rounded-lg">
                  Selecting this option will label your message as a Job
                  Opportunity, and give you access to more collaboration tools
                  to work with {userName.charAt(0).toUpperCase() + userName.slice(1)}
                </p>
              )}
            </article>
          </section>
        </label>

        {/* togglable options */}
        {!show && (
          <section className="border-2 w-full h-fit shadow-lg mt-4 py-4 px-4  space-y-4 flex flex-col items-center">
            <article className="space-x-8 flex items-center w-full">
              <label
                onChange={handleStatusChange}
                className={`${
                  selectedStatus === "freelance" ? "bg-blue-100" : ""
                } border-2 border-gray-200 p-1 flex items-center justify-center rounded w-full`}
              >
                <input
                  type="radio"
                  name="employmentStatus"
                  value="freelance"
                  onChange={handleStatusChange}
                  checked={selectedStatus === "freelance"}
                  className={`mr-2`}
                />{" "}
                Freelance
              </label>
              <label
                onChange={handleStatusChange}
                className={`${
                  selectedStatus === "full-time" ? "bg-blue-100 " : ""
                } border-2  p-1 flex  justify-center items-center  rounded w-full`}
              >
                <input
                  type="radio"
                  name="employmentStatus"
                  value="full-time"
                  checked={selectedStatus === "full-time"}
                  onChange={handleStatusChange}
                  className="mr-2 "
                />{" "}
                Full time
              </label>
            </article>

            {/* freelance/full-time options */}
            {selectedStatus === "freelance" ? (
              <section>
                <select
                  onChange={handleTimeChange}
                  className="rounded mx-auto block border-2 border-gray-200 px-2 py-1"
                >
                  <option className="hover:bg-blue-500 hover:text-white">
                    Your Timeline
                  </option>
                  <option className="hover:bg-blue-500 hover:text-white">
                    Within the next few weeks
                  </option>
                  <option className="hover:bg-blue-500 hover:text-white">
                    Within the nex 3 months
                  </option>
                  <option className="hover:bg-blue-500 hover:text-white">
                    In 3 to 6 months
                  </option>
                  <option className="hover:bg-blue-500 hover:text-white">
                    Over 6 months
                  </option>
                </select>
                <article className="lg:">
                  <input
                    className="border-gray-200 border-2 rounded   px-5 py-1 mt-2 "
                    placeholder="Your Budget "
                    type="number"
                  />

                  {/* currency dropdown */}
                  <label className="lg:flex flex flex-col" htmlFor="currencyDropdown">
                    Select Currency:
                    {data ? (
                      <select
                        onChange={handleCurrencyChange}
                        className="rounded border-2 border-gray-200"
                      >
                        {Object.keys(data.rates).map((currencyCode) => (
                          <option key={currencyCode}>{currencyCode}</option>
                        ))}
                      </select>
                    ) : (
                      <p>Loading data...</p>
                    )}
                  </label>
                </article>
              </section>
            ) : (
              <CountrySelect
                onCountryChange={handleCountryChange}
                selectedStatus={selectedStatus}
              />
            )}
          </section>
        )}

        {/* submit button */}
        <button
          disabled={!isFormComplete}
          className={`${
            isFormComplete ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-300"
          } mt-4 text-white rounded w-full py-2`}
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
