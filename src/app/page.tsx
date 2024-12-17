import Image from "next/image";
import { fetchAlbums } from "@/actions";
import AlbumList from "@/components/AlbumList";
import iTunesLogo from "public/itunes_large.png";

export default async function HomePage() {
  const albumsData = await fetchAlbums();

  return (
    <main className="m-auto mt-12 flex max-w-4xl flex-col justify-between gap-12 p-4 lg:mt-40">
      <div className="flex lg:flex-row flex-col items-center gap-12">
        <Image src={iTunesLogo} alt="iTunes logo" />
        <h1 className="lg:text-5xl text-2xl">iTunes Top 100 Albums</h1>
      </div>
      <AlbumList albums={albumsData.feed.entry} />
    </main>
  );
}
