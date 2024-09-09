import Link from "next/link";

export const TrendingBlogCards = (props) => {
  const { text, img, tag, id } = props;

  return (
    <Link href={`blog/${id}`}>
      <div className="card bg-base-100 image-full  shadow-lg carousel-item ">
        <div
          className="w-[250px] h-[320px]"
          style={{
            backgroundImage: `url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        {/* <figure>
        <img className="w-[290px] h-[320px] rounded-sm" src={img} />
      </figure> */}
        <div className="text-start flex flex-col absolute bottom-5 left-5 gap-4 rounded-md ">
          <div className="  bg-blue-700 text-white py-1 px-[10px] z-10  rounded-lg  h-12 w-52">
            {tag}
          </div>
          <div className="text-white z-10">{text}</div>
        </div>
      </div>
    </Link>
  );
};

export const Trending = () => {
  return <p className="text-start text-2xl font-semibold">Trending</p>;
};
