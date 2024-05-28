import Card from "./components/Cards";
import AvaterCard from "./components/AvarterCard";
import Layout from "./components/CardLayout";
import ImageCard from "./components/cardImage";
import frames from "/icons/Frame460.png";
import SmallScreen from "./components/SmallScreen";
import { useEffect, useState } from "react";
import MidScreen from "./components/midScreen";
import NavBar from "./components/Navbar";
import image2 from "/icons/Frame448.png";
import image1 from "/icons/Frame48.png";
import frame from "/icons/Frame.png";

function App() {
  const [veiw, setView] = useState(<SmallScreen />);
  useEffect(() => {
    function handleWidth() {
      if (window.innerWidth > 1024) {
        setView(<MidScreen />);
      } else {
        setView(<SmallScreen />);
      }
    }
    handleWidth();
    window.addEventListener("resize", handleWidth);
    return () => {
      removeEventListener("resize", handleWidth);
    };
  }, []);
  return (
    <section className="bg-[#1E1E1E]">
      <div className="App  overflow-x-hidden pt-5   overflow-y-visible  text-slate-100  px-4  gap-3 lg:flex">
        <div className=" transition-all hidden lg:block">
          <ImageCard
            src={frame}
            className=" p-3 mr-3  "
            imageClassname="transition-all m-auto xl:m-0 xl:ml-auto"
          />
          <NavBar />
        </div>
        <main className="lg:border lg:border-[#888888] rounded-xl">
          {veiw}
          <Layout>
            <AvaterCard
              frame={image1}
              place="New jersey, USA"
              amount="$250,000 (USD)"
            />
            <section className="  flex flex-1 items-start transition-all  gap-2 w-[55rem] lg:w-full  ">
              <Card
                title="My_Resume"
                description="I am updating my resume, as completing my projects."
              />
              <Card title="My_Resume" />
            </section>
          </Layout>
          <Layout>
            <AvaterCard
              frame={image2}
              place="Lagos, NIgeria"
              amount="$1000-3000 (USD)"
            />
            <section className=" flex gap-3 items-start justify-start w-[55rem] lg:w-full  ">
              <Card />{" "}
              <ImageCard
                src={frames}
                className=" "
                imageClassname="w-[25rem] h-[12rem]"
              />
              <Card />
            </section>
          </Layout>
        </main>
      </div>
    </section>
  );
}

export default App;
