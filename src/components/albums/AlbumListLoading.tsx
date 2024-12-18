import ContentLoader from "react-content-loader";

export default function AlbumListLoading() {
  return (
    <div className="ml-6">
      <ContentLoader
        speed={2}
        width={300}
        height={400}
        viewBox="0 0 300 400"
        backgroundColor="#E5E7EB"
        foregroundColor="#D1D5DB"
      >
        <rect x="4" y="-11" rx="0" ry="0" width="100" height="100" />
        <rect x="6" y="166" rx="0" ry="0" width="100" height="100" />
        <rect x="125" y="2" rx="0" ry="0" width="300" height="20" />
        <rect x="130" y="179" rx="0" ry="0" width="300" height="20" />
        <rect x="126" y="36" rx="0" ry="0" width="200" height="20" />
        <rect x="130" y="215" rx="0" ry="0" width="200" height="20" />
      </ContentLoader>
    </div>
  );
}
