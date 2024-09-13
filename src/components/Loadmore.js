import { BlogCard } from "./BlogCard";
import useSWR from "swr";
import React, { useContext, useState } from "react";
import { Menu } from "./Blogmenu";
import { ThemeContext } from "./ThemeContext";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const More = () => {
  const [selectedTag, setSelectedTag] = useState("");
  // const { blogs, tags } = useContext(ThemeContext);
  const url = `https://dev.to/api/articles?tag=${selectedTag}`;
  const { data: blogs, error, isLoading } = useSWR(url, fetcher);

  const [load, setLoad] = useState(9);
  const [name, setName] = useState(5);

  if (error) {
    return <p>...oh error</p>;
  }

  if (isLoading) {
    return <p>...loading</p>;
  }

  const posts = blogs.slice(0, load);

  const loadmore = () => {
    setLoad((p) => p + 9);
  };
  return (
    <div>
      <Menu setSelectedTag={setSelectedTag} />
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
              tag={blog.tags}
            />
          );
        })}
      </div>{" "}
      <button
        onClick={loadmore}
        className="border py-3 px-5 rounded-[6px] text-gray-500 w-[123px] my-7"
      >
        {" "}
        Load More
      </button>
    </div>
  );
};
