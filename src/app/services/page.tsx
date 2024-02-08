"use client";
import { servicesData } from "@/lib/utils/data";
import clsx from "clsx";
import React, { Fragment, useMemo, useState } from "react";

type Props = {};


interface ServiceData {
  service: number;
  left: {
    title: string;
    p: string[];
  };
  right: {
    title1?: string;
    isShowTitle1?: boolean;
    p1: string[];
    title2: string;
    isShowTitle2: boolean;
    p2: string[];
    title3?: string;
    isShowTitle3?: boolean;
    p3?: string[];
  };
}



const Services = (props: Props) => {
  const [active, setActive] = useState(1);
  const [services, setServices] = useState<ServiceData[]>(servicesData);

  const handleClick = (titleNumber: string) => {
    const newData = services.map((item: any) => {
      if (item.service === active) {
        let tempRight = item.right;

        for (let key in tempRight) {
          if (key === titleNumber) {
            tempRight[titleNumber] = !tempRight[titleNumber];
            console.log(!tempRight[titleNumber]);
          } else {
            if (key.slice(0, 11) === "isShowTitle") {
              tempRight[key] = false;
            }
          }
        }

        return {
          ...item,
          right: item.right,
        };
      }
      return item;
    });
    setServices(newData);
  };

  const getServiceData = useMemo(() => {
    return services.filter((item: any) => item.service === active);
  }, [active, services]);

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
              <h1 className=" text-white font-sans ">SERVICES</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[30vh] flex justify-center flex-col md:h-[12vh] bg-[#192677] md:flex-row md:justify-around md:items-center text-white font-sans md:px-10 text-[21px] font-semibold">
        <div className="flex flex-col items-center my-4">
          <button
            onClick={() => setActive(1)}
            className={clsx("", { "cursor-not-allowed": active === 1 })}
          >
            Accounting systems / ERP support
          </button>
          <div
            className={clsx("w-[50px] h-2  mt-1", { "bg-white": active === 1 })}
          />
        </div>
        <div className="flex flex-col items-center my-4">
          <button
            onClick={() => setActive(2)}
            className={clsx("", { "cursor-not-allowed": active === 2 })}
          >
            Finance and accounting services
          </button>
          <div
            className={clsx("w-[50px] h-2  mt-1", { "bg-white": active === 2 })}
          />
        </div>
        <div className="flex flex-col items-center my-4">
          <button
            onClick={() => setActive(3)}
            className={clsx("", { "cursor-not-allowed": active === 3 })}
          >
            Custom software development
          </button>
          <div
            className={clsx("w-[50px] h-2  mt-1", { "bg-white": active === 3 })}
          />
        </div>
      </div>

      <div>
        <div className="flex flex-col md:flex-row">
          {getServiceData.map((data, index) => (
            <Fragment key={index}>
              <div className="bg-[#EC2028] p-16  text-white flex-1">
                <h2 className="mb-4 text-white font-sans">{data.left.title}</h2>
                {data.left.p.map((item, i) => (
                  <p className="mb-5 text-[16px]" key={i}>
                    {item}
                  </p>
                ))}
              </div>
              <div className="p-16 flex-1">
                <h5
                  onClick={() => handleClick("isShowTitle1")}
                  className="border border-gray-300 p-4 rounded-sm m-4 mb-1 cursor-pointer"
                >
                  {data.right.title1}
                </h5>
                {data.right.isShowTitle1 && (
                  <div className="border border-gray-300 p-4 rounded-sm m-4 mt-0">
                    {data.right.p1.map((item, i) => (
                      <p key={i} className="text-[14px] mb-4 font-sans">
                        {item}
                      </p>
                    ))}
                  </div>
                )}

                <h5
                  onClick={() => handleClick("isShowTitle2")}
                  className="border border-gray-300 p-4 rounded-sm m-4 mb-1 cursor-pointer"
                >
                  {data.right.title2}
                </h5>
                {data.right.isShowTitle2 && (
                  <div className="border border-gray-300 p-4 rounded-sm m-4 mt-0 ">
                    {data.right.p2.map((item, i) => (
                      <p key={i} className="text-[14px] mb-4 font-sans">
                        {item}
                      </p>
                    ))}
                  </div>
                )}

                {data.right?.title3 && data.right?.p3 && (
                  <>
                    {" "}
                    <h5
                      onClick={() => handleClick("isShowTitle3")}
                      className="border cursor-pointer border-gray-300 p-4 rounded-sm m-4 mb-1"
                    >
                      {data.right.title3}
                    </h5>
                    {data.right?.isShowTitle3 && (
                      <div className="border border-gray-300 p-4 rounded-sm m-4 mt-0 ">
                        {data.right.isShowTitle3 &&
                          data.right?.p3.map((item, i) => (
                            <p key={i} className="text-[14px] mb-4 font-sans">
                              {item}
                            </p>
                          ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
