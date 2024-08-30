export const BlogCard = (props) => {
  const { title, cover_image, date, auther, autherimg } = props;
  return (
    <div className="border border-solid p-4 w-52">
      <img width={300} src={cover_image} />
      <h1>{title}</h1>
      <div>
        <img src={autherimg} />
        <a>{auther}</a>
        <a>{date}</a>
      </div>
    </div>
  );
};
