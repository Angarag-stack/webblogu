import { Heads } from "@/components/Head";
import parse from "html-react-parser";
import moment from "moment";
import { useRouter } from "next/router";
import Markdown from "react-markdown";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const DetailNews = () => {
  const router = useRouter();
  const query = router.query.blogId;
  const url = `https://dev.to/api/articles/${query}`;
  const { data: blogs = {}, error, isLoading } = useSWR(url, fetcher);

  if (error) {
    return <p>...oh error</p>;
  }

  if (isLoading) {
    return <span className="loading loading-spinner text-primary"></span>;
  }

  const bodyMarkdown = blogs?.body_markdown;

  return (
    <div className=" xl:max-w-[1024px] xl:m-auto mx-auto w-[655px] flex flex-col gap-10 justify-center ">
      <h1 className="text-2xl font-medium">{blogs.title}</h1>
      <img src={blogs.user.profile_image} className="w-[20px] h-[20px]" />
      <div className="prose ">
        <Markdown>{bodyMarkdown}</Markdown>
      </div>
    </div>
  );
};
export default DetailNews;
