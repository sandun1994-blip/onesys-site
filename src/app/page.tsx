import CallToAction from "@/layouts/partials/CallToAction";
import SeoMeta from "@/layouts/partials/SeoMeta";
import Testimonials from "@/layouts/partials/Testimonials";
import { callToAction, testimonial } from "@/lib/utils/data";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <SeoMeta />

      <section className=" w-full overflow-hidden min-h-[75vh]  md:min-h-[64vh] inset-0  bg-transparent bg-cover bg-no-repeat bg-center  ">
        <video
          className=" object-cover w-full  h-[85%]  inset-0  bg-white z-[-1] absolute mt-[50px]"
          autoPlay
          muted
          loop
          id="video"
          src="/interview.mp4"
        />
        <div className="absolute top-[40%] left-[8%] row justify-start ">
          <div className=" text-center lg:col-12  flex flex-col items-start ">
            <h1 className=" text-white font-sans">EXPANDING</h1>
            <h1 className=" text-white font-sans">POSSIBILITIES</h1>
            <p className="mb-8 text-white font-sans text-start">
              Dedicated Scalable Systems and Support Teams to Grow Your Business
            </p>
          </div>
          <div className="flex flex-col items-start md:flex-row  md:justify-start md:items-center sm:pr-20 z-[10]">
            <Link
              className="btn bg-[#3535e2]  text-white md:m-2 sm:mx-auto sm:my-2 hover:bg-[#EC2028] dark:hover:bg-[#EC2028]
              capitalize items-center gap-x-2 dark:text-white hover:scale-105 font-bold pl-6  m-1   transition-all w-[200px]"
              href={"/services"}
            >
              I NEED SUPPORT
            </Link>
            <Link
              className="btn bg-[#3535e2]  text-white md:m-2 sm:mx-auto sm:my-2 hover:bg-[#EC2028] dark:hover:bg-[#EC2028]
              capitalize items-center gap-x-2 dark:text-white hover:scale-105 font-bold pl-6  m-1   transition-all w-[200px]"
              href={"/services"}
            >
              LOOKING FOR BPO
            </Link>

            <Link
             className="btn bg-[#3535e2]  text-white md:m-2 sm:mx-auto sm:my-2 hover:bg-[#EC2028] dark:hover:bg-[#EC2028]
              capitalize items-center gap-x-2 dark:text-white hover:scale-105 font-bold pl-6  m-1   transition-all w-[200px]"
              href={"/services"}
            >
              CUSTOM SOFTWARE
            </Link>
          </div>
        </div>
      </section>
      <div
        className=" dark:bg-darkmode-theme-light   w-full   bg-center bg-cover bg-no-repeat mt-0  "
        style={{ backgroundImage: `url(/images/cta-bg.jpg)` }}
      >
        <div className=" inset-0 bg-gradient-to-r from-blue-900 to-blue-600 opacity-90 transition duration-300 ease-in-out">
          <Testimonials data={testimonial} />
        </div>
      </div>
      <CallToAction data={callToAction} />
    </>
  );
};

export default Home;
