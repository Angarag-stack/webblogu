import useSWR from "swr";

const url = " https://dev.to/api/articles";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const Homee = () => {
  const { data: news, error, isLoading } = useSWR(url, fetcher);
  if (isLoading) return <p>...isLoading</p>;
  if (error) return <p>Error</p>;
  return (
    <div>
      {news.map((element) => {
        return <New photo={element.cover_image} />;
      })}
    </div>
  );
};

const New = (props) => {
  const { photo } = props;
  return <div>{photo}</div>;
};
