import React from "react";
const Product = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-6xl text-center mb-8">Make life easier with a little help from our <br/> products</h3>
      <div className="flex justify-center">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-4">View all our products</button>
        <button className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded">Get product support</button>
      </div>
    </div>
  );
};

export default Product;


