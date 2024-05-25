import ImageCard from "./cardImage";
import frame from "/icons/Frame448.png";
import frames  from "/icons/Frame 448.png";

export default function AvaterCard() {
  return (
    <section className="flex items-start justify-between py-1">
      <div className="flex gap-4">
        <ImageCard src={frame} />
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
