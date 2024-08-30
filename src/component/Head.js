import { Blogo } from "@/component/icons/BlogLogo";
const Header = ["Home", "Blog", "Content"];
export const Heads = () => {
  return (
    <div>
      <Blogo></Blogo>
      <a>MetaBlog</a>
      {Header.map((element, index) => {
        return <a key={index}>{element}</a>;
      })}
    </div>
  );
};
