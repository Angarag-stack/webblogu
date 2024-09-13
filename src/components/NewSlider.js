// import { useContext, useEffect, useState } from "react";
// import { ThemeContext } from "./ThemeContext";
// import { Back } from "./icons/back";
// import { Next } from "./icons/next";
// import Link from "next/link";

// const Slide = (props) => {
//   const { img, tag, title, id } = props;
//   return (
//     <Link href={`newblog/(${id})`}>
//       <div
//         style={{
//           backgroundImage: `url(${img})`,
//           backgroundRepeat: "no-repeat",
//           height: 600,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div>{tag}</div>
//         <div>{title}</div>
//       </div>
//     </Link>
//   );
// };
// export const Slider = () => {
//   const { blogs, tags } = useContext(ThemeContext);
//   console.log(blogs);
//   const [screen, setScreen] = useState(1);

//   const Nexttask = () => {
//     if (screen < blogs.length - 1) setScreen((prev) => prev + 1);
//     // if (screen === blogs.lenght) setScreen(blogs[0]);
//   };
//   const Backtask = () => {
//     if (screen > 0) setScreen((prev) => prev - 1);
//   };
//   return (
//     <div className="">
//       {blogs.map((blog, index) => {
//         if (index === screen)
//           return (
//             <div key={index}>
//               {" "}
//               <Slide
//                 id={blog.id}
//                 img={blog.cover_image}
//                 tag={blog.tag_list}
//                 title={blog.title}
//               ></Slide>
//             </div>
//           );
//       })}
//       <button onClick={Backtask}>
//         <Back></Back>
//       </button>
//       <button onClick={Nexttask}>
//         <Next></Next>
//       </button>
//     </div>
//   );
// };
