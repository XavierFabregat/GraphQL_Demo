import { userResolvers } from "./user.resolvers.js"
import { queryResolvers } from "./query.resolvers.js"
import { mutationResolvers } from "./mutation.resolvers.js"
import { postResolvers } from "./post.resolvers.js"


export const psqlResolvers = {
    User: userResolvers,
    Query: queryResolvers,
    Mutation: mutationResolvers,
    Post: postResolvers
}