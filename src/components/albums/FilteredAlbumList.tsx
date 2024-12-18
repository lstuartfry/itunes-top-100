"use client";

import { useMemo, useState } from "react";
import { type Top100ResponseData } from "@/actions";
import { debounce } from "@/utils";
import AlbumListItem from "./AlbumListItem";
import Search, { type SearchEntity } from "../search/Search";

type Props = {
  data: Top100ResponseData;
};

export default function FilteredAlbumList({ data }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchEntity, setSearchEntity] = useState("artist" as SearchEntity);

  const onSearchTermChange = debounce((value: string) => {
    const valueToLowerCase = value.toLowerCase();
    setSearchTerm(valueToLowerCase);
  }, 200);

  const onSearchEntitiyChange = debounce((value: SearchEntity) => {
    setSearchEntity(value);
  }, 200);

  const filteredAlbums = useMemo(() => {
    return (
      <ol className="flex flex-col lg:w-3xl m-auto">
        {data.feed.entry
          .filter((album) => {
            if (searchEntity === "artist") {
              return album["im:artist"].label
                .toLowerCase()
                .includes(searchTerm);
            } else {
              return album["im:name"].label.toLowerCase().includes(searchTerm);
            }
          })
          .map((album, index) => (
            <AlbumListItem key={album.id.label} album={album} index={index} />
          ))}
      </ol>
    );
  }, [data.feed.entry, searchEntity, searchTerm]);

  return (
    <>
      <div className="absolute top-2 right-2 lg:top-6 lg:right-6">
        <Search
          onSearchTermChange={onSearchTermChange}
          onSearchEntityChange={onSearchEntitiyChange}
          searchEntity={searchEntity}
        />
      </div>
      {filteredAlbums}
    </>
  );
}
