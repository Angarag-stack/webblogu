import { Blogo } from "@/components/icons/BlogLogo";
// import { Search } from "./icons/Search";
import { Blog } from "./icons/Blogtext";
import { Meta } from "./icons/Meta";
import { Kebab } from "@/components/icons/kebab";
import Link from "next/link";
import { useState } from "react";

const Header = ["Home", "Blog", "Contact"];
export const Heads = (props) => {
  const { id, search } = props;
  // const [search, setSearch] = useState();

  return (
    <div className="px-10 text-center xl:max-w-[1216px] xl:m-auto   ">
      <div className="flex flex-row justify-between pt-[32px] pb-[20px] lg:pb-[100px]">
        <div className=" flex justify-between items-center gap-2">
          <Blogo></Blogo>
          <div className="flex items-center gap-1">
            <Meta></Meta>
            <Blog></Blog>
          </div>
        </div>
        <Kebab></Kebab>
        <div className="hidden lg:flex lg:flex-row lg:justify-between gap-[21px] items-center  ">
          <div className="flex flex-row  justify-evenly w-[400px] font-extralight text-base text-gray-700">
            <Link href={`/`}>Home</Link>
            <Link href={`/blog`}>Blog</Link>
            <Link href="/Contact">Contact</Link>
          </div>

          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>{" "}
      </div>
    </div>
  );
};
