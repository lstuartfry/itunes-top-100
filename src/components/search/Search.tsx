"use client";

import { Input } from "@headlessui/react";
import SearchSVG from "public/search.svg";
import CrossSVG from "public/cross.svg";
import { useState } from "react";

type Props = {
  onChange: (value: string) => void;
};

export default function Search({ onChange }: Props) {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChange(value);
  };

  const onClear = () => {
    onChange("");
    setExpanded(false);
  };

  return (
    <div className="flex justify-center cursor-pointer gap-2 p-1 px-2 lg:p-3 bg-gray-300 rounded-full shadow-md items-center border-transparent border-2 hover:border-white min-w-[64px]">
      <button onClick={() => setExpanded(true)}>
        <SearchSVG className="text-white" width={24} height={24} />
      </button>
      {expanded && (
        <>
          <Input
            className="bg-gray-300 text-white placeholder:text-white font-semibold p-1"
            name="search"
            onChange={handleChange}
            placeholder="Search"
          />
          <button onClick={onClear}>
            <CrossSVG className="text-white" width={24} height={24} />
          </button>
        </>
      )}
    </div>
  );
}
