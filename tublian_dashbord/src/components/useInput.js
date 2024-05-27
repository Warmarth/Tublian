import { useState } from "react";

const UseInput = () => {
  const [qurey, setQuery] = useState(" ");
  return [qurey, setQuery];
};
export default UseInput;
