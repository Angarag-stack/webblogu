// import useSWR from "swr";
// import { ThemeContext } from "./ThemeContext";
// import { useContext, useState } from "react";
// const fetcher = (...args) => fetch(...args).then((res) => res.json());
// export const Tags = () => {
//   // const { tags } = useContext(ThemeContext);

//   const [tag, setTag] = useState();
//   const url = `https://dev.to/api/articles?tag=${tag}`;
//   const { blogs, isloading, error } = useSWR(url, fetcher);
//   const { data: tags, loading1, error1 } = useSWR(url, fetcher);
//   const [show, setShow] = useState("view all");
//   const [text, setText] = useState(5);
//   const [load, setLoad] = useState(9);

//   if (isloading) return <div>...wait</div>;
//   if (error) return <div>...oh sorry error</div>;
//   const Loadmore = () => {
//     setLoad((prev) => prev + 3);
//   };
//   const datas = blogs?.slice(0, load);
//   const Value = (g) => {
//     setTag(g.target.innerHTML);
//   };
//   const Showall = () => {
//     setShow(show === "view all" ? "showless" : "view all");
//     setText(show === "showless" ? 5 : tags.length);
//   };
//   return (
//     <div>
//       <div>
//         <div className="flex gap-2">
//           {tags?.map((tag, index) => {
//             if (index < text)
//               return (
//                 <div onClick={Value} key={index}>
//                   {tag.name}
//                 </div>
//               );
//           })}
//         </div>
//         <div onClick={Showall}>{show}</div>
//       </div>
//       <div className="grid grid-cols-3 gap-10">
//         {datas.map((blog) => {
//           return (
//             <div>
//               <img src={blog.cover_image}></img>
//               <div className="border rounded-lg w-fit gap-2">{blog.tags}</div>
//               <p>{blog.title}</p>
//             </div>
//           );
//         })}
//       </div>
//       <button onClick={Loadmore} class="btn">
//         Loadmore
//       </button>
//     </div>
//   );
// };
