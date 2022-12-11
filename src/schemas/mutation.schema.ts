export const mutationSchema = `
  type Mutation {
    createUser(username: String!, password: String!): User
    addPost(content: String!, picUrl: String, userId: String!): Post
  }
`