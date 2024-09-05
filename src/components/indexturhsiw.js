// import useSWR from "swr";
// import { BlogCard } from "./BlogCard";
// import { useState } from "react";
// const url = "https://dev.to/api/articles";
// const fetcher = (...args) => fetch(...args).then((res) => res.json());

// export const Loadmore = () => {
//   const { data: blogs, isLoading, oherror } = useSWR(url, fetcher);
//   const [name, setName] = useState(8);
//   if (isLoading) return <p>... is loading</p>;
//   if (oherror) return;
//   <p>...oh error</p>;
//   const Laod = () => {
//     setName((prev) => prev - 1);
//   };
//   const posts = [...blogs].slice(0, name);
//   return (
//     <div>
//       {posts.map((post) => {
//         return (
//           <BlogCard
//             key={post.id}
//             title={post.title}
//             cover_image={post.cover_image}
//             date={post.created_at}
//             auther={post.user.name}
//             tags={post.tag_list[0]}
//           />
//         );
//       })}
//       <button onClick={Laod}>Load More</button>
//     </div>
//   );
// };
