import React, { useState } from "react";
import search from "/icons/search-normal.png";
import menuIcon from "/icons/menu.png";
function App() {
  const [menuBtn, setMenuBtn] = useState(false);
  const 
  function handleMenu() {
    setMenuBtn((i) => !i);
  }
  return (
    <>
      <div className="App flex">
        <aside>
          <div className="flex items-center">
            <button className="btn bg-neutral">
              <img src={search} alt="" />
            </button>
            <button onClick={handleMenu}>
              <img src={menuIcon} className="btn bg-neutral w-[4rem]" alt="" />
            </button>
          </div>
          {menuBtn && (
            <nav className="menu">
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

      </div>
    </>
  );
}

export default App;
