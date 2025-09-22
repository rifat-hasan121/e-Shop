import Image from "next/image";
import React from "react";
import SignUpForm from "./components/SignUpForm";

export default function SignUp() {
  return (
    <div className="my-6 md:my-16">
      <div className="md:flex items-center gap-2 md:gap-20 lg:gap-32">
        <div className="">
          <Image
            src="/image/Side Image.png"
            alt="Side Image.png"
            width={805}
            height={781}
            className=""
            style={{
              filter: "drop-shadow(0 8px 50px rgba(255, 255, 255, 0.4))",
            }}
          />
        </div>
        <div className=" md:w-96 p-2 md:p-0 md:mr-10">
          <h1 className="font-medium text-2xl md:text-3xl text-center md:text-left">Create an account</h1>
          <p className="text-gray-500  mt-2 md:mt-6 text-center md:text-left">Enter your details below</p>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
