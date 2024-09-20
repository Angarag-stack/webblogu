import moment from "moment";
import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export const BlogCard = (props) => {
  const { title, cover_image, date, tags, id } = props;
  const { blogs } = useContext(ThemeContext);

  return (
    <Link href={`blog/${id}`}>
      <div className="border border-solid p-4 rounded-lg flex flex-col justify-around">
        <div className="mb-4 flex justify-center ">
          <img src={cover_image} className="rounded-lg w-[360px] h-[240px]  " />
        </div>
        <div className="flex flex-col  ">
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap  gap-2">
              {tags.map((tag, index) => {
                return (
                  <div
                    className=" font-normal text-sm text-blue-600  px-[10px] py-[5px] rounded-lg bg-gray-50 w-fit "
                    key={index}
                  >
                    <p>{tag}</p>
                  </div>
                );
              })}
            </div>
            <h1 className="text-xl font-semibold text-start">{title}</h1>{" "}
          </div>
        </div>{" "}
        <div className="font-normal text-start text-gray-400">
          {moment(date).format("MMMM DD, YYYY")}
        </div>
      </div>
    </Link>
  );
};

export default function Page() {
  return;
}
