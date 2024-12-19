export type TopAlbumType = {
  "im:name": {
    label: string;
  };
  "im:itemCount": { label: string };
  "im:price": {
    label: string;
    attributes: { amount: string; currency: string };
  };
  "im:contentType": {
    "im:contentType": { attributes: { term: string; label: string } };
    attributes: { term: string; label: string };
  };
  rights: { label: string };
  link: {
    attributes: {
      rel: string;
      type: string;
      href: string;
    };
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
  category: {
    attributes: {
      "im:id": string;
      term: string;
      scheme: string;
      label: string;
    };
  };
  "im:releaseDate": {
    label: string;
    attributes: { label: string };
  };
};

export type AlbumCollection = {
  wrapperType: string;
  collectionType: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  artistId: number;
  collectionId: number;
  artistName: string;
  collectionName: string;
  collectionCensoredName: string;
  artworkUrl60: string;
  artworkUrl100: string;
  trackCount: number;
  releaseDate: string;
  primaryGenreName: string;
  copyright: string;
  collectionPrice: number;
  collectionExplicitness: string;
  country: string;
  currency: string;
};

export type AlbumTrack = {
  wrapperType: "track";
  kind: "song";
  artistId: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  collectionCensoredName: string;
  trackName: string;
  trackCensoredName: string;
  collectionArtistName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  trackViewUrl: string;
  previewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  releaseDate: string;
  collectionExplicitness: string;
  trackExplicitness: string;
  discCount: number;
  discNumber: number;
  trackCount: number;
  trackNumber: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  isStreamable: boolean;
};
