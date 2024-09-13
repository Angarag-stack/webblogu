import { createContext, useContext, useState } from "react";
import useSWR from "swr";
import { ThemeContext } from "./ThemeContext";

export const Menu = (props) => {
  const { blogs, tags } = useContext(ThemeContext);
  const [tagview, setTagview] = useState("View all");

  const { setSelectedTag } = props;
  const [name, setName] = useState(5);

  const Showname = () => {
    setTagview(tagview === "View all" ? "Show less" : "View all");
    setName(tagview === "View all" ? tags.length : 5);
  };
  const selectTag = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <div className="flex flex-col gap-8 mb-12">
      <div className="text-start text-2xl font-bold ">All blog post</div>
      <div className="flex justify-between">
        <div className="flex flex-wrap gap-3 lg:gap-5 text-gray-600 font-semibold">
          <div className="text-yellow-600 ">All</div>
          {tags?.map((tag, index) => {
            if (index < name)
              return (
                <Tags
                  tag_list={tag.name}
                  key={index}
                  selectTag={selectTag}
                ></Tags>
              );
          })}
        </div>
        <div className=" text-gray-900 font-semibold" onClick={Showname}>
          {tagview}
        </div>
      </div>
    </div>
  );
};

const Tags = (props) => {
  const { tag_list, selectTag } = props;
  return <div onClick={() => selectTag(tag_list)}>{tag_list}</div>;
};
