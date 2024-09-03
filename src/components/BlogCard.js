import moment from "moment";
export const BlogCard = (props) => {
  const { title, cover_image, date, tags } = props;
  return (
    <div className="border border-solid p-4 rounded-lg flex flex-col justify-around">
      <div className="mb-4">
        <img src={cover_image} className="rounded-lg w-[360px] h-[240px] " />
      </div>
      <div className="flex flex-col  ">
        <div className="flex flex-col gap-3">
          <div className="font-normal text-sm text-blue-600  px-[10px] rounded-lg bg-gray-50 ">
            {tags}
          </div>
          <h1 className="text-xl font-semibold">{title}</h1>{" "}
        </div>
      </div>{" "}
      <div className="font-normal text-gray-400">
        {moment(date).format("ll")}
      </div>
    </div>
  );
};
