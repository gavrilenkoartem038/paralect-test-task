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

interface Metro {
  id: number;
  title: string;
  id_metro_line: number;
}

interface SubType {
  id: number;
  title: string;
}

interface CatalogueVacancy extends SubType {
  positions: SubType[];
}

interface Town extends SubType {
  declension: string;
  genitive: string;
}

export interface VacancyObject {
  id: number;
  // id_client: number;
  payment_from: number;
  payment_to: number;
  // date_pub_to: number;
  // date_archived: number;
  // date_published: number;
  // address: string;
  profession: string;
  // work: string;
  // metro: Metro[];
  currency: string;
  vacancyRichText: string;
  // moveable: boolean;
  // agreement: boolean;
  // anonymous: boolean;
  type_of_work: SubType;
  // place_of_work: SubType;
  // education: SubType;
  // experience: SubType;
  // maritalstatus: SubType;
  // children: SubType;
  // already_sent_on_vacancy: boolean;
  // languages: [];
  // driving_licence: [];
  // catalogues: CatalogueVacancy[];
  // agency: SubType;
  town: Town;
  // client_logo: string;
  // age_from: number;
  // age_to: number;
  // gender: SubType;
  firm_name: string;
  // firm_activity: string;
  // link: string;
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
