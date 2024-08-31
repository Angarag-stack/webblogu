import { Heads } from "@/components/Head";
import { BlogCard } from "../components/BlogCard";
import useSWR from "swr";
import { Load } from "@/components/Loadmore";
import { Menu } from "@/components/Blogmenu";
import { Trend, Trending } from "@/components/Trend";

const url = "https://dev.to/api/articles";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Home = () => {
  const { data: blogs, error, isLoading } = useSWR(url, fetcher);
  console.log(blogs);
  if (error) {
    return <p>...oh error</p>;
  }

  if (isLoading) {
    return <p>...loading</p>;
  }

  return (
    <div className="text-center xl:max-w-[1024px] xl:m-auto flex flex-col gap-[100px]  ">
      <Heads />
      <div className=" flex flex-col gap-[30px]">
        <Trending></Trending>
        <div className="grid grid-cols-4 gap-5">
          {blogs.map((blog) => {
            return <Trend key={blog.id} img={blog.cover_image} />;
          })}
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <Menu></Menu>
        <div className="grid grid-cols-3 gap-5 text-start">
          {blogs.map((blog) => {
            return (
              <BlogCard
                key={blog.id}
                title={blog.title}
                cover_image={blog.cover_image}
                date={blog.created_at}
                auther={blog.user.name}
              />
            );
          })}
        </div>{" "}
        <Load></Load>
      </div>
    </div>
  );
};
export default Home;
