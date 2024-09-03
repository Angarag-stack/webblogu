import Home from "@/pages";
import { useState } from "react";
import { BlogCard } from "./BlogCard";
import useSWR from "swr";

const url = "https://dev.to/api/articles";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const More = () => {
  const { data: blogs, error, isLoading } = useSWR(url, fetcher);
  // const { load, setLoad } = useState(0);

  if (error) {
    return <p>...oh error</p>;
  }

  if (isLoading) {
    return <p>...loading</p>;
  }
  const threeblog = blogs?.slice(0, 3);
  const loadmore = () => {
    setLoad((prev) => {
      prev + 1;
    });
  };
  return (
    <div>
      {" "}
      <div className="grid grid-cols-3 gap-5 text-start">
        {threeblog.map((blog) => {
          return (
            <BlogCard
              key={blog.id}
              title={blog.title}
              cover_image={blog.cover_image}
              date={blog.created_at}
              auther={blog.user.name}
              tags={blog.tag_list[0]}
            />
          );
        })}
      </div>{" "}
    </div>
  );
};
export const Load = () => {
  return (
    <button
      onClick={More}
      className="border py-3 px-5 rounded-[6px] text-gray-500 w-[123px] "
    >
      {" "}
      Load More
    </button>
  );
};
