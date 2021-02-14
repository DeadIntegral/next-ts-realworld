export interface AuthorType {
  bio: string | null
  following: boolean
  image: string
  username: string
}

export interface UserWriteType {
  image: string;
  username: string;
  bio: string;
  email: string;
  password: string;
}