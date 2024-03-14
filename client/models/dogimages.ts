export interface DogImages {
  message: string
  status: string
}

export interface MessageData {
  id: number
  author: string
  message: string
  photoURL: string
}

export interface Post {
  Post: {
    id: number
    author: string
    message: string
    photoURL: string
  }
}
