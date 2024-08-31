export const BlogCard = (props) => {
  const { title, cover_image, date } = props;
  return (
    <div>
      <div className="border border-solid p-4 rounded-lg flex flex-col justify-around ">
        <div>
          <img src={cover_image} className="rounded-lg" />
        </div>
        <div className="flex flex-col gap-5 ">
          <h1 className="text-xl font-semibold">{title}</h1>
          <div className="font-normal text-gray-400">{date}</div>
        </div>
      </div>
    </div>
  );
};
