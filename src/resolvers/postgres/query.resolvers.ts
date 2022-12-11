import { User } from "../../models/user.model.js";
import { Post } from "../../models/post.models.js";

export const queryResolvers = {
    getAllUsers: async (_: unknown, __: unknown, ___:unknown) => await User.findAll({}),
    getUserById: async (_: unknown, { id }: {id: string}, __: unknown) => await User.findOne({where: {id}}),
    getAllPosts: async (_: unknown, __: unknown,  ___: unknown) => await Post.findAll({}),
    getPostById: async (_: unknown, { id }: {id: number}, __: unknown) => await Post.findOne({where: {id}})
}