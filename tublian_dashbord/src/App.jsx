import React, { useState } from "react";
import search from "/icons/search-normal.png";
import menuIcon from "/icons/menu.png";
import filter from "/icons/filter.png";
import frame from "/icons/Frame.png";
function App() {
  const [menuBtn, setMenuBtn] = useState(false);
  const [query, setQuery] = useState("");
  function handleMenu() {
    setMenuBtn((i) => !i);
  }
  return (
    <>
      <div className="App w-[25rem] h-[100vh] border overflow-hidden bg-[#1E1E1E] text-slate-100  px-4 md:w-full md:flex">
        <aside className="">
          <div className=" flex items-center flex-1  w-full  justify-end gap-2 ">
            <input
              type="text"
              placeholder="search"
              className="w-full pt-1 pb-1 pl-3 rounded text-xl border-none outline-none bg50"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="px-4 py-2 rounded-md border-none outline-none  ">
              <img src={search} alt="search icon" />
            </button>
            <button
              onClick={handleMenu}
              className="px-4 py-2 rounded-md   border-none outline-none   "
            >
              <img src={menuIcon} alt="menu icon" />
            </button>
          </div>
          {menuBtn && (
            <nav className="menu space-y-2 transition-all ">
              <ul>
                <li> dashboard</li>
                <li> monetiaztion</li>
                <li> notification</li>
              </ul>
              <ul>
                <li> logout</li>
                <li> settings</li>
              </ul>
            </nav>
          )}
        </aside>
        <main>
          <header className="capitalize my-3">
            <h1 className="text-xl py-2">find Developers</h1>
            <div className=" flex justify-between items-center ">
              <div className="flex gap-2 bg50 text-p text-md  items-center p-[.2rem] rounded-md">
                <p className="gradient p-[.4rem] rounded-md"> full time</p>
                <p className="pr-[.3rem]"> freelance</p>
              </div>
              <button className="px-6 py-2 rounded-md  bg50 border-none outline-none ">
                <img src={filter} alt="filter icon " className="m-auto" />
              </button>
            </div>
          </header>

          <section className="flex  gap-3 items-center justify-start no-wrap capitalize">
            <p className="text-p axe"> discover</p>
            <span className="btn bg50 border-none  text-p ">
              {" "}
              frontend developer
            </span>
            <span className="btn bg50  border-none text-p ">
              {" "}
              backend developer
            </span>
          </section>
          <section className="mt-3  px-3 pt-3 pb-5 rounded-box bg50 overflow-hidden">
            <article className=" ">
              <AvaterCard />
              <section className=" overflow-hidden flex gap-3 items-start justify-start w-[100vw] md:w-full no-wrap ">
                <Card />
                <Card />
              </section>
            </article>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
function Card() {
  return (
    <div className="border w-[22rem] h-[12rem] rounded-xl p-3  text-[.9rem] space-y-2 text-p">
      <span className="border rounded-2xl px-4 py-1">Other</span>
      <h2 className="text-lg capitalize">porfolio</h2>
      <p className="text-s">
        text Lorem ipsum dolor Lorem ipsum dolor, sit amet consectetur
        adipisicing elit .
      </p>
      <p className="text-s">
        latest update: <span className="text-p"> tue,dec 13, 2022</span>{" "}
      </p>
    </div>
  );
}

function AvaterCard() {
  return (
    <section className="flex items-start justify-between py-1">
      <div className="flex gap-4">
        <div>
          <img src={frame} alt=" avater" />
        </div>
        <div className="font-mono pb-2 text-s pr-2">
          <h3 className="mb-1 text-xl text-p capitalize">john doe</h3>
          <p> New jersey,USA</p>
          <p>$200,000[USA]</p>
          <p className="border px-2 text-p rounded-xl">frontend developer</p>
        </div>
      </div>
      <button className="b capitalize px-3 py-1 font-medium border-none text-[#1e1e1e] rounded-2xl ">
        hire me
      </button>
    </section>
  );
}
