import { useState } from "react";
import useSWR from "swr";
import { BlogCard } from "./BlogCard";
const menus = ["All", "Design", "Travel", "fashion", "Technology", "Branding"];
const url = "https://dev.to/api/tags?per_page=20";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const Menu = () => {
  const { data: tags, error, isLoading } = useSWR(url, fetcher);
  const [name, setName] = useState(5);
  const [selectedTag, setSelectedTag] = useState("");
  if (error) {
    return <p>...oh error</p>;
  }

  if (isLoading) {
    return <p>...loading</p>;
  }

  const Showname = () => {
    setName(tags.length);
  };

  const selectTag = (tag) => {
    setSelectedTag(tag);
    console.log(tag);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="text-start text-2xl font-semibold ">All blog post</div>
      <div className="flex justify-between">
        <div className="flex flex-wrap gap-3 lg:gap-5 text-gray-600 font-semibold">
          {tags.map((tag, index) => {
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
          View all
        </div>
      </div>
    </div>
  );
};

const Tags = (props) => {
  const { tag_list, selectTag } = props;
  return <div onClick={() => selectTag(tag_list)}>{tag_list}</div>;
};
//   for (let i = 0; i < blogs.length; i++) {
//     if (blogs[i].tag_list.includes(g)) {
//       selectedCategory.push(blogs[i]);
//     }
//   }

const Parent = () => {
  const [tag, setTag] = useState("");
  return (
    <div>
      <Child1 tag={tag} onSelectTag={setTag} />
      <Child2 tag={tag} />
    </div>
  );
};

const Child1 = (props) => {
  const { onSelectTag } = props;

  const handleSelectTag = (tag) => {
    onSelectTag(tag);
  };
  return (
    <div>
      <button onClick={() => handleSelectTag("tech")}>tech</button>
      <button onClick={() => handleSelectTag("fun")}>fun</button>
    </div>
  );
};

const Child2 = (props) => {
  const { tag } = props;

  const blogs = ["tech", "fun", "fun"];

  const filteredBlogs = blogs.filter((blog) => {
    if (blog === tag) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div>
      {filteredBlogs.map((blog) => {
        return <p>blog</p>;
      })}
    </div>
  );
};
