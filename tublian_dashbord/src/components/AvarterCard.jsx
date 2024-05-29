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
          <p className="border w-44 text-nowrap text-center text-p  rounded-xl mt-3">frontend developer</p>
        </div>
      </div>
      <button className="b capitalize border-none text-[#1e1e1e] rounded-3xl btn btn-primary font-bold hover:text-white ">
        hire me
      </button>
    </section>
  );
}
