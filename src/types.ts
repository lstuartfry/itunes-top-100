export type TopAlbumType = {
  "im:name": {
    label: string;
  };
  "im:image": Array<{ label: string; attributes: { height: string } }>;
  title: { label: string };
  id: {
    label: string;
    attributes: {
      "im:id": string;
    };
  };
  "im:artist": {
    label: string;
    attributes: {
      href: string;
    };
  };
};

export type AlbumCollection = {
  wrapperType: "collecton";
  collectionType: "Album";
  artistViewUrl: string;
  collectionViewUrl: string;
  artistId: number;
  collectionId: number;
  artistName: string;
  collectionName: string;
  artworkUrl100: string;
  trackCount: number;
  releaseDate: string;
};

export type AlbumTrack = {
  wrapperType: "track";
  kind: "song";
  artistId: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionArtistName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  trackViewUrl: string;
  previewUrl: string;
  // "artworkUrl30": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3b/c3/80/3bc38021-d755-d689-43d2-775c6071b226/24UM1IM07582.rgb.jpg/30x30bb.jpg",
  // "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3b/c3/80/3bc38021-d755-d689-43d2-775c6071b226/24UM1IM07582.rgb.jpg/60x60bb.jpg",
  artworkUrl100: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3b/c3/80/3bc38021-d755-d689-43d2-775c6071b226/24UM1IM07582.rgb.jpg/100x100bb.jpg";
  collectionPrice: number;
  trackPrice: number;
  releaseDate: string;
  // "collectionExplicitness": "notExplicit",
  // "trackExplicitness": "notExplicit",
  // "discCount": 1,
  // "discNumber": 1,
  // "trackCount": 12,
  trackNumber: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  isStreamable: boolean;
};
