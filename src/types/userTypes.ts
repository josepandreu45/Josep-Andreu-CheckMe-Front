export interface UserInfo {
  name: string;
  username: string;
  id: string;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface UserRegister {
  name: string;
  username: string;
  password: string;
}

export interface UserState {
  name: string;
  username: string;
  id: string;
  logged: boolean;
}
