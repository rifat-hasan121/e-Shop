import Image from "next/image";
import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { LuSendHorizontal, LuTwitter } from "react-icons/lu";
import { TiSocialFacebook } from "react-icons/ti";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 ">
      <nav>
        <h6 className="footer-title text-white font-bold">E-Shop</h6>
        <a className="link link-hover">Subscribe</a>
        <p>Get 10% off your first order</p>
        <div className="relative flex items-center">
          <input
            type="search"
            placeholder="Enter Your Email"
            className="bg-transparent py-2.5 pl-4 pr-12 shadow focus:outline-none border border-gray-300 rounded-sm focus:ring-2 focus:ring-gray-400 w-44  md:w-64"
          />
          <LuSendHorizontal
            size={26}
            className="absolute right-4 text-gray-100 cursor-pointer"
          />
        </div>
      </nav>
      <nav>
        <h6 className="footer-title">Account</h6>
        <a className="link link-hover">My Account</a>
        <a className="link link-hover">Login / Register</a>
        <a className="link link-hover">Cart</a>
        <a className="link link-hover">Wishlist</a>
        <a className="link link-hover">Shop</a>
      </nav>
      <nav>
        <h6 className="footer-title">Quick Link</h6>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Terms Of Use</a>
        <a className="link link-hover">FAQ</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <h6 className="footer-title">Download App</h6>
        <p className="text-sm">Save $3 with App New User Only</p>

        <div className="flex gap-2">
          <div className="">
            <Image
              src="/icon/Qr Code.png"
              alt="QR Code"
              width={80}
              height={80}
            />
          </div>
          <div className="">
            <Image
              src="/icon/GooglePlay.png"
              alt="GooglePlay"
              width={110}
              height={40}
            />
            <Image
              src="/icon/AppStore.png"
              alt="AppStore"
              width={110}
              height={40}
            />
          </div>
        </div>

        <div className="flex justify-between w-full">
          <span>
            <TiSocialFacebook size={24} />
          </span>
          <span>
            <LuTwitter size={24} />
          </span>
          <span>
            <FaInstagram size={24} />
          </span>
          <span>
            <FaLinkedinIn size={24} />
          </span>
        </div>
      </nav>
    </footer>
  );
}
