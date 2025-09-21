import Image from "next/image";
import React from "react";

export default function Highlight() {
  return (
    <div className="bg-black px-12 py-18 flex justify-between items-center">
      <div className="">
        <p className="font-medium text-[#00FF66]">Categories</p>
        <h1 className="text-7xl font-medium text-white mt-8">
          Enhance Your <br /> Music Experience
        </h1>

        <div className="flex gap-6 mt-8">
          <div className="bg-white rounded-full w-16 h-16 flex flex-col justify-center items-center">
            <span className="text-lg font-bold text-gray-800">23</span>
            <span className="text-xs font-medium text-gray-600">Hours</span>
          </div>

          <div className="bg-white rounded-full w-16 h-16 flex flex-col justify-center items-center ">
            <span className="text-lg font-bold text-gray-800">05</span>
            <span className="text-xs font-medium text-gray-600">Days</span>
          </div>

          <div className="bg-white rounded-full w-16 h-16 flex flex-col justify-center items-center ">
            <span className="text-lg font-bold text-gray-800">59</span>
            <span className="text-xs font-medium text-gray-600">Minutes</span>
          </div>

          <div className="bg-white rounded-full w-16 h-16 flex flex-col justify-center items-center ">
            <span className="text-lg font-bold text-gray-800">35</span>
            <span className="text-xs font-medium text-gray-600">Seconds</span>
          </div>
        </div>

        <button className="py-4 px-12 bg-[#00FF66]  font-bold rounded-sm mt-10 cursor-pointer">
          Buy Now!
        </button>
      </div>
      <div className="">
        <Image
          src="/products/JBL_BOOMBOX.png"
          alt="CellPhone"
          width={568}
          height={330}
          className=""
          style={{
            filter: "drop-shadow(0 8px 50px rgba(255, 255, 255, 0.4))",
          }}
        />
      </div>
    </div>
  );
}
