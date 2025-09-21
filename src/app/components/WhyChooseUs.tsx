import Image from "next/image";
import React from "react";

export default function WhyChooseUs() {
  return (
    <div className="mt-32 mb-40 flex justify-between mx-40">
      <div className="flex flex-col justify-center items-center w-fit">
        <div className="bg-gray-300 p-2 rounded-full w-fit">
          <Image
            src="/icon/icon-delivery.png"
            alt="icon-delivery"
            width={60}
            height={60}
            className="bg-black p-2 rounded-full flex justify-center"
          />
        </div>
        <div className="mt-4 text-center">
          <h3 className="font-semibold uppercase text-xl text-gray-900">
            FREE AND FAST DELIVERY
          </h3>
          <p className="text-gray-500 text-sm mt-1.5">
            Free delivery for all orders over{" "}
            <span className="font-medium text-gray-800">$140</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-fit">
        <div className="bg-gray-300 p-2 rounded-full w-fit">
          <Image
            src="/icon/Icon-Customer service.png"
            alt="Icon-Customer service"
            width={60}
            height={60}
            className="bg-black p-2 rounded-full flex justify-center"
          />
        </div>
        <div className="mt-4 text-center">
          <h3 className="font-semibold uppercase text-xl text-gray-900">
            24/7 CUSTOMER SERVICE
          </h3>
          <p className="text-gray-500 text-sm mt-1.5">
            Friendly 24/7 customer support
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-fit">
        <div className="bg-gray-300 p-2 rounded-full w-fit">
          <Image
            src="/icon/Icon-secure.png"
            alt="Icon-secure"
            width={60}
            height={60}
            className="bg-black p-2 rounded-full flex justify-center"
          />
        </div>
        <div className="mt-4 text-center">
          <h3 className="font-semibold uppercase text-xl text-gray-900">
            MONEY BACK GUARANTEE
          </h3>
          <p className="text-gray-500 text-sm mt-1.5">
            We reurn money within 30 days
          </p>
        </div>
      </div>
    </div>
  );
}
