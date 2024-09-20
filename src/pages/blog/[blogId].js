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
  const { data: blogs = {}, isLoading } = useSWR(url, fetcher);
  if (isLoading) {
    return <p>hhh</p>;
  }
  // const bodyhtml = blogs?.body_html;
  //   // const query = router.query.blogId;
  //   // console.log(blogId);
  //   // console.log(query);
  //   // const url = `https://dev.to/api/articles/${query}`;
  //   // const { data: blogs = {}, isLoading } = useSWR(url, fetcher);

  //   // if (error) {
  //   //   return <p>...oh error</p>;
  //   // }

  //   // if (isLoading) {
  //   //   return <span className="loading loading-spinner text-primary"></span>;
  //   // }

  //   console.log(bodyhtml);
  //   // const bodymarkdown = blogs?.body_markdown;
  //   // console.log(bodymarkdown);
  const bodyMarkdown = blogs?.body_markdown;

  return (
    <div className=" xl:max-w-[1216px] xl:m-auto mx-auto  flex flex-col  gap-10  p-10 ">
      <h1 className="text-3xl font-medium m-auto w-">{blogs.title}</h1>{" "}
      <div className="flex justify-start gap-6 m-auto">
        <div className="flex gap-3">
          <img
            src={blogs.user.profile_image}
            className="w-[28px] h-[28px] rounded-xl"
          />
          <p className="text-gray-600">{blogs.user.name}</p>{" "}
        </div>
        <div className="text-gray-600">
          {moment(blogs.created_at).format("ll")}
        </div>{" "}
      </div>
      <div className="prose m-auto">
        <Markdown>{bodyMarkdown}</Markdown>
      </div>
    </div>
  );

  //   // <div className=" xl:max-w-[1216px] xl:m-auto mx-auto  flex flex-col  gap-10 justify-center pb-10 ">
  //   //   <h1 className="text-2xl font-medium m-auto ">{blogs.title}</h1>{" "}
  //   //   <div className="flex gap-6 m-auto">
  //   //     <div className="flex gap-3">
  //   //       <img
  //   //         src={blogs.user.profile_image}
  //   //         className="w-[28px] h-[28px] rounded-xl"
  //   //       />
  //   //       <p className="text-gray-600">{blogs.user.name}</p>{" "}
  //   //     </div>
  //   //     <div className="text-gray-600">
  //   //       {moment(blogs.created_at).format("ll")}
  //   //     </div>{" "}
  //   //   </div>
  //   //   <div className="prose m-auto">
  //   //     <Markdown>{bodyMarkdown}</Markdown>
  //   //   </div>
  //   // </div>
  // };
  // export default DetailNews;
  // import { parse } from "next/dist/build/swc";
  // import { useRouter } from "next/router";
  // import useSWR from "swr";
  // const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // const DetailNews = () => {
  //   const router = useRouter();
  //   const query = router.query.blogid;
  //   const url = `https://dev.to/api/articles${query}`;
  //   const { data: Blogdetail = {}, isLoading } = useSWR(url, fetcher);
  //   console.log(Blogdetail);
  //   if (isLoading) return <p>wait</p>;
  //   const bodyhtml = Blogdetail?.body_html;
  //   return;
  //   //  <div>{parse(bodyhtml)}</div>;
};
export default DetailNews;
