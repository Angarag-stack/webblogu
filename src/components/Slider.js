import moment from "moment";
import useSWR from "swr";
import { Next } from "./icons/next";
import { useState } from "react";
import useSWR from "swr";

const url = "https://dev.to/api/articles";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Screen = (props) => {
  const { img, text, tags, date } = props;
  return (
    <div className="relative ">
      {" "}
      <div
        style={{
          height: 600,
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: "12px",
        }}
      />
      <div className="p-10 bg-white text-start w-[598px] flex flex-col gap-7 absolute bottom-2 left-2 rounded-md ">
        <div className=" border bg-blue-700 text-white py-1 px-[10px] font-normal text-sm  rounded-lg w-[97px]">
          {tags}
        </div>
        <div className="text-2xl font-medium ">{text}</div>

        <div className="font-normal text-gray-400">
          {moment(date).format("ll")}
        </div>
      </div>
    </div>
  );
};

export const Slide = () => {
  const { data: blogs, error, isLoading } = useSWR(url, fetcher);
  const [slide, setSlide] = useState(0);

  if (error) {
    return <p>...oh error</p>;
  }

  if (isLoading) {
    return <p>...loading</p>;
  }
  const Nextslide = () => {
    setSlide((prev) => prev + 1);
  };
  const Prevslide = () => {
    if (slide > 0) setSlide((prev) => prev - 1);
  };
  return (
    <div>
      {blogs.map((blog, index) => {
        if (index === slide) {
          return (
            <Screen
              key={blog.id}
              img={blog.cover_image}
              text={blog.title}
              tags={blog.tag_list[0]}
            />
          );
        }
      })}
      <div className="flex flex-row  justify-end gap-2">
        <button onClick={Prevslide}>
          <Back></Back>
        </button>
        <button onClick={Nextslide}>
          <Next></Next>
        </button>
      </div>
    </div>
  );
};