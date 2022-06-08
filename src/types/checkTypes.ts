export interface ICheck {
  id: string;
  title: string;
  times: number;
  image: string;
  date?: Date;
  description: string;
}

export interface IcheckSimple {
  title: string;
  times: number;
  image: string;
  id: string;
}

export interface INewCheck {
  title: string;
  times: number;
  image: string;
  description: string;
  id: string;
}
