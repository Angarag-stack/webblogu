import { Blogo } from "@/components/icons/BlogLogo";
// import { Search } from "./icons/Search";
import { Blog } from "./icons/Blogtext";
import { Meta } from "./icons/Meta";
import { Search } from "./icons/Search";
import { Kebab } from "@/components/icons/kebab";
import Link from "next/link";

const Header = ["Home", "Blog", "Contact"];
export const Heads = (props) => {
  const { id } = props;
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
          <div className="flex items-center  bg-gray-100 rounded">
            <input
              className=" bg-gray-100 rounded-md h-9 font-extralight text-base transition ease-in-out delay-[0.3s] hover:-translate-y-1 hover:scale-110 hover: duration-[0.3s] hover:transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
"
              placeholder="  search"
            ></input>
            <Search></Search>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
