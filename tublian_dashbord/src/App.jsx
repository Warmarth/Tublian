import React, { useState } from "react";
import search from "/icons/search-normal.png";
import menuIcon from "/icons/menu.png";
function App() {
  const [menuBtn, setMenuBtn] = useState(false);
  const [query, setQuery] = useState("");
  function handleMenu() {
    setMenuBtn((i) => !i);
  }
  return (
    <>
      <div className="App w-3/5">
        <aside className=" border">
          <div className="border flex items-center flex-1  w-full  justify-end gap-2 ">
            <input
              type="text"
              placeholder="jejejjeje"
              className="w-full pt-1 pb-1 rounded text-xl border-none outline-none bg-slate-600"
            />
            <button className="btn bg-neutral">
              <img src={search} alt="" />
            </button>
            <button onClick={handleMenu}>
              <img src={menuIcon} className="btn bg-neutral" alt="" />
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
        <main className="">
          <section className="header">
            <h1>find Developers</h1>
            <div>
              <span>full time</span>
              <span>freelance</span>
            </div>
          </section>
          <section className="categories">
            <span>dicover</span>
            <span>fronend developre</span>
            <span>backend developer</span>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
