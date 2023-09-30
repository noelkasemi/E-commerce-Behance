import { useState, useEffect } from "react";


export default function Article3({ firstname, lastname, profileImgSrc, coverImgSrc, city, onHireChange, onScroll }) {

    const [isHovered, setIsHovered] = useState(false);
    const [show, setShow] = useState(false)
    const [showText, setText] = useState(false)
    const [followersCount, setFollowersCount] = useState(generateRandomValue());
    const [appreciationsCount, setAppreciationsCount] = useState(generateRandomValue());
    const [projectViewsCount, setProjectViewsCount] = useState(generateRandomValue());
    
    const handleHireClick = () => {
      // Call the onHireChange function passed as a prop to toggle the Form component visibility
      onHireChange();
    };
    
    
  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  const toggleShow = () => {
    setShow(!show)
  }

    const toggleText = () => {
        setText(!showText)
    }

    //Generates random numbers for dummy data 
    function generateRandomValue() {
        const min = 100;
        const max = 500000;
        const randomFollowers = Math.floor(Math.random() * (max - min + 1)) + min;
    
        // Format the number with "K" suffix for thousands if it exceeds 1,000
        const formattedFollowers =
          randomFollowers > 1000
            ? (randomFollowers / 1000).toFixed(1) + "K"
            : randomFollowers.toString();
    
        return formattedFollowers;
      }
      useEffect(() => {
        setFollowersCount(generateRandomValue());
        setAppreciationsCount(generateRandomValue());
        setProjectViewsCount(generateRandomValue());
      }, []);
    

    return (
      <article className="w-full truncate flex flex-col hover:scale-110 transition-transform items-center space-y-4 shadow-2xl p-2"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}>
        <button className="flex flex-col hover:brightness-75 justify-center relative items-center" title={`Link to ${firstname}`}>
          <img src={profileImgSrc} alt={firstname} className="rounded-full z-10 absolute w-fit top-24 " />
          <img src={coverImgSrc} alt={firstname} className="rounded w-full h-44" />
        </button>
        <figcaption className="flex  w-full flex-col items-center  py-1.5">
           
          
          <button className="font-bold text-xl hover:underline border-black">{firstname.charAt(0).toUpperCase() + firstname.slice(1)} {lastname.charAt(0).toUpperCase() + lastname.slice(1)}</button>
          <h1 className="flex text-gray-500 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
            <p>{city}</p>
            </h1>
            <p className="border border-purple-200  text-purple-600 rounded-lg px-2">Freelance</p>
           <section className={`${!isHovered ? 'block' : 'hidden'} flex w-full overflow-hidden divide-x mt-4 jusitfy-center items-center`}>
            <h1 className="items-center w-full flex flex-col">
                <p className="text-center">Followers</p>
                <p className="text-center"><strong>{followersCount}</strong></p>
            </h1>
            <h1 className="items-center mx-2 w-full px-2  flex flex-col">
                <p className="text-center">Appreciations</p>
                <p className="text-center"><strong>{appreciationsCount}</strong></p>
            </h1>
            <h1 className="items-center pl-2 w-full flex flex-col">
                <p className="text-center">Project Views</p>
                <p className="text-center"><strong>{projectViewsCount}</strong></p>
            </h1>
            </section>
            {isHovered && <section className="flex w-full mt-4 space-x-4 ">
            <button     onMouseEnter={toggleText}
    onMouseLeave={toggleText}
  onClick={toggleShow}
  className={`${
    !show
      ? "bg-blue-500 w-full hover:bg-blue-600"
      : "border border-black text-gray-900 font-semibold transition-transform delay-500 hover:border-none hover:bg-red-700 hover:text-white"
  } space-x-1 flex py-1 w-full items-center justify-center text-white rounded-lg px-2`}
>
 { !show && <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>}
  <p

    className=""
  >
    {!show ? 'Follow' : (showText ? 'Unfollow' : 'Following')}
  </p>
</button>



 <button onClick={() => {handleHireClick(); onScroll()}} className=" flex border-2 space-x-1 border-blue-300 hover:bg-blue-100  py-1 w-full items-center justify-center text-white rounded-lg px-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-blue-500 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>

 <p className="text-blue-500 font-bold">Hire</p></button>
            </section>}

        </figcaption>
      </article>
    );
  }