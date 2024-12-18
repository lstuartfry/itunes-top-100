import ContentLoader from "react-content-loader";

export default function AlbumShowLoading() {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={600}
      viewBox="0 0 300 600"
      backgroundColor="#E5E7EB"
      foregroundColor="#D1D5DB"
    >
      <rect x="4" y="8" rx="0" ry="0" width="100" height="100" />
      <rect x="124" y="17" rx="0" ry="0" width="197" height="19" />
      <rect x="125" y="46" rx="0" ry="0" width="187" height="19" />
      <rect x="6" y="155" rx="0" ry="0" width="293" height="21" />
      <rect x="6" y="185" rx="0" ry="0" width="126" height="21" />
      <rect x="4" y="329" rx="0" ry="0" width="293" height="21" />
      <rect x="5" y="228" rx="0" ry="0" width="293" height="21" />
      <rect x="7" y="262" rx="0" ry="0" width="126" height="21" />
      <rect x="4" y="365" rx="0" ry="0" width="126" height="21" />
      <rect x="2" y="415" rx="0" ry="0" width="293" height="21" />
      <rect x="4" y="449" rx="0" ry="0" width="126" height="21" />
    </ContentLoader>
  );
}
