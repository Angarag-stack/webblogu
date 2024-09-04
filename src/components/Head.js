import { Blogo } from "@/components/icons/BlogLogo";
// import { Search } from "./icons/Search";
import { Blog } from "./icons/Blogtext";
import { Meta } from "./icons/Meta";
import { Search } from "./icons/Search";
import { Kebab } from "@/components/icons/kebab";

const Header = ["Home", "Blog", "Contact"];
export const Heads = () => {
  return (
    <div className="flex flex-row justify-between py-[32px]">
      <div className=" flex justify-between items-center gap-2">
        <Blogo></Blogo>
        <div className="flex items-center gap-1">
          <Meta></Meta>
          <Blog></Blog>
        </div>
      </div>
      <Kebab></Kebab>
      <div className="hidden lg:flex lg:flex-row lg:justify-between gap-[21px] items-center  ">
        <div className="flex flex-row  justify-evenly w-[400px]">
          {Header.map((element, index) => {
            return (
              <div
                className="font-extralight text-base text-gray-700"
                key={index}
              >
                {element}
              </div>
            );
          })}
        </div>
        <div className="flex items-center  bg-gray-100 rounded">
          <input
            className=" bg-gray-100 rounded-md h-9 font-extralight text-base"
            placeholder="   search"
          >
            {/* <Search></Search> */}
          </input>
          <Search></Search>
        </div>
      </div>{" "}
    </div>
  );
};
