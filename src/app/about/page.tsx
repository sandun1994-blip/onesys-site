import { Metadata } from "next";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "About: One Sys Consulting",
  description: "About One Sys Consulting",
};


const About = (props: Props) => {
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
              <h1 className=" text-white font-sans">ABOUT</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="p-10">
        <div className="container">
          <div className="rounded-xl bg-theme-light px-4 py-8 dark:bg-darkmode-theme-light xl:p-20">
            <div className="row items-center justify-between">
              <div className="mb-10 md:col-6 lg:col-6 md:order-2 md:mb-0"></div>
              <div className="md:col-10 md:order-1">
                <h2 className="mb-1 font-sans">Company Overview</h2>
                <div className="h-2 w-[80px] bg-red-600 mb-8"/>
                <p className="mb-1 text-[14px]">
                  At One Sys, we strive to be a thought leader and innovator,
                  pushing the limits of our firm and evolving the capabilities
                  and technology across our comprehensive range of services to
                  clients.
                </p>
                <div className="p-4 mb-4">
                  <p className="text-[16px]">
                    We believe we are different, because we are different. Our
                    hands on approach to personalised service is unrivalled by
                    any firm. It’s a unique client experience, you will discover
                    once you contact One sys consultant who works around your
                    business needs. Our workforce comprises a variety of
                    experienced analysts, developers and finance professionals
                    to business managers.
                  </p>
                </div>
                <p className="mb-8 text-[14px] ">
                  One Sys mitigate risk, accountability, transparency and a
                  single point of contact. When your business succeeds, so does
                  ours, and that’s the making of a great long-term relationship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
