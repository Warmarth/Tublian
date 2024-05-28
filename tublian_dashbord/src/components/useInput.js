import { useState } from "react";

const useInput = (i = "") => {
  const [query, setQuery] = useState(i);
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  return [query, handleQuery];
};
export default useInput;
