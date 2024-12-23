"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { Empty } from "antd";

export default function Homee() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div>
      <div className="px-4 md:w-1/2 md:mx-auto py-8">
        <div>
          <div className="bg-blue-200 w-full h-32 rounded-lg" />
          <Image
            src="/icon.png"
            alt="Icon"
            width={100}
            height={100}
            className="text-4xl font-bold icon bg-blue-200 text-blue-400 h-32 w-32 flex items-center justify-center rounded-full border-4 border-white"
          />
        </div>

        <div className="mt-4">
          <div className="flex items-center">
            <h1 className="text-4xl font-bold">wooden</h1>
            <div className="ml-auto flex relative">
              <button
                onClick={toggleDropdown}
                className="px-4 py-2 bg-primary text-white rounded-full outline-none flex items-center duration-200 focus-visible:ring-2 ring-offset-2"
              >
                <p className="mr-2">Follow</p>
                <FiChevronDown />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
                  <ul>
                    <Link href="https://github.com/wooden99" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer rounded-t-lg flex items-center duration-200">GitHub</Link>
                    <Link href="https://zenn.dev/wooden" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer rounded-b-lg flex items-center duration-200">Zenn</Link>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <p className="mt-4">HTML&CSS / JavaScript / TypeScript / React / Next.js</p>
          <p>I&apos;m writing articles on Zenn.</p>

          <div className="mt-8 flex items-center">
            <Link href="/" className="w-1/3 bg-white border-b-2 px-4 py-2 text-center hover:bg-gray-100 duration-200 rounded-t-lg outline-none focus-visible:bg-gray-100">Timeline</Link>
            <Link href="/notes" className="w-1/3 bg-white border-b-2 px-4 py-2 text-center hover:bg-gray-100 outline-none focus-visible:bg-gray-100 rounded-t-lg duration-200">Notes</Link>
            <Link href="/products" className="w-1/3 bg-white border-b-2 border-primary px-4 py-2 text-center hover:bg-gray-100 outline-none focus-visible:bg-gray-100 rounded-t-lg duration-200">Products</Link>
          </div>
        </div>

        <div className="mt-4">
          <Empty />
        </div>
      </div>
    </div>
  );
}