import { BlogCard } from "./BlogCard";
import useSWR from "swr";
import React, { useState } from "react";

const url = "https://dev.to/api/articles";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const More = () => {
  const { data: blogs, error, isLoading } = useSWR(url, fetcher);
  const [load, setLoad] = useState(9);

  if (error) {
    return <p>...oh error</p>;
  }

  if (isLoading) {
    return <p>...loading</p>;
  }
  const posts = blogs.slice(0, load);

  const Loadmore = () => {
    setLoad((p) => p + 9);
  };
  console.log(load);
  return (
    <div>
      {" "}
      <div className=" md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-8  ">
        {posts.map((blog) => {
          return (
            <BlogCard
              id={blog.id}
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
      <button
        onClick={Loadmore}
        className="border py-3 px-5 rounded-[6px] text-gray-500 w-[123px] mt-7"
      >
        {" "}
        Load More
      </button>
    </div>
  );
};
