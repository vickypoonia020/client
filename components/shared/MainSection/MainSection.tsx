import React from "react";
import VideoComponent from "./VideoComponent";
import Product from "./Product";
import ImageContent from "./ImageContent";

const MainSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen pt-80">
      <p className="text-4xl text-center mt-10">
        Our mission is to <span className="text-blue-500">organize</span> the
        world’s <span className="text-red-500">information</span> and <br />
        make it <span className="text-green-500">
          universally accessible
        </span>{" "}
        and <span className="text-orange-500">useful</span>.
      </p>

      {/* VideoComponent Used here */}
      <div className="mt-28">
        <VideoComponent />
      </div>

      <p className="text-4xl text-center mt-8 pt-20">
        Look back on 25 years in Search history, honoring the most searched
        moments that have <br/> inspired the world and the next generation to come.
      </p>

      <div className="text-blue-600 text-2xl  hover:bg-gray-50 hover:text-blue-800 py-12">
        <a href="http://">Explore 25 Years in Search</a>
      </div>

      {/* Product Component  */}
      <Product />

      {/* ImageContent Component */}
      <ImageContent />

    </div>
  );
};

export default MainSection;
