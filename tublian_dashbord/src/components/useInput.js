import { useState, createContext } from "react";
export const InputContext = createContext("Default Value");
const useInput = (i = "") => {
  const [query, setQuery] = useState(i);
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  return [query, handleQuery];
};
export default useInput;
