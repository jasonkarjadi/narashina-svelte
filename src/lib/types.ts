export type Elem = {
  tag: string;
  content: string | Elem | Elem[];
  className?: string;
};

export type Data = {
  id: string;
  breadcrumbs?: string[];
  pages: { id: string; body?: Elem }[];
}[];
