"use client"
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="w-full ">
      <div className="max-w-8xl mx-auto px-6 py-3 flex justify-between items-center border border-black">
        {/* Logo */}
        <div className="text-2xl font-cursive font-bold">Logo</div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-1xl font-medium">
          <Link href="#" className="hover:underline">
            Home Page
          </Link>
          <Link href="#" className="hover:underline">
            About Us
          </Link>
          <Link href="#" className="hover:underline">
            Offerings
          </Link>

          {/* Dropdown */}
          <div className="relative">
            <button
              className="flex items-center hover:underline"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              More Info <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white border border-black shadow-lg">
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Option 1
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Option 2
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button className="px-4 py-2 border border-black rounded">
            Join
          </button>
          <button className="px-4 py-2 bg-black text-white rounded">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
