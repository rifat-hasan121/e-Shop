import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";


export default function SignUpForm() {
  
  return (
    <div className="mt-12">
      <form  className="flex flex-col w-full">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="border-b-2 border-gray-400 py-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="mt-10 border-b-2 border-gray-400 py-3"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="mt-10 border-b-2 border-gray-400 py-3"
        />
        <button
          type="submit"
          className="cursor-pointer mt-10 w-full bg-[#DB4444] py-4 text-white font-medium rounded-lg hover:bg-red-600 transition-colors"
        >
          Create Account
        </button>
      </form>

      <div className="mt-4">
        <button className="cursor-pointer w-full border border-gray-400 py-4 text-black font-medium rounded-lg   transition-colors">
          <span className="flex items-center justify-center gap-4">
            <FcGoogle size={24} /> Sign up with Google
          </span>
        </button>

        <p className="text-center mt-8">
          Already have account?{" "}
          <Link href={"/Login"} className="link">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
