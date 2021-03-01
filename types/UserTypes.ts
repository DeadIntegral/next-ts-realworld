export interface AuthorType {
  bio: string | null
  following: boolean
  image: string
  username: string
}

export interface UserWriteType {
  image: string
  username: string
  bio: string
  email: string
  password: string
}

export interface UserFullType {
  bio: string
  createdAt: string
  email: string
  id: Number
  image: string
  token: string
  updatedAt: string
  username: string
}
