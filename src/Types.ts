export interface User {
    id: string,
    username: string,
    password: string,
    posts: number[]
}

export interface Post {
    id: number,
    content: string,
    date: string,
    userId?: string,
    picUrl?: string
}

export interface db {
    users: User[],
    posts: Post[],
    addUser: (username: string, password: string) => User,
    addPost: (content: string, picUrl: string, userId: string) => Post
}