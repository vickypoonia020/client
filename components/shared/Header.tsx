import React from "react";
import Button from "./Button/Button";
// import gIcon from "./Assest/google.png";
import Image from "next/image";
import MainSection from "./MainSection/MainSection";


const Header = () => {
  const childss = ["About", "Product", "Commitments", "Stories", "India Blog"];
  const handleClick = () => {
    console.log("Button is clicked");
  };
  return (
    <>
      <div className="flex flex-row items-center  px-4 py-2  text-white rounded-md">
        {/* <img src={gIcon} alt="Google" />
         */}
         <Image
         className="h-29 w-35 scroll-mx-px scroll-my-px text-left hover:bg-gray-50 rounded" 
        src="/images/google.png" // Replace with the path to your image
        alt="Description of the image"
        width={120} // Set the width of the image
        height={60} // Set the height of the image
      />
        
          {/* Map over childss array and render a Button component for each element */}
          {childss.map((item, index) => (
            <div key={index} className="flex flex-row items-center p-2 text-gray-600 text-2xl hover:bg-gray-50 py-2 px-4 rounded hover:text-black pt-0 ">
              <Button onClick={handleClick}>{item}</Button>
            </div>
          ))}
        
      </div>
      <MainSection />
    </>
  );
};

export default Header;

