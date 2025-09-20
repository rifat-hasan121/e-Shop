import Image from "next/image";
import React from "react";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";

export default function BrowseByCategory() {
  return (
    <>
      <div>
        <span className="border-8 border-[#DB4444] rounded-sm"></span>
        <span className="text-[#DB4444] ml-4">Categories</span>
        <div className="flex justify-between">
          <div className="">
            <h1 className="text-4xl mt-5 font-medium">Browse By Category</h1>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <span className="bg-gray-100 rounded-full p-2 cursor-pointer">
              <TiArrowLeft size={30} />
            </span>
            <span className="bg-gray-100 rounded-full p-2 cursor-pointer">
              <TiArrowRight size={30} />
            </span>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-6 gap-8">
          <div className="border border-gray-300 text-center rounded-sm flex flex-col justify-center items-center py-6">
            <Image
              src="/icon/Category-CellPhone.png"
              alt="CellPhone"
              width={56}
              height={56}
              className=""
            />
            <h3 className="mt-4">Phones</h3>
          </div>
          <div className="border border-gray-300 text-center rounded-sm flex flex-col justify-center items-center py-6">
            <Image
              src="/icon/Category-Computer.png"
              alt="CellPhone"
              width={56}
              height={56}
              className=""
            />
            <h3 className="mt-4">Computers</h3>
          </div>
          <div className="border border-gray-300 text-center rounded-sm flex flex-col justify-center items-center py-6">
            <Image
              src="/icon/Category-SmartWatch.png"
              alt="CellPhone"
              width={56}
              height={56}
              className=""
            />
            <h3 className="mt-4">SmartWatch</h3>
          </div>
          <div className="bg-[#DB4444] border border-gray-300 text-center rounded-sm flex flex-col justify-center items-center py-6">
            <Image
              src="/icon/Category-Camera.png"
              alt="CellPhone"
              width={56}
              height={56}
              className=""
            />
            <h3 className="mt-4 text-white">Camera</h3>
          </div>
          <div className="border border-gray-300 text-center rounded-sm flex flex-col justify-center items-center py-6">
            <Image
              src="/icon/Category-Headphone.png"
              alt="CellPhone"
              width={56}
              height={56}
              className=""
            />
            <h3 className="mt-4">HeadPhones</h3>
          </div>
          <div className="border border-gray-300 text-center rounded-sm flex flex-col justify-center items-center py-6">
            <Image
              src="/icon/Category-Gamepad.png"
              alt="CellPhone"
              width={56}
              height={56}
              className=""
            />
            <h3 className="mt-4">Gaming</h3>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-300 mt-18"></div>
    </>
  );
}
