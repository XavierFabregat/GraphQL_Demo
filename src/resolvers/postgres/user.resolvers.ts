import { Post } from "../../models/post.models.js"

export const userResolvers = {
    posts: ({ posts }: {posts: number[]} , _: unknown, __: unknown) => {
        return posts.map(async postId => await Post.findOne({ where: { id: postId} }))
    }
}