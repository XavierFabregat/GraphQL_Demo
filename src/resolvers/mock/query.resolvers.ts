import { Post, User } from "../../Types";

export const queryResolvers = {
    getAllUsers: (_: unknown, __: unknown, { users }: { users: User[]}) => users,
    getUserById: (_: unknown, { id }: {id: string}, { users }: { users: User[]}) => users.find((user => user.id === id)),
    getAllPosts: (_: unknown, __: unknown, { posts }: {posts: Post[]}) => posts,
    getPostById: (_: unknown, { id }: {id: number}, { posts }: {posts: Post[]}) => posts.find(post => post.id === id)
}