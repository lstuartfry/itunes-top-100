import Image from "next/image";
import { Suspense } from "react";
import AlbumList from "@/components/albums/AlbumList";
import AlbumListLoading from "@/components/albums/AlbumListLoading";
import iTunesLogo from "public/itunes_large.png";

export default async function HomePage() {
  return (
    <main className="m-auto mt-12 flex max-w-4xl flex-col justify-between gap-12 p-4 lg:mt-40">
      <div className="flex lg:flex-row flex-col items-center gap-12">
        <Image src={iTunesLogo} alt="iTunes logo" />
        <h1 className="lg:text-5xl text-2xl">iTunes Top 100 Albums</h1>
      </div>
      <Suspense fallback={<AlbumListLoading />}>
        <AlbumList />
      </Suspense>
    </main>
  );
}
