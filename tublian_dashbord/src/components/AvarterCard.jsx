import ImageCard from "./cardImage";

export default function AvaterCard(props) {
  return (
    <section className="flex items-start justify-between py-1">
      <div className="flex gap-4">
        <ImageCard src={props.frame} imageClassname="w-[3rem]" />
        <div className="font-mono pb-2 text-s pr-2">
          <h3 className="mb-1 text-xl text-p capitalize">john doe</h3>
          <p> {props.place}</p>
          <p>{props.amount}</p>
          <p className="border px-2 text-p rounded-xl">frontend developer</p>
        </div>
      </div>
      <button className="b capitalize px-3 py-1 font-medium border-none text-[#1e1e1e] rounded-2xl ">
        hire me
      </button>
    </section>
  );
}
