import ContentLoader from "react-content-loader";

export default function AlbumShowLoading() {
  return (
    <ContentLoader
      speed={2}
      width={390}
      height={600}
      viewBox="0 0 390 600"
      backgroundColor="#E7E5E4"
      foregroundColor="#D6D3D1"
    >
      <rect x="10" y="8" rx="0" ry="0" width="50" height="50" />
      <rect x="9" y="117" rx="0" ry="0" width="50" height="50" />
      <rect x="9" y="229" rx="0" ry="0" width="50" height="50" />
      <rect x="8" y="339" rx="0" ry="0" width="50" height="50" />
      <rect x="77" y="41" rx="0" ry="0" width="288" height="16" />
      <rect x="83" y="147" rx="0" ry="0" width="288" height="16" />
      <rect x="84" y="259" rx="0" ry="0" width="288" height="16" />
      <rect x="87" y="370" rx="0" ry="0" width="288" height="16" />
      <rect x="9" y="444" rx="0" ry="0" width="50" height="50" />
      <rect x="88" y="470" rx="0" ry="0" width="288" height="16" />
    </ContentLoader>
  );
}
