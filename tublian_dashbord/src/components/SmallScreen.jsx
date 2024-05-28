import React, { useState } from "react";
import search from "/icons/search-normal.png";
import menuIcon from "/icons/menu.png";
import JobStyle from "./job";
import Button, { Input } from "./button";
import filter from "/icons/filter.png";
import NavBar from "./Navbar";
import Field from "./strake";

const SmallScreen = () => {
  const [menuBtn, setMenuBtn] = useState(false);
  function handleMenu() {
    setMenuBtn((i) => !i);
  }
  return (
    <section>
      <aside className="">
        <div className=" flex items-center flex-1  w-full  justify-end gap-2 ">
          <Input className="w-full pt-1 pb-1 pl-3 rounded text-xl border-none outline-none bg50" />
          <Button
            src={search}
            alt="search icon"
            className="px-4 py-2 rounded-md border-none outline-none   "
          />
          <Button
            src={menuIcon}
            alt="menu icon"
            className="px-4 py-2 rounded-md border-none outline-none   "
            onClick={handleMenu}
          />
        </div>
        {menuBtn && <NavBar />}
      </aside>
      <header className="capitalize my-3">
        <h1 className="text-xl py-2">find Developers</h1>
        <div className=" flex justify-between items-center ">
          <JobStyle />
          <Button
            src={filter}
            className="px-6 py-2 rounded-md  bg50 border-none outline-none "
            alt="filter icon"
          />
        </div>
      </header>
      <Field />
    </section>
  );
};

export default SmallScreen;
