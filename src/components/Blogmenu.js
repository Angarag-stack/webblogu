import { useState } from "react";
import useSWR from "swr";
const menus = ["All", "Design", "Travel", "fashion", "Technology", "Branding"];
const url = "https://dev.to/api/tags";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const Menu = () => {
  const { data: tags, error, isLoading } = useSWR(url, fetcher);
  const [name, setName] = useState(5);
  const [tag, setTag] = useState("");
  if (error) {
    return <p>...oh error</p>;
  }

  if (isLoading) {
    return <p>...loading</p>;
  }
  const Showname = () => {
    setName(tags.length);
  };
  // const Tagname = tags[0].name;
  // console.log(Tagname);
  const selectTag = () => {
    console.log(name);
  };
  const Tags = (props) => {
    const { tag_list } = props;
    return (
      <select>
        <option onChange={selectTag}>{tag_list}</option>
      </select>
    );
  };
  return (
    <div className="flex flex-col gap-8">
      <div className="text-start text-2xl font-semibold ">All blog post</div>
      <div className="flex justify-between">
        <div className="flex flex-wrap gap-3 lg:gap-5 text-gray-600 font-semibold">
          {tags.map((tag, index) => {
            if (index < name)
              return <Tags tag_list={tag.name} key={index}></Tags>;
          })}
        </div>
        <div className=" text-gray-900 font-semibold" onClick={Showname}>
          View all
        </div>
      </div>
    </div>
  );
};
