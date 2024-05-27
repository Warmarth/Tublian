import Button, { Input } from "./button";
import ImageCard from "./cardImage";
import JobStyle from "./job";
import Field from "./strake";
import search from "/icons/search-normal.png";
import filter from "/icons/filter.png";
import arrow from "/icons/arrow-down.png";
import UseInput from "./useInput";

const MidScreen = () => {
  let [qurey, setQuery] = UseInput();

  return (
    <div className=" space-y-5">
      <div className="flex justify-between  w-full border">
        <h1 className="capitalize text-2xl py-2 w-4/6">find Developers</h1>
        <ImageCard
          src={arrow}
          name="Sort By high streetcred"
          className="flex bg50 flex-row-reverse gap-5   rounded-lg px-3 items-center"
        />
      </div>
      <div className=" flex w-full justify-between gap-3  ">
        <div className="bg50 lg:w-9/12 flex gap- items-center pt-1 pb-1 pl-3 gap-3 rounded">
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
      <div className=" flex w-full justify-between  ">
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
