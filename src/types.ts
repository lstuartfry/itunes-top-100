export type Album = {
  "im:name": {
    label: string;
  };
  "im:image": Array<{ label: string; attributes: { height: string } }>;
  "im:price": {
    label: string;
    attributes: { amount: string; currency: string };
  };
  rights: { label: string };
  title: { label: string };
  link: {
    attributes: {
      href: string;
    };
  };
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
      label: string;
    };
  };
  "im:releaseDate": {
    attributes: {
      label: string;
    };
  };
};
