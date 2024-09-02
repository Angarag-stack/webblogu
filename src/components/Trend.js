export const TrendingBlogCards = (props) => {
  const { text, img } = props;
  console.log(img);
  return (
    <div>
      <img className="w-[290px] h-[320px] rounded-lg" src={img} />
      <div className="">{text}</div>
    </div>
  );
};
// export const TrendingBlogCards = (props) => {
//   const { trendingBlogs } = props;
//   return (
//     <div>
//       <div className="text-start text-2xl font-semibold">Trending</div>
//       {trendingBlogs.map((trendingBlog) => {
//         return <TrendingBlogCard img={trendingBlog} />;
//       })}
//     </div>
//   );
// };

export const Trending = () => {
  return <p className="text-start text-2xl font-semibold">Trending</p>;
};
