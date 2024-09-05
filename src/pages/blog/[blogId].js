import { Heads } from "@/components/Head";
import parse from "html-react-parser";
import moment from "moment";
import { useRouter } from "next/router";
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
  const body_html = blogs?.body_html;
  console.log(body_html);

  return (
    <div className=" xl:max-w-[1024px] xl:m-auto ">
      <Heads></Heads>
      <div>{parse(body_html)}</div>

      {/* <div className=" flex  flex-col gap-5">
        <div className="font-medium text-4xl">{blogs.title}</div>

        <div className="flex text-gray-400 gap-7">
          <div className="flex gap-2">
            <img
              src={blogs.user.profile_image_90}
              className="rounded-[28px] w-[28px] h-[28px]"
            ></img>
            <div className="text-gray-400">{blogs.user.name}</div>{" "}
          </div>{" "}
          {moment(blogs.created_at).format("ll")}
        </div>
      </div>

      <div>
        <img src={blogs.cover_image} className="rounded-lg" />
      </div>
      <div>{blogs.description}</div> */}
    </div>
  );
};
export default DetailNews;
