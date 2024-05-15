import filter from "/icons/filter.png";
const catelogs = () => {
  return (
    <div className="text-[#FEFEFE]  bg-[#1E1E1E] capitalize py-2 overflow-x-hidden">
      <h2>find Developer</h2>
      <div className="flex items-center justify-between ">
        <div className=" py-3 pr-2 pl-1 space-x-1 rounded-md border my-2">
          <span className="bg-[#236474] p-2 pl-2 rounded tracking-wider ">
            full time
          </span>
          <span> freelancing</span>
        </div>
        <div className="border px-4 py-1 rounded">
          <img src={filter} alt="filter-icon" />
        </div>
      </div>
      <div className="space-x-1 my-1 ">
        <span className="border  pl-2"> discover </span>
        <span className="border  pl-2 ">frontend Developer</span>
        <span className="border  pl-2 ">backend Developer</span>
      </div>
    </div>
  );
};

export default catelogs;
