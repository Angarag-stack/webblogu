// import { useContext } from "react";
// import { ThemeContext } from "./ThemeContext";

// export const Card = () => {
//   // const { img, title, tag } = props;
//   const { blogs, tags } = useContext(ThemeContext);
//   const cards = blogs?.slice(0, 6);
//   console.log(blogs);
//   return (
//     <div>
//       <p>Trending</p>
//       {cards.map((card, index) => {
//         return (
//           <div key={index} style={{ backgroundImage: `(${card.cover_image})` }}>
//             <div>{card.tags.name}</div>
//             <div>{card.title}</div>
//             <img src={card.cover_image}></img>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
