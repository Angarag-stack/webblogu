import { useState } from "react";
import useSWR from "swr";
const menus = ["All", "Design", "Travel", "fashion", "Technology", "Branding"];
const url = "https://dev.to/api/articles";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const Menu = () => {
  const { data: blogs, error, isLoading } = useSWR(url, fetcher);

  if (error) {
    return <p>...oh error</p>;
  }

  if (isLoading) {
    return <p>...loading</p>;
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="text-start text-2xl font-semibold ">All blog post</div>
      <div className="flex justify-between">
        <div className="flex flex-wrap gap-3 lg:gap-5 text-gray-600 font-semibold">
          {blogs.map((blog) => {
            return <Tags tag_list={blog.tag_list[0]} key={blog.index}></Tags>;
          })}
        </div>
        <div className=" text-gray-900 font-semibold">View all</div>
      </div>
    </div>
  );
};
const Tags = (props) => {
  const { tag_list } = props;
  return <div>{tag_list}</div>;
};
