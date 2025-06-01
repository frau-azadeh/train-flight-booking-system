"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useState } from "react";
import SearchBar from "./SearchBar";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";

const navItem = [{ href: "/", label: "صفحه اصلی" }];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = useCallback((href: string) => pathname === href, [pathname]);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:hidden">
          <div className="flex items-center justify-between w-full">
            <Link href="/" className="shrink-0">
              <Image
                src="/logo.png"
                alt="logo"
                width={40}
                height={40}
                className="w-10 h-10 border border-gray-300 rounded-md shadow transition duration-300 hover:scale-110"
              />
            </Link>

            <div className="flex-1 px-4">
              <SearchBar />
            </div>

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="text-gray-600 hover:text-yellow-500 transition"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-3 items-center h-16">
          <div className="flex justify-start gap-6">
            {navItem.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={clsx(
                  "px-4 py-2 rounded-lg transition duration-300 font-medium",
                  {
                    "bg-yellow-200 text-gray-700": isActive(href),
                    "text-gray-700 hover:bg-blue-950 hover:text-white":
                      !isActive(href),
                  },
                )}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <SearchBar />
            </div>
          </div>

          <div className="flex justify-end">
            <Link href="/" className="shrink-0">
              <Image
                src="/logo.png"
                alt="logo"
                width={40}
                height={40}
                className="w-10 h-10 border border-gray-300 rounded-md shadow transition duration-300 hover:scale-110"
              />
            </Link>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-2 pb-4 bg-yellow-100 px-4 rounded-md">
            {navItem.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className={clsx(
                  "px-4 py-2 rounded-lg transition duration-300 block",
                  {
                    "bg-yellow-200 text-gray-700": isActive(href),
                    "text-gray-700 hover:bg-blue-950 hover:text-white":
                      !isActive(href),
                  },
                )}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
