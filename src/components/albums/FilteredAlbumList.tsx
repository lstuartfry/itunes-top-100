"use client";

import { useMemo, useState } from "react";
import { type Top100ResponseData } from "@/actions";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { debounce } from "@/utils";
import AlbumListItem from "./AlbumListItem";
import Search from "../search/Search";
import FavoriteButton from "../favorite/button";
import useFavorites from "@/hooks/useFavorites";
import Toggle from "../favorite/toggle";

type Props = {
  data: Top100ResponseData;
};

const container: Variants = {
  show: {
    transition: {
      staggerChildren: 0.02,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    x: -600,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.15,
    },
  },
};

/**
 * Takes the raw response from the GET request to itunes for the top 100 albums,
 * and filters them based on the existing search term and search entity (if they exist).
 */
export default function FilteredAlbumList({ data }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchEntity, setSearchEntity] = useState("artist");
  const [showFavorites, setShowFavorites] = useState(false);
  const { favoriteAlbums } = useFavorites();

  const onSearchTermChange = debounce((value: string) => {
    const valueToLowerCase = value.toLowerCase();
    setSearchTerm(valueToLowerCase);
  }, 200);

  const onSearchEntitiyChange = debounce((value: string) => {
    setSearchEntity(value);
  }, 200);

  const filteredAlbums = useMemo(() => {
    return (
      <motion.ol
        variants={container}
        animate="show"
        className="flex flex-col lg:w-3xl"
      >
        <AnimatePresence>
          {data.feed.entry
            .filter((album) => {
              if (showFavorites) {
                return favoriteAlbums.includes(album.id.attributes["im:id"]);
              } else {
                return album;
              }
            })
            .filter((album) => {
              if (searchEntity === "artist") {
                return album["im:artist"].label
                  .toLowerCase()
                  .includes(searchTerm);
              } else {
                return album["im:name"].label
                  .toLowerCase()
                  .includes(searchTerm);
              }
            })
            .map((album, index) => (
              <motion.div
                key={album.id.attributes["im:id"]}
                className="flex items-center gap-2"
                variants={item}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                <FavoriteButton id={album.id.attributes["im:id"]} />
                <div className="grow">
                  <AlbumListItem album={album} index={index} />
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.ol>
    );
  }, [
    data.feed.entry,
    favoriteAlbums,
    searchEntity,
    searchTerm,
    showFavorites,
  ]);

  return (
    <>
      <div className="absolute top-2 right-2 lg:top-6 lg:right-6">
        <Search
          onSearchTermChange={onSearchTermChange}
          onSearchEntityChange={onSearchEntitiyChange}
          searchEntity={searchEntity}
        />
      </div>
      <Toggle
        enabled={showFavorites}
        onChange={() => setShowFavorites(!showFavorites)}
      />
      {filteredAlbums}
    </>
  );
}
