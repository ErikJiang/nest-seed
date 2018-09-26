export interface UserData {
  name: string;
  email: string;
  token: string;
  bio: string;
  avatar?: string;
}

export interface UserRO {
  user: UserData;
}