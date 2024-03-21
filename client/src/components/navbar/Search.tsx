import { IoSearchOutline } from "react-icons/io5";
import { Tooltip } from "@material-tailwind/react";

const Search = () => {
  return (
    <div className="hidden md:block lg:w-[36rem] md:w-[24rem] sm:w-[12rem] mx-auto ">
      <div className="flex w-full flex-wrap items-stretch ">
        <input
          type="search"
          className="block w-[1px] flex-auto rounded-l-3xl border  border-gray-400 placeholder-gray-600 bg-transparent bg-clip-padding px-4 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon3"
        />
        <Tooltip
          content="Search"
          placement="bottom"
          className="text-white text-xs bg-gray-600 rounded-md"
          offset={15}
        >
          <button
            className="z-[2] rounded-r-3xl border-l-0 border-2 border-gray-300 px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out bg-[#f8f8f8] hover:bg-[#f0f0f0] focus:outline-none focus:ring-0"
            type="button"
            id="button-addon3"
          >
            <IoSearchOutline size={20} />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default Search;
