"use client";

import { useMemo, useState } from "react";
import { type Top100ResponseData } from "@/actions";
import { debounce } from "@/utils";
import AlbumListItem from "./AlbumListItem";
import Search from "../search/Search";
import FavoriteButton from "../favorite/button";

type Props = {
  data: Top100ResponseData;
};
/**
 * Takes the raw response from the GET request to itunes for the top 100 albums,
 * and filters them based on the existing search term and search entity (if they exist).
 */
export default function FilteredAlbumList({ data }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchEntity, setSearchEntity] = useState("artist");

  const onSearchTermChange = debounce((value: string) => {
    const valueToLowerCase = value.toLowerCase();
    setSearchTerm(valueToLowerCase);
  }, 200);

  const onSearchEntitiyChange = debounce((value: string) => {
    setSearchEntity(value);
  }, 200);

  const filteredAlbums = useMemo(() => {
    return (
      <ol className="flex flex-col lg:w-3xl">
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
            <div
              key={album.id.attributes["im:id"]}
              className="flex items-center gap-2"
            >
              <FavoriteButton id={album.id.attributes["im:id"]} />
              <div className="grow">
                <AlbumListItem album={album} index={index} />
              </div>
            </div>
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
