export interface InfoType {
  count: number;
  next: null | string;
  pages: number;
  prev: null | string;
}

export interface CharacterType {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
}

export interface ResponseCharactersType {
  info: InfoType;
  results: CharacterType[];
}
