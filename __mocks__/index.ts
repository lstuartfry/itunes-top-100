import type { TopAlbumType } from "@/types";
import type { Top100ResponseData, AlbumResponseData } from "@/actions";

const mockAlbum1: TopAlbumType = {
  "im:name": { label: "Wicked: The Soundtrack" },
  "im:image": [
    {
      label:
        "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3b/c3/80/3bc38021-d755-d689-43d2-775c6071b226/24UM1IM07582.rgb.jpg/55x55bb.png",
      attributes: { height: "55" },
    },
    {
      label:
        "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3b/c3/80/3bc38021-d755-d689-43d2-775c6071b226/24UM1IM07582.rgb.jpg/60x60bb.png",
      attributes: { height: "60" },
    },
    {
      label:
        "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3b/c3/80/3bc38021-d755-d689-43d2-775c6071b226/24UM1IM07582.rgb.jpg/170x170bb.png",
      attributes: { height: "170" },
    },
  ],
  "im:itemCount": { label: "13" },
  "im:price": {
    label: "$9.99",
    attributes: { amount: "9.99", currency: "USD" },
  },
  "im:contentType": {
    "im:contentType": { attributes: { term: "Album", label: "Album" } },
    attributes: { term: "Music", label: "Music" },
  },
  rights: {
    label:
      "This Compilation ℗ 2024 Universal Studios and Republic Records, a division of UMG Recordings, Inc. and Verve Label Group, a division of UMG Recordings, Inc",
  },
  title: {
    label:
      "Wicked: The Soundtrack - Wicked Movie Cast, Cynthia Erivo & Ariana Grande",
  },
  link: {
    attributes: {
      rel: "alternate",
      type: "text/html",
      href: "https://music.apple.com/us/album/wicked-the-soundtrack/1772364192?uo=2",
    },
  },
  id: {
    label:
      "https://music.apple.com/us/album/wicked-the-soundtrack/1772364192?uo=2",
    attributes: { "im:id": "1772364192" },
  },
  "im:artist": {
    label: "Wicked Movie Cast, Cynthia Erivo & Ariana Grande",
    attributes: {
      href: "https://music.apple.com/us/artist/wicked-movie-cast/1772364470?uo=2",
    },
  },
  category: {
    attributes: {
      "im:id": "16",
      term: "Soundtrack",
      scheme: "https://music.apple.com/us/genre/music-soundtrack/id16?uo=2",
      label: "Soundtrack",
    },
  },
  "im:releaseDate": {
    label: "2024-11-22T00:00:00-07:00",
    attributes: { label: "November 22, 2024" },
  },
};

const mockAlbum2: TopAlbumType = {
  "im:name": { label: "Christmas" },
  "im:image": [
    {
      label:
        "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/37/2d/6e/372d6e16-7a32-91f0-1a03-0f2d9dbe389e/093624942788.jpg/55x55bb.png",
      attributes: { height: "55" },
    },
    {
      label:
        "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/37/2d/6e/372d6e16-7a32-91f0-1a03-0f2d9dbe389e/093624942788.jpg/60x60bb.png",
      attributes: { height: "60" },
    },
    {
      label:
        "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/37/2d/6e/372d6e16-7a32-91f0-1a03-0f2d9dbe389e/093624942788.jpg/170x170bb.png",
      attributes: { height: "170" },
    },
  ],
  "im:itemCount": { label: "16" },
  "im:price": {
    label: "$6.99",
    attributes: { amount: "6.99", currency: "USD" },
  },
  "im:contentType": {
    "im:contentType": { attributes: { term: "Album", label: "Album" } },
    attributes: { term: "Music", label: "Music" },
  },
  rights: { label: "℗ 2011 Reprise Records" },
  title: { label: "Christmas - Michael Bublé" },
  link: {
    attributes: {
      rel: "alternate",
      type: "text/html",
      href: "https://music.apple.com/us/album/christmas/669854820?uo=2",
    },
  },
  id: {
    label: "https://music.apple.com/us/album/christmas/669854820?uo=2",
    attributes: { "im:id": "669854820" },
  },
  "im:artist": {
    label: "Michael Bublé",
    attributes: {
      href: "https://music.apple.com/us/artist/michael-bubl%C3%A9/799597?uo=2",
    },
  },
  category: {
    attributes: {
      "im:id": "8",
      term: "Holiday",
      scheme: "https://music.apple.com/us/genre/music-holiday/id8?uo=2",
      label: "Holiday",
    },
  },
  "im:releaseDate": {
    label: "2011-10-14T00:00:00-07:00",
    attributes: { label: "October 14, 2011" },
  },
};

export const mockTop100ResponseData: Top100ResponseData = {
  feed: {
    entry: [mockAlbum1, mockAlbum2],
  },
};

// mocked album data with album metadata and single track
export const mockAlbum1ResponseData: AlbumResponseData = {
  resultCount: 14,
  results: [
    {
      wrapperType: "collection",
      collectionType: "Album",
      artistId: 1772364470,
      collectionId: 1772364192,
      artistName: "Wicked Movie Cast, Cynthia Erivo & Ariana Grande",
      collectionName: "Wicked: The Soundtrack",
      collectionCensoredName: "Wicked: The Soundtrack",
      artistViewUrl:
        "https://music.apple.com/us/artist/wicked-movie-cast/1772364470?uo=4",
      collectionViewUrl:
        "https://music.apple.com/us/album/wicked-the-soundtrack/1772364192?uo=4",
      artworkUrl60:
        "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3b/c3/80/3bc38021-d755-d689-43d2-775c6071b226/24UM1IM07582.rgb.jpg/60x60bb.jpg",
      artworkUrl100:
        "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3b/c3/80/3bc38021-d755-d689-43d2-775c6071b226/24UM1IM07582.rgb.jpg/100x100bb.jpg",
      collectionPrice: 9.99,
      collectionExplicitness: "notExplicit",
      trackCount: 13,
      copyright:
        "This Compilation ℗ 2024 Universal Studios and Republic Records, a division of UMG Recordings, Inc. and Verve Label Group, a division of UMG Recordings, Inc",
      country: "USA",
      currency: "USD",
      releaseDate: "2024-11-22T08:00:00Z",
      primaryGenreName: "Soundtrack",
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: 1772364470,
      collectionId: 1772364192,
      trackId: 1772364471,
      artistName: "Wicked Movie Cast & Ariana Grande",
      collectionName: "Wicked: The Soundtrack",
      trackName:
        "No One Mourns the Wicked (feat. Andy Nyman, Courtney-Mae Briggs, Jeff Goldblum, Sharon D. Clarke & Jenna Boyd)",
      collectionCensoredName: "Wicked: The Soundtrack",
      trackCensoredName:
        "No One Mourns the Wicked (feat. Andy Nyman, Courtney-Mae Briggs, Jeff Goldblum, Sharon D. Clarke & Jenna Boyd)",
      collectionArtistName: "Wicked Movie Cast, Cynthia Erivo & Ariana Grande",
      artistViewUrl:
        "https://music.apple.com/us/artist/wicked-movie-cast/1772364470?uo=4",
      collectionViewUrl:
        "https://music.apple.com/us/album/no-one-mourns-the-wicked-feat-andy-nyman-courtney-mae/1772364192?i=1772364471&uo=4",
      trackViewUrl:
        "https://music.apple.com/us/album/no-one-mourns-the-wicked-feat-andy-nyman-courtney-mae/1772364192?i=1772364471&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/14/24/ca/1424ca26-4757-5c2e-f6a8-315cc249fe9b/mzaf_200278915041595339.plus.aac.p.m4a",
      artworkUrl30:
        "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3b/c3/80/3bc38021-d755-d689-43d2-775c6071b226/24UM1IM07582.rgb.jpg/30x30bb.jpg",
      artworkUrl60:
        "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3b/c3/80/3bc38021-d755-d689-43d2-775c6071b226/24UM1IM07582.rgb.jpg/60x60bb.jpg",
      artworkUrl100:
        "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3b/c3/80/3bc38021-d755-d689-43d2-775c6071b226/24UM1IM07582.rgb.jpg/100x100bb.jpg",
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: "2024-11-22T12:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 12,
      trackNumber: 1,
      trackTimeMillis: 447992,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Soundtrack",
      isStreamable: true,
    },
  ],
};
