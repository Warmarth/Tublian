import Card from "./components/Cards";
import AvaterCard from "./components/AvarterCard";
import Layout from "./components/CardLayout";
import ImageCard from "./components/cardImage";
import frames from "/icons/Frame460.png";
import SmallScreen from "./components/SmallScreen";
import { useEffect, useState } from "react";
function App() {
  const [veiw, setView] = useState(<SmallScreen />);
  useEffect(() => {}, []);
  return (
    <>
      <div className="App w-[25rem] h-[100vh] border overflow-y-visible overflow-x-hidden bg-[#1E1E1E] text-slate-100  px-4 md:w-full md:flex">
        {veiw}
        <main>
          <Layout>
            <AvaterCard />
            <section className="  flex flex-1 items-start   gap-2 w-[55rem] md:w-full  ">
              <ImageCard
                src={frames}
                className=" "
                imageClassname="w-[25rem] h-[12rem]"
              />
              <Card />
              <Card />
            </section>
          </Layout>
          <Layout>
            <AvaterCard />
            <section className=" flex gap-3 items-start justify-start w-[55em] md:w-full  ">
              <Card />
              <Card />
            </section>
          </Layout>
        </main>
      </div>
    </>
  );
}

export default App;
