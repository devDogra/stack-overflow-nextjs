import React from "react";
import { RightSidebarQuestions, RightSidebarTags } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function RightSidebar() {
  return (
    <>
      {/* Top Questions */}
      <section>
        <p className="h3-bold text-dark-200 dark:text-light-900 ">
          Top Questions
        </p>
        <ul className="list-none mt-8 gap-7 flex flex-col">
          {RightSidebarQuestions.map((item) => (
            <Link href={item.route} className="flex gap-2 justify-between">
              <p className="body-medium text-dark-500 dark:text-light-700">
                {item.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt={item.title + " " + "image"}
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </ul>

        {/* Popular Tags */}
      </section>
      <section className="mt-20">
        <p className="h3-bold mt-8 text-dark-200 dark:text-light-900 ">
          Popular Tags
        </p>
        <ul className="list-none mt-8 gap-4 flex flex-col">
          {RightSidebarTags.map((item) => (
            <Link href={item} className="flex gap-2 justify-between">
              <Button className="text-sm font-medium text-dark-500 dark:text-light-700 btn-primary  bg-light-800 dark:bg-dark-300">
                {item}
              </Button>
              <span className=" text-dark-500 dark:text-light-700 ">23</span>
            </Link>
          ))}
        </ul>
      </section>
    </>
  );
}
