import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";

export default function Navbar() {
  const NavLinks = (
    <>
      <li>
        <Link href={"/"} className="border-b">
          Home
        </Link>
      </li>
      <li>
        <Link href={"/"} className="">
          Contact
        </Link>
      </li>
      <li>
        <Link href={"/"} className="">
          About
        </Link>
      </li>
      <li>
        <Link href={"/"} className="">
          Sign Up
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {NavLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">E-Shop</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-12">{NavLinks}</ul>
      </div>
      <div className="navbar-end flex gap-6">
        <div className="relative flex items-center">
          <input
            type="search"
            placeholder="Search..."
            className="bg-[#F5F5F5] py-2.5 pl-4 pr-12 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 w-64"
          />
          <IoIosSearch
            size={26}
            className="absolute right-4 text-gray-500 cursor-pointer"
          />
        </div>
        <div className="flex gap-4">
          <span>
            <FaRegHeart size={26} />
          </span>
          <span>
            <FiShoppingCart size={26} />
          </span>
        </div>
      </div>
    </div>
  );
}
