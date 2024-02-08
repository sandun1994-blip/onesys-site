import DynamicIcon from "@/layouts/helpers/DynamicIcon";
import React from "react";
import social from "@/config/social.json";
import { Metadata } from "next";

type Props = {};
export const metadata: Metadata = {
  title: "Contact: One Sys Consulting",
  description: "Contact One Sys Consulting",
};
const Contact = (props: Props) => {
  return (
    <>
      <div
        className=" dark:bg-darkmode-theme-light   w-full   bg-center bg-cover bg-no-repeat mt-0  "
        style={{
          backgroundImage: `url(/images/australia-and-new-zealand-migration.jpg)`,
        }}
      >
        <div className=" w-full h-[30vh] bg-[#313030] opacity-90 transition-all duration-300 z-0">
          <div className="absolute top-[30%] left-[8%] row justify-start ">
            <div className=" text-center lg:col-12  flex flex-col items-start ">
              <h1 className=" text-white font-sans">CONTACT</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="p-10 dark:bg-white">
        <div className="container ">
          <div className=" md:w-2/4  items-center justify-between mx-auto">
            <div className="border text-white dark:border-gray-500 border-gray-300 py-5 px-10 rounded-xl bg-gradient-to-r from-blue-900 to-blue-600 ">
              <h2 className="mb-1 font-sans mx-auto text-white ">
                Contact Information
              </h2>
              <div className="h-2 w-[80px] bg-red-600 mb-8" />

              <div className="p-4 mb-4">
                <ul className="text-center flex flex-col justify-between items-center lg:items-start">
                  {social.main.map((social) => (
                    <li
                      key={social.name}
                      className="my-5 flex justify-around items-center"
                    >
                      <DynamicIcon className="block mr-3" icon={social.icon} />
                      <span className="  dark:text-white text-sm text-white">
                        {social.des}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
