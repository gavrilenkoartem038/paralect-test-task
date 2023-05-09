export interface Catalogue {
  title_rus: string;
  url_rus: string;
  title: string;
  title_trimmed: string;
  key: number;
  positions: Position[];
}

interface Position {
  title_rus: string;
  url_rus: string;
  title: string;
  key: number;
  id_parent: number;
}
