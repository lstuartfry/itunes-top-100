"use client";

import { Input, Select } from "@headlessui/react";
import SearchSVG from "public/search.svg";
import CrossSVG from "public/cross.svg";
import { useState } from "react";

export type SearchEntity = "artist" | "album";

type Props = {
  onSearchTermChange: (value: string) => void;
  onSearchEntityChange: (value: SearchEntity) => void;
  searchEntity: SearchEntity;
};

export default function Search({
  onSearchTermChange,
  onSearchEntityChange,
  searchEntity,
}: Props) {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onSearchTermChange(value);
  };

  const handleEntityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    onSearchEntityChange(value);
  };

  const onClear = () => {
    onSearchTermChange("");
    setExpanded(false);
  };

  return (
    <div className="flex justify-center cursor-pointer gap-2 p-1 px-2 lg:p-3 bg-gray-300 rounded-full shadow-md items-center border-transparent border-2 hover:border-white min-w-[64px]">
      <button onClick={() => setExpanded(true)}>
        <SearchSVG className="text-white" width={24} height={24} />
      </button>
      {expanded && (
        <div className="flex gap-4">
          <div className="flex flex-col">
            <div className="flex items-center">
              <Input
                className="bg-gray-300 text-white placeholder:text-white font-semibold p-1"
                name="search"
                onChange={handleTermChange}
                placeholder="Search"
              />
            </div>
            <div className="flex gap-2 mt-2 p-1 text-white font-semibold">
              by
              <Select
                className="w-full rounded-lg bg-transparent text-red-500"
                name="searchEntity"
                aria-label="Search Entity"
                value={searchEntity}
                onChange={handleEntityChange}
              >
                <option value="artist">Artist</option>
                <option value="album">Album</option>
              </Select>
            </div>
          </div>
          <button onClick={onClear}>
            <CrossSVG className="text-white" width={24} height={24} />
          </button>
        </div>
      )}
    </div>
  );
}
