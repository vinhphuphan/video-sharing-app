"use client";

import { ArrowLeft, Mic, Search } from "lucide-react";
import Button from "../Button";

interface SearchBarProps {
  searchFullWidth: boolean;
  setSearchFullWidth: (value: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchFullWidth,
  setSearchFullWidth,
}) => {
  return (
    <form className={`flex-grow justify-center gap-4 ${searchFullWidth ? "flex" : "hidden md:flex"}`}>
      {searchFullWidth && (
        <Button
          onClick={() => setSearchFullWidth(false)}
          variant="icon"
          size="icon"
          className="flex-shrink-0"
        >
          <ArrowLeft />
        </Button>
      )}
      <div className="flex flex-grow max-w-[600px]">
        <input
          type="search"
          placeholder="Search"
          className="
                  w-full rounded-l-3xl border border-secondary-border placeholder-gray-600 px-4 py-[0.25rem]
                  text-base font-normal text-neutral-700 transition shadow-secondary focus:border-primary-blue
                  outline-none
                "
        />
        <Button
          className="
                    z-[2] rounded-r-3xl border-l-0 border-2 border-gray-300 px-6 py-2 
                    text-xs font-medium bg-secondary-bg hover:bg-secondary-hover"
        >
          <Search strokeWidth={1} size={20} />
        </Button>
      </div>
      <Button variant="icon" size="icon" className="bg-secondary-bg">
        <Mic />
      </Button>
    </form>
  );
};

export default SearchBar;
