export const Trend = (props) => {
  const { text, img } = props;
  return (
    <div>
      <img className="rounded-xl h-[300px]" src={img}>
        {/* <div>{text}</div> */}
      </img>
    </div>
  );
};
export const Trending = () => {
  return <div className="text-start text-2xl font-semibold">Trending</div>;
};
