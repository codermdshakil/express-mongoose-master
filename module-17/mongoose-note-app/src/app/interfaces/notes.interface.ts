export interface INotes {
  title: string;
  content: string;
  category: string;
  pinned: boolean;
  tags: {
    level: string;
    color: string;
  };
}
