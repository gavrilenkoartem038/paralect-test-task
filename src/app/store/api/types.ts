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

interface SubType {
  id: number;
  title: string;
}

interface Town extends SubType {
  declension: string;
  genitive: string;
}

export interface VacancyObject {
  id: number;
  payment_from: number;
  payment_to: number;
  profession: string;
  currency: string;
  vacancyRichText: string;
  type_of_work: SubType;
  town: Town;
}

export interface Vacancies {
  objects: VacancyObject[];
  total: number;
  corrected_keyword: string;
  more: boolean;
}

export type SearchObject = {
  searchString: string;
  catalogues: string;
  paymentFrom: string;
  paymentTo: string;
  page: number;
};

export type LoginData = {
  login: string;
  password: string;
  client_id: number;
  client_secret: string;
  hr: number;
};

export type LoginReturn = {
  access_token: string;
  refresh_token: string;
  ttl: number;
  expires_in: number;
  token_type: string;
};
