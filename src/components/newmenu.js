import { ThemeContext } from "./ThemeContext";
import { useContext, useState } from "react";
export const Tags = () => {
  const { blogs, tags } = useContext(ThemeContext);
  const [show, setShow] = useState("view all");
  const [text, setText] = useState(5);
  const Showall = () => {
    setShow(show === "view all" ? "showless" : "view all");
    setText(show === "view all" ? 5 : tags.length);
  };
  return (
    <div>
      <div className="flex gap-2">
        {tags?.map((tag, index) => {
          if (index < text) return <div key={index}>{tag.name}</div>;
        })}
      </div>
      <div onClick={Showall}>{show}</div>
    </div>
  );
};
