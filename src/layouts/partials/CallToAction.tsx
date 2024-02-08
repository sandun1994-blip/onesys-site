import { markdownify } from "@/lib/utils/textConverter";
import { Call_to_action } from "@/types";
import Link from "next/link";
import ImageFallback from "../helpers/ImageFallback";
import Image from "next/image";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: Call_to_action;
}

const CallToAction = ({ data }: { data: PageData }) => {
  return (
    <>
      {data.frontmatter.enable && (
        <section className="py-5 bg-theme dark:bg-darkmode-theme-light ">
          <div className="container">
            <div className="rounded-xl bg-theme-light px-4 py-8 dark:bg-darkmode-theme-light xl:p-20">
              <div className="row items-center justify-between">
                <div className="mb-10 md:col-6 lg:col-6 md:order-2 md:mb-0">
                  <Image
                    className="w-full"
                    src={data.frontmatter.image}
                    width={550}
                    height={550}
                    alt="cta-image"
                  />
                </div>
                <div className="md:col-6 md:order-1">
                  <h2
                    dangerouslySetInnerHTML={markdownify(
                      data.frontmatter.title
                    )}
                    className="mb-2"
                  />
                  <p
                    dangerouslySetInnerHTML={markdownify(
                      data.frontmatter.description
                    )}
                    className="mb-6"
                  />

                  <h5 className="mb-8 font- text-gray-600">
                    Flexibility for Your Business
                  </h5>
                  {data.frontmatter.button.enable && (
                    <Link
                      className=" btn bg-[#000000] dark:bg-white text-white md:m-2 sm:mx-auto sm:my-2 hover:bg-[#EC2028] dark:hover:bg-[#EC2028]
                      dark:hover:text-white capitalize items-center gap-x-2 dark:text-black hover:scale-105 font-bold pl-6  m-1  transition-all"
                      href={data.frontmatter.button.link}
                    >
                      {data.frontmatter.button.label}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CallToAction;
