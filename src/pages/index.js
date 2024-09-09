import { Heads } from "@/components/Head";
import { BlogCard } from "../components/BlogCard";
import useSWR from "swr";
import { Menu } from "@/components/Blogmenu";
import { TrendingBlogCards, Trending } from "@/components/Trend";
import { Footer } from "@/components/About";
import { Slide } from "@/components/Slider";
import { useState } from "react";
import { More } from "@/components/Loadmore";

const url = "https://dev.to/api/articles";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Home = () => {
  const { data: blogs, error, isLoading } = useSWR(url, fetcher);
  const { post, setPost } = useState(9);
  if (error) {
    return <p>...oh error</p>;
  }
  if (isLoading) {
    return (
      <div>
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
      </div>
    );
  }
  const trendingBlogs = blogs?.slice(0, 4);
  const allblogs = () => {
    setPost((prev) => prev + 9);
  };
  const slider = blogs?.slice(0, 1);

  return (
    <div className="flex flex-col gap-[100px] ">
      <div className="text-center px-10 xl:max-w-[1024px] xl:m-auto flex flex-col gap-[20px] lg:gap-[100px]  ">
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
                  />sss
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
          <div className="carousel carousel-center rounded-box gap-4">
            {blogs.map((blog) => {
              return (
                <div className="carousel-item " key={blog.id}>
                  <TrendingBlogCards
                    id={blog.id}
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
          {/* <Menu /> */}
          <More></More>
        </div>
      </div>
    </div>
  );
};
export default Home;
