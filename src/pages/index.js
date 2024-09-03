import { Heads } from "@/components/Head";
import { BlogCard } from "../components/BlogCard";
import useSWR from "swr";
import { Load } from "@/components/Loadmore";
import { Menu } from "@/components/Blogmenu";
import { TrendingBlogCards, Trending } from "@/components/Trend";
import { Footer } from "@/components/About";
import { Slide } from "@/components/Slider";
import { useState } from "react";

const url = "https://dev.to/api/articles";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Home = () => {
  const { data: blogs, error, isLoading } = useSWR(url, fetcher);

  if (error) {
    return <p>...oh error</p>;
  }

  if (isLoading) {
    return <p>...loading</p>;
  }

  const trendingBlogs = blogs?.slice(0, 4);
  const allblogs = blogs?.slice(0, 9);
  const slider = blogs?.slice(0, 1);

  return (
    <div className="flex flex-col gap-[100px]">
      <div className="text-center xl:max-w-[1024px] xl:m-auto flex flex-col gap-[100px]  ">
        <Heads />
        <div className="">
          <Slide></Slide>
          {/* <div className="carousel w-full">
            {blogs.map((blog, index) => {
              return (
                <div key={blog.id} className="carousel-item w-full">
                  <Slide
                    key={blog.id}
                    text={blog.title}
                    img={blog.cover_image}
                    tags={blog.tag_list[0]}
                    index={index}
                  />
                </div>
              );
            })}{" "}
          </div>
          {/* <div class=" top-1/2 flex -translate-y-1/2 transform ">
            <a href={`#${index + 1}`} class="btn btn-circle">
              ❮
            </a>
            <a href={`#${index - 1}`} class="btn btn-circle">
              ❯
            </a>
          </div> */}
        </div>
        <div className=" flex flex-col gap-[30px]">
          <Trending />
          <div className="carousel carousel-center rounded-box  gap-4">
            {blogs.map((blog) => {
              return (
                <div className="carousel-item ">
                  <TrendingBlogCards
                    key={blog.id}
                    img={blog.cover_image}
                    text={blog.title}
                    tag={blog.tag_list[0]}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-8 ">
          <Menu />
          <div className="grid grid-cols-3 gap-5 text-start">
            {allblogs.map((blog) => {
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
          <Load />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
