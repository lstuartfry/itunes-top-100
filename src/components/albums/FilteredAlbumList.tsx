"use client";

import { useMemo, useState } from "react";
import { type Top100ResponseData } from "@/actions";
import { debounce } from "@/utils";
import AlbumListItem from "./AlbumListItem";
import Search from "../search/Search";

type Props = {
  data: Top100ResponseData;
};

type SearchEntity = "artist" | "album";

export default function FilteredAlbumList({ data }: Props) {
  const [term, setTerm] = useState("");
  const [entity, setEntity] = useState("artist" as SearchEntity);

  const onChange = debounce((value: string) => {
    const valueToLowerCase = value.toLowerCase();
    setTerm(valueToLowerCase);
  }, 200);

  const filteredAlbums = useMemo(() => {
    return (
      <ol className="flex flex-col lg:w-3xl m-auto">
        {data.feed.entry
          .filter((album) => {
            if (entity === "artist") {
              return album["im:artist"].label.toLowerCase().includes(term);
            } else {
              return album["im:name"].label.toLowerCase().includes(term);
            }
          })
          .map((album, index) => (
            <AlbumListItem key={album.id.label} album={album} index={index} />
          ))}
      </ol>
    );
  }, [data.feed.entry, entity, term]);

  return (
    <>
      <div className="absolute top-2 right-2 lg:top-6 lg:right-6">
        <Search onChange={onChange} />
      </div>
      {filteredAlbums}
    </>
  );
}
