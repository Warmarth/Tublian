import search_icon from "/icons/search-normal.png";
import menu from "/icons/menu.png";
import { useState } from "react";
const SearchTab = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="bg-[rgb(35,71,72)]  flex  justify-between gap-1 items-center p-1 rounded">
      <div className="flex gap-2 w-full ">
        <input
          type="search"
          className="bg-transparent border rounded-md items-center w-11/12 placeholder:text-slate-400 placeholder:italic placeholder:pl-3"
          placeholder="search"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <span>
          <img src={search_icon} alt="search Icon" />
        </span>
      </div>
      <span>
        <img src={menu} alt="" />
      </span>
    </div>
  );
};

export default SearchTab;
