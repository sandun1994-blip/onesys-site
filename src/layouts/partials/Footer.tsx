"use client";

import menu from "@/config/menu.json";
import social from "@/config/social.json";
import { markdownify } from "@/lib/utils/textConverter";
import Link from "next/link";
import Logo from "../components/Logo";
import DynamicIcon from "../helpers/DynamicIcon";
import { generateCopyrightNotice } from "@/lib/utils/readingTime";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const Footer = () => {
  const copyrightNotice = generateCopyrightNotice();
  // get current path
  const pathname = usePathname();
  return (
    <footer
      className=" dark:bg-darkmode-theme-light   w-full   bg-center bg-cover bg-no-repeat mt-0"
      style={{ backgroundImage: `url(/images/footer-bg.jpg)` }}
    >
      <div className="w-full  bg-white dark:bg-darkmode-theme-light  opacity-70 transition-all duration-300 px-24 ">
        <div className="row items-center py-10">
          <div className="mb-8 text-center  lg:col-3 lg:mb-0 lg:text-left ">
            <Logo />
            <p className="mt-8 text-[#070606] dark:text-white">
              Dedicated Scalable Systems And Support Teams To Grow Your Business
            </p>
          </div>
          <div className="mb-8 text-center lg:col-5 lg:mb-0">
            <ul>
              {menu.footer.map((menu) => (
                <li
                  className="m-3 inline-block text-[#070606] dark:text-white"
                  key={menu.name}
                >
                  <Link
                    className={clsx(
                      `nav-link  rounded-xl   gap-4 px-4 capitalize items-center gap-x-2 dark:text-white hover:scale-105 font-bold pl-6  m-1 
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
                    href={menu.url}
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-8 text-center lg:col-4 lg:mb-0 lg:mt-0 lg:text-left ">
            <h3 className="text-[#070606] dark:text-white font-serif">
              Contact Information
            </h3>
            <ul className="text-center flex flex-col justify-between items-center lg:items-start">
              {social.main.map((social) => (
                <li
                  key={social.name}
                  className="my-5 flex justify-around items-center"
                >
                  <DynamicIcon className="block mr-3" icon={social.icon} />
                  <span className=" text-[#070606] dark:text-white text-sm">
                    {social.des}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-4 bg-blue-800 dark:border-darkmode-border ">
        <div className="container text-center text-white dark:text-white text-xs">
          <p dangerouslySetInnerHTML={markdownify(copyrightNotice)} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
