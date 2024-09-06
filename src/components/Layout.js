import Head from "next/head";
import { Heads } from "./Head";
import { Footer } from "./About";

export const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <Heads />
      {children}
      <Footer />
    </div>
  );
};
