import { Heads } from "@/component/Head";
import { BlogCard } from "../component/BlogCard";
import useSWR from "swr";

const url = "https://dev.to/api/articles";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Home = () => {
  const { data: blogs, error, isLoading } = useSWR(url, fetcher);
  console.log(blogs);
  if (error) {
    return <p>...oh aldaa garchlaa</p>;
  }

  if (isLoading) {
    return <p>...loading</p>;
  }

  return (
    <div>
      <Heads />
      <div className="grid grid-cols-3">
        {blogs.map((blog) => {
          return (
            <BlogCard
              key={blog.id}
              title={blog.title}
              cover_image={blog.cover_image}
              date={blog.created_at}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Home;
