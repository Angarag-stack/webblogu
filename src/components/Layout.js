import Head from "next/head";
import { Heads } from "./Head";
import { Footer } from "./Footer";

export const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <Heads />
      {children}
      <div className="bg-gray-100 p-10">
        <Footer />
      </div>
    </div>
  );
};
