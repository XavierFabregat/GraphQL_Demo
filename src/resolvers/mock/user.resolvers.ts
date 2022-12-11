import { db } from "../../Types"

export const userResolvers = {
    posts: ({ posts }: {posts: number[]} , _: unknown, db: db) => {
        return posts.map(postId => db.posts.find(({id}) => id === postId))
    }
}