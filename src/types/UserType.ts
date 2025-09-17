export interface User {
  id?: string;
  name: string;
  nickname: string;
  profileImage: string;
  verified: boolean;
}

export interface CurrentUser extends User {
  id: string;
}
