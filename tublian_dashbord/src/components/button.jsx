import React, { useContext } from "react";
import { InputContext } from "./useInput.js";

export default function Button(props) {
  return (
    <button className={props.className} {...props}>
      <img src={props.src} alt={props.alt} className="m-auto" />
      {props.Butt}
    </button>
  );
}

export function Input({ className, ...props }) {
  const [query, handleQuery] = useContext(InputContext);
  return (
    <input
      type="text"
      className={className}
      value={query}
      onChange={handleQuery}
      {...props}
    />
  );
}
