import Image from "next/image";
import React from "react";
import SignUpForm from "./components/SignUpForm";

export default function SignUp() {
  return (
    <div className="my-16">
      <div className="flex items-center gap-32">
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
        <div className="w-96">
          <h1 className="font-medium text-3xl">Create an account</h1>
          <p className="text-gray-500 mt-6">Enter your details below</p>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
