import { userResolvers } from "./user.resolvers.js"
import { queryResolvers } from "./query.resolvers.js"
import { mutationResolvers } from "./mutation.resolvers.js"
export const mockResolvers = {
    User: userResolvers,
    Query: queryResolvers,
    Mutation: mutationResolvers
}