import { createContext } from "react";
import useSWR from "swr";

const url = "https://dev.to/api/articles";
const url1 = "https://dev.to/api/tags?per_page=20";
// const url2 = `https://dev.to/api/articles?tag=${selectedTag}`;
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const ThemeContext = createContext();
export const ThemeContextProvider = ({ children }) => {
  const { data: blogs, loading, error } = useSWR(url, fetcher);
  const { data: tags, loading1, error1 } = useSWR(url1, fetcher);
  if (loading) {
    return <p>..is Loading</p>;
  }
  if (error) {
    return <p>oh error</p>;
  }
  if (loading1) return <p>...is loading</p>;
  if (error1) return <p>...oh sorry</p>;

  return (
    <ThemeContext.Provider value={{ blogs, tags }}>
      {children}
    </ThemeContext.Provider>
  );
};
