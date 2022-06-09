export interface ICheck {
  id: string;
  title: string;
  times: number;
  image: string;
  imageBackup: string;
  date?: Date;
  description: string;
  owner: string;
}

export interface IcheckSimple {
  title: string;
  times: number;
  image: string;
  imageBackup: string;
  owner: string;
  id: string;
}

export interface INewCheck {
  title: string;
  times: number;
  image: string;
  description: string;
  imageBackup: string;
  id: string;
  owner: string;
}
