import CategoriesFetcher from "../data/categories";
import { useState } from "react";
import Facebook from "../../../uitls/svg/facebook";
import Instagram from "../../../uitls/svg/instagram";
import Twitter from "../../../uitls/svg/twiter";
import YouTube from "../../../uitls/svg/youtube";

function Footer({ style, onClick }) {
  const listItemData = [
    { id: 1, text: "TOU", link: "#" },
    { id: 2, text: "Privacy", link: "#" },
    { id: 3, text: "Community", Link: "#" },
    { id: 4, text: "Help", Link: "#" },
    { id: 5, text: "Cookie preferences", Link: "#" },
    { id: 6, text: "Do not sell or share my personal information", Link: "#" }
  ];
  const socialMedias = [
    { id: 1, text: "Instagram" },
    { id: 2, text: "Facebook" },
    { id: 3, text: "Twitter" },
    { id: 4, text: "YouTube" }
  ];

  const contacts = [
    { id: 1, text: "Online Sales", address: "+355 44 220 200" },
    { id: 2, text: "WhatsApp/ Viber", address: "+355 68 123 456" },
    { id: 3, text: "Service Cel", address: "+355 44 220 200" },
    { id: 4, text: "E-mail", address: "info@behance.al" },
    { id: 5, text: "E-mail for complaints", address: "complaints@behance.al" },
    { id: 6, text: "E-mail for marketing", address: "online@behnace.al" }
  ];

  const icons = [
    { id: 1, icon: <Facebook /> },
    { id: 2, icon: <Instagram /> },
    { id: 3, icon: <Twitter /> },
    { id: 4, icon: <YouTube /> }
  ];

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  return (
    <footer
      className={`${style} bg-[#44337a] mt-4 text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 h-auto py-4`}
    >
      <section className=" px-2  ">
        <h1 className="font-bold  mb-2 text-xl">Categories</h1>
        <CategoriesFetcher setData={setData} setError={setError} />
        {error ? (
          <p>{error}</p>
        ) : (
          data.map((item, index) => (
            <button
              onClick={onClick}
              className="hover:bg-[#4d3a8c] py-2  text-left text-sm rounded w-full"
              key={"category: " + index}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))
        )}
      </section>
      <section className=" ">
        <h1 className="font-bold text-xl mb-4 mt-4 text-leftw px-2">
          Information
        </h1>
        {listItemData.map((item) => (
          <button
            className="hover:bg-[#4d3a8c] w-full py-2 px-2 text-left text-sm rounded"
            key={"item:" + item.id}
          >
            {item.text}
          </button>
        ))}
      </section>
      <section className="sm:mt-6 mt-4 md:mt-0 ">
        <h1 className="font-bold text-xl mb-2 px-2">Social Media</h1>
        {socialMedias.map((item) => (
          <button
            title="Address is not real"
            className="hover:bg-[#4d3a8c] w-full text-left py-2 px-2 text-sm rounded"
            key={"button:" + item.id}
          >
            {item.text}
          </button>
        ))}
      </section>
      <section className="md:mt-0 mt-4 space-y-2">
        <h1 className="font-bold text-xl mb-4 px-2">Contact</h1>
        {contacts.map((item) => (
          <article
            key={"adress:" + item.id}
            className="w-full flex text-sm flex-col items-start px-2"
          >
            <p key={item.id + 1} className="font-semibold">
              {item.text}
            </p>
            <button
              title="Contact address is not real"
              key={item.id + 2}
              className="hover:bg-[#4d3a8c] rounded text-left text-sm w-full py-2 "
            >
              {item.address}
            </button>
          </article>
        ))}
      </section>
      <section className="px-4 ">
        {icons.map((item) => (
          <button
            key={"icon:" + item.id}
            title="Address is not real"
            className=" hover:bg-[#4d3a8c] px-4 py-2 rounded-lg "
          >
            {item.icon}
          </button>
        ))}
        <p className="text-sm mt-2">
          © Copyright 1996-2023 behance - All rights reserved.
        </p>
      </section>
      <section className="md:col-end-5 mt-5 flex items-end justify-end">
        <img
          className="block w-auto mr-4 h-6 "
          src="https://assets.shpresa.al/static/v2/themes/shpresa/v1.6.4/build/images/payment_methods.png"
          loading="lazy"
          alt="Metodat e pagesës"
        ></img>
      </section>
    </footer>
  );
}

export default Footer;
