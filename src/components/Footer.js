import { Ig } from "./icons/Ig";
import { Fb } from "./icons/Fboook";
import { Twitter } from "./icons/twitter";
import { In } from "./icons/In";
import { Blogo } from "./icons/BlogLogo";

const abouts = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  "Email : info@jstemplate.net",
  "Phone : 880 123 456 789",
];

const header = ["Home", "Blog", "Contact"];
const link = ["Terms of Use", "Privacy Policy", "Cookie Policy"];
const Text = (props) => {
  const { text } = props;
  return (
    <div>
      <p className="lg:w-[280px] font-extralight text-base text-gray-700">
        {text}
      </p>
    </div>
  );
};
const Link = (props) => {
  const { text } = props;
  return (
    <div>
      <p className="">{text}</p>
    </div>
  );
};
export const Footer = () => {
  return (
    <div className="bg-gray-100  xl:w-[1216px] lg:py-[64px] lg:mx-auto">
      <div className=" text-center lg:flex justify-between">
        <div className="lg:text-start">
          <p className="text-lg font-medium ">About</p>
          {abouts.map((about, index) => {
            return <Text key={index} text={about} />;
          })}
        </div>
        <div className="gap-2 ">
          {header.map((element, index) => {
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
        <div className=" flex justify-center  gap-4 lg:flex lg:gap-4">
          <Ig />
          <Fb />
          <Twitter />
          <In />
        </div>
      </div>
      <div className="sm:flex justify-between py-8 mt-5 border-t-2">
        <div className="flex gap-2">
          <Blogo></Blogo>
          <div className="">
            <div className="flex">
              <p className="font-semibold">Meta</p>
              <p>Blog</p>
            </div>
            <p className="font-extralight text-base text-gray-700 ">
              © All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="sm:flex gap-4 font-extralight text-base text-gray-700">
          {link.map((element, index) => {
            return <Link key={index} text={element}></Link>;
          })}
        </div>
      </div>
    </div>
  );
};
