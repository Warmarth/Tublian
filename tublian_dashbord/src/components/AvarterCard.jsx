import ImageCard from "./cardImage";

export default function AvaterCard(props) {
  return (
    <section className="flex items-start justify-between py-1">
      <div className="flex gap-4">
        <ImageCard src={props.frame} imageClassname="w-[3rem]" />
        <div className="font-mono pb-2 text-s pr-2">
          <h3 className="mb-1 text-xl text-p capitalize">john doe</h3>
          <div className="lg:flex items-center">
            <p> {props.place}</p>
            <span className="hidden lg:w-1 lg:h-1 bg-[#888888] rounded-full lg:flex m-2 ">
              {" "}
            </span>
            <p>{props.amount}</p>
          </div>
          <p className="border px-2 text-p rounded-xl">frontend developer</p>
        </div>
      </div>
      <button className="b capitalize px-4 py-2 font-medium border-none text-[#1e1e1e] rounded-3xl ">
        hire me
      </button>
    </section>
  );
}
