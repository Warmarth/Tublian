import Button, { Input } from "./button";
import ImageCard from "./cardImage";
import JobStyle from "./job";
import Field from "./strake";
import search from "/icons/search-normal.png";
import filter from "/icons/filter.png";
import arrow from "/icons/arrow-down.png";
import UseInput from "./useInput";

const MidScreen = () => {
  let { qurey, setQuery } = UseInput();

  return (
    <div className=" space-y-5  ">
      <div className="flex items-center justify-between  w-full border-b  border-b-[#888888]">
        <h1 className="capitalize text-2xl ml-3 xl:ml-12 py-7 w-4/6">find Developers</h1>
        <ImageCard
          src={arrow}
          name="Sort By high streetcred"
          className="flex bg50 flex-row-reverse gap-5   rounded-lg px-3 py-3 items-center mr-3 2xl:mr-12"
        />
      </div>
      <div className=" flex  justify-between gap-3 w-11/12 mx-auto 2xl:w-10/12">
        <div className="bg50 lg:w-9/12 flex items-center pt-1 pb-1 pl-3 gap-3 rounded ">
          <ImageCard src={search} />
          <Input
            value={qurey}
            change={(e) => setQuery(e.target.value)}
            className=" text-xl border-none outline-none w-full bg50"
            placeholder=" Try Searching “full time backend developer”"
          />
        </div>
        <JobStyle />
      </div>
      <div className=" flex  justify-between gap-3 w-11/12 mx-auto 2xl:w-10/12">
        <Field />
        <Button
          src={filter}
          className="px-6 py-2 rounded-md  bg50 border outline-none "
          alt="filter icon"
        />{" "}
      </div>
    </div>
  );
};

export default MidScreen;
