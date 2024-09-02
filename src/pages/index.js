import { Heads } from "@/components/Head";
import { BlogCard } from "../components/BlogCard";
import useSWR from "swr";
import { Load } from "@/components/Loadmore";
import { Menu } from "@/components/Blogmenu";
import { TrendingBlogCards, Trending } from "@/components/Trend";
import { Footer } from "@/components/About";
import { Slide } from "@/components/Slider";

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
  const trendingBlogs = blogs?.slice(0, 3);
  const allblogs = blogs?.slice(0, 8);
  const slider = blogs?.slice(0, 1);

  console.log(slider);
  return (
    <div className="gap-[15px]">
      <div className="text-center xl:max-w-[1024px] xl:m-auto flex flex-col gap-[100px]  ">
        <Heads />
        <div>
          <Slide
            text={blogs[0].title}
            img={blogs[0].cover_image}
            tags={blogs[0].tags}
          />
        </div>
        <div className=" flex flex-col gap-[30px]">
          <Trending />
          <div className="grid grid-cols-4 gap-5">
            {trendingBlogs.map((blog) => {
              return (
                <TrendingBlogCards
                  key={blog.id}
                  img={blog.cover_image}
                  text={blog.title}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-8">
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
                  tags={blog.tags}
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
