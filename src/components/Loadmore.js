import { BlogCard } from "./BlogCard";
import useSWR from "swr";
import React, { useState } from "react";
import { SERVER_FILES_MANIFEST } from "next/dist/shared/lib/constants";

const url = `https://dev.to/api/articles`;
const fetcher = (...args) => fetch(...args).then((res) => res.json());
// const url = "https://dev.to/api/tags?per_page=20";
// const fetcher = (...args) => fetch(...args).then((res) => res.json());

// export const Menu = () => {

//   if (error) {
//     return <p>...oh error</p>;
//   }

//   if (isLoading) {
//     return <p>...loading</p>;
//   }

//   return (

//   );
// };

// export const Menu = () => {
//   const { data: blogs, error, isLoading } = useSWR(url, fetcher);
//   const [name, setName] = useState(5);
//   const [selectedTag, setSelectedTag] = useState("");
//   if (error) {
//     return <p>...oh error</p>;
//   }

//   if (isLoading) {
//     return <p>...loading</p>;
//   }

//   const Showname = () => {
//     setName(blogs.length);
//   };

//   const selectTag = (tag) => {
//     setSelectedTag(tag);
//     console.log(tag);
//   };

//   return (
//     <div className="flex flex-col gap-8">
//       <div className="text-start text-2xl font-semibold ">All blog post</div>
//       <div className="flex justify-between">
//         <div className="flex flex-wrap gap-3 lg:gap-5 text-gray-600 font-semibold">
//           {blogs.map((tag, index) => {
//             if (index < name)
//               return (
//                 <Tags
//                   tag_list={tag.tags}
//                   key={index}
//                   selectTag={selectTag}
//                 ></Tags>
//               );
//           })}
//         </div>
//         <div className=" text-gray-900 font-semibold" onClick={Showname}>
//           View all
//         </div>
//       </div>
//     </div>
//   );
// };

export const More = (props) => {
  const { tag } = props;
  const { data: blogs, error, isLoading } = useSWR(url, fetcher);
  const [load, setLoad] = useState(9);
  const [name, setName] = useState(5);
  const [selectedTag, setSelectedTag] = useState("");

  if (error) {
    return <p>...oh error</p>;
  }

  if (isLoading) {
    return <p>...loading</p>;
  }
  // const tags = blogs.;
  console.log(blogs);
  const posts = blogs.slice(0, load);

  const loadmore = () => {
    setLoad((p) => p + 9);
  };
  const Showname = () => {
    setName(blogs.length);
  };

  const selectTag = (tag) => {
    setSelectedTag(tag);
    console.log(tag);
  };
  const selectdTag = blogs.filter((blog) => {
    if (blog.tags === tag) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div>
      <div className="flex flex-col gap-8">
        <div className="text-start text-2xl font-semibold ">All blog post</div>
        <div className="flex justify-between">
          <div className="flex flex-wrap gap-3 lg:gap-5 text-gray-600 font-semibold">
            {blogs.map((tag, index) => {
              if (index < name)
                return (
                  <Tags
                    tag_list={tag.tags}
                    key={index}
                    selectTag={selectTag}
                  ></Tags>
                );
            })}
          </div>
          <div className=" text-gray-900 font-semibold" onClick={Showname}>
            View all
          </div>
        </div>
      </div>
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
              tags={blog.tags}
            />
          );
        })}
      </div>{" "}
      <button
        onClick={loadmore}
        className="border py-3 px-5 rounded-[6px] text-gray-500 w-[123px] mt-7"
      >
        {" "}
        Load More
      </button>
    </div>
  );
};

// const numbers = [1, 1, 2, 3, 4];
// const myFilterNumber = 2;

// const filterFunction = (number) => {
//   if (number === myFilterNumber) {
//     return true;
//   } else {
//     return false;
//   }
// };
// const filteredNumbers = numbers.filter(filterFunction);

// console.log(filteredNumbers);

const Tags = (props) => {
  const { tag_list, selectTag } = props;
  return <div onClick={() => selectTag(tag_list)}>{tag_list}</div>;
};
