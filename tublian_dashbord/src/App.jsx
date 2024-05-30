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
import { InputContext } from "./components/useInput";
import useInput from "./components/useInput";
function App() {
  const [query, handleQuery] = useInput();
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
    <InputContext.Provider value={[query, handleQuery]}>
      <section className="bg-[#1E1E1E]">
        <div className="App  overflow-x-hidden pt-5   overflow-y-visible  text-slate-100  px-4  gap-3 lg:flex justify-center">
          <div className=" transition-all hidden lg:block">
            <ImageCard
              src={frame}
              className=" xl:pb-2 xl:mr-5"
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
                <Card title="Portfolio" />
              </section>
            </Layout>
            <Layout>
              <AvaterCard
                frame={image2}
                place="Lagos, NIgeria"
                amount="$1000-3000 (USD)"
              />
              <section className=" flex gap-3 items-start justify-start w-[55rem] lg:w-full  ">
                <Card
                  title="My_Resume"
                  description="I am updating my resume, as completing my projects."
                />
                <ImageCard
                  src={frames}
                  className=" "
                  imageClassname="w-[25rem] h-[12rem]"
                />
                <Card title="Portfolio" />
              </section>
            </Layout>
          </main>
        </div>
      </section>
    </InputContext.Provider>
  );
}

export default App;
