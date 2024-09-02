import moment from "moment";
import { Back } from "./icons/back";
import { Next } from "./icons/next";
import { useState } from "react";
import useSWR from "swr";
const url = "https://dev.to/api/articles";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const Slide = (props) => {
  const { data: blogs, error, isLoading } = useSWR(url, fetcher);
  if (error) {
    return <p>...oh error</p>;
  }

  if (isLoading) {
    return <p>...loading</p>;
  }

  // const Nextslide = blogs.index + 1;
  // const Backslide = blogs.index - 1;
  const { img, text, date, tags, href, index } = props;
  console.log(blogs);
  return (
    // <div id={index} className="relative carousel w-full">
    //   {index}
    //   <div className="carousel-item">
    //     <img className="rounded-2xl" src={img}></img>{" "}
    //     <div className="p-10 bg-white text-start flex flex-col gap-7 absolute top-44 left-2 rounded-2xl ">
    //       <div className="font-normal text-sm text-blue-600 py-1 px-[10px] rounded-lg bg-gray-50 ">
    //         {tags}
    //       </div>
    //       <div className="text-4xl font-medium ">{text}</div>
    //       <div className="font-normal text-gray-400">
    //         {moment(date).format("ll")}
    //       </div>
    //     </div>
    //     <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform ">
    //       <a href={index} class="btn btn-circle">
    //         ❮
    //       </a>
    //       <a href={index} class="btn btn-circle">
    //         ❯
    //       </a>
    //     </div>
    //   </div>
    // </div>
    <div class="carousel w-full">
      <div class=" relative w-full">
        {index}
        <img src={img} class="w-full" />
        <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a class="btn btn-circle">{href}❮</a>
          <a class="btn btn-circle">{href}❯</a>
        </div>
      </div>
    </div>
  );
};
