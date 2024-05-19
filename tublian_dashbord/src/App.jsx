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
      <div className="App w-[25rem] border overflow-hidden bg-[#1E1E1E] text-slate-100 ">
        <aside className=" border">
          <div className="border flex items-center flex-1  w-full  justify-end gap-2 ">
            <input
              type="text"
              placeholder="jejejjeje"
              className="w-full pt-1 pb-1 rounded text-xl border-none outline-none bg-slate-600"
            />
            <button className="btn bg-neutral">
              <img src={search} alt="search icon" />
            </button>
            <button onClick={handleMenu} className="btn bg-neutral ">
              <img src={menuIcon} alt="menu icon" />
            </button>
          </div>
          {menuBtn && (
            <nav className="menu space-y-2 transition-all">
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
            <div className=" flex justify-between items-center border">
              <div className="flex gap-2 bg-slate-600 text-slate-100 text-md border border-fuchsia-400 items-center p-[.2rem] rounded-md">
                <p className="border   p-[.4rem] rounded-md"> full time</p>
                <p className="pr-[.3rem]"> freelance</p>
              </div>
              <button className="btn btn-neutral ">
                <img src={filter} alt="filter icon" />
              </button>
            </div>
          </header>
          <section className="flex gap-3 items-center justify-start no-wrap capitalize">
            <span className="border btn btn-outline text-slate-100">
              {" "}
              discover
            </span>
            <span className="btn "> frontend developer</span>
            <span className="btn "> backend developer</span>
          </section>
          <section className="mt-3">
            <article className="flex flex-col">
              <section className="flex items-start justify-between">
                <div className="flex border gap-4">
                  <div>
                    <img src={frame} alt=" avater" />
                  </div>
                  <div>
                    <h3>john doe</h3>
                    <div className=" ">
                      <p> New jersey, USA</p>
                      <p>$200,000[USA]</p>
                    </div>
                    <p>frontend Developer</p>
                  </div>
                </div>
                <button>hire me</button>
              </section>
              <section className="flex">
                <div>
                  <div>
                    <p>other</p>
                    <h2>porfolio</h2>
                    <p>text Lorem ipsum dolor .</p>
                  </div>
                  <p>latest update: tue,dec 13, 2022</p>
                </div>
                <div>
                  <div>
                    <p>other</p>
                    <h2>porfolio</h2>
                    <p>text Lorem ipsum dolor .</p>
                  </div>
                  <p>latest update: tue,dec 13, 2022</p>
                </div>
              </section>
            </article>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
