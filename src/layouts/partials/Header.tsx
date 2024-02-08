"use client";

import config from "@/config/config.json";
import menu from "@/config/menu.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import Logo from "../components/Logo";
import ThemeSwitcher from "../components/ThemeSwitcher";
import clsx from "clsx";

//  child navigation link interface
export interface IChildNavigationLink {
  name: string;
  url: string;
}

// navigation link interface
export interface INavigationLink {
  name: string;
  url: string;
  hasChildren?: boolean;
  children?: IChildNavigationLink[];
}

const Header = () => {
  // distructuring the main menu from menu object
  const { main }: { main: INavigationLink[] } = menu;
  const { navigation_button, settings } = config;
  // get current path
  const pathname = usePathname();

  // scroll to top on route change
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <header
      className={`header z-30 ${settings.sticky_header && "sticky top-0"}`}
    >
      <nav className="navbar container">
        {/* logo */}
        <div className="order-0">
          <Logo />
        </div>
        {/* navbar toggler */}
        <input id="nav-toggle" type="checkbox" className="hidden" />
        <label
          htmlFor="nav-toggle"
          className="order-3 cursor-pointer flex items-center lg:hidden text-dark dark:text-white lg:order-1"
        >
          <svg
            id="show-button"
            className="h-6 fill-current block"
            viewBox="0 0 20 20"
          >
            <title>Menu Open</title>
            <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
          </svg>
          <svg
            id="hide-button"
            className="h-6 fill-current hidden"
            viewBox="0 0 20 20"
          >
            <title>Menu Close</title>
            <polygon
              points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
              transform="rotate(45 10 10)"
            ></polygon>
          </svg>
        </label>
        {/* /navbar toggler */}

        <ul
          id="nav-menu"
          className="navbar-nav order-3 hidden w-full pb-6 lg:order-1 lg:flex lg:w-auto lg:space-x-2 lg:pb-0 xl:space-x-8"
        >
          {main.map((menu, i) => (
            <React.Fragment key={`menu-${i}`}>
              {menu.hasChildren ? (
                <li className="nav-item nav-dropdown group relative">
                  <span
                    className={`nav-link inline-flex items-center ${
                      menu.children?.map(({ url }) => url).includes(pathname) ||
                      menu.children
                        ?.map(({ url }) => `${url}/`)
                        .includes(pathname)
                        ? "active"
                        : ""
                    }`}
                  >
                    {menu.name}
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                  <ul className="nav-dropdown-list hidden group-hover:block lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100">
                    {menu.children?.map((child, i) => (
                      <li className="nav-dropdown-item" key={`children-${i}`}>
                        <Link
                          href={child.url}
                          className={clsx(
                            `nav-dropdown-link  rounded-xl   gap-4 px-4 capitalize items-center gap-x-2  hover:scale-105 font-bold pl-6  m-1  
                          transition-all  hover:text-[#EC2028] dark:hover:text-[#EC2028]  block `,
                            {
                              "text-[#EC2028]": pathname === `${child.url}`,
                              "dark:text-[#EC2028]":
                                pathname === `${child.url}`,
                              "dark:text-white": pathname !== `${child.url}`,
                            }
                          )}
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <Link
                    href={menu.url}
                    className={clsx(
                      `nav-link  rounded-xl   gap-4 px-4 capitalize items-center gap-x-2  hover:scale-105 font-bold pl-6  m-1 
                    transition-all hover:text-[#EC2028] dark:hover:text-[#EC2028]  block`,
                      {
                        "text-[#EC2028]":
                          pathname === `${menu.url}/` || pathname === menu.url,
                        "dark:text-[#EC2028]":
                          pathname === `${menu.url}/` || pathname === menu.url,
                        "hover:text-[#EC2028]": pathname !== menu.url,
                        "dark:hover:text-[#EC2028]": pathname !== menu.url,
                      }
                    )}
                  >
                    {menu.name}
                  </Link>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
        <div className="order-1 ml-auto flex items-center md:order-2 lg:ml-0">
          <ThemeSwitcher className="mr-5" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
