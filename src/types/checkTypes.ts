export interface ICheck {
  id: string;
  title: string;
  times: number;
  checked: boolean;
  image: string;
  date: Date;
}

export interface IcheckSimple {
  title: string;
  times: number;
  image: string;
}
