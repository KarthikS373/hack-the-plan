export type Event = {
  id: string;
  title: string;
  childAddress: string;
  category: Category;
  image: Image;
  eventHost: string;
  fee: Number;
  date: string;
  description: Desc;
  seats: number;
  owner: string;
  type: string;
  venue?: Venue;
  buyers: Array<string>;
  tickets_available: number;
  tickets_sold: number;
  link?: string;
  displayName?: string;
  profileImage?: string;
};
export type Venue = {
  name: string;
  x: number;
  y: number;
};
export type Image = {
  image: string;
  gallery: Array<string>;
  video?: string;
};
export type Desc = {
  short_desc: string;
  long_desc?: string;
};
export type Category = {
  event_type: string;
  category: [string];
};