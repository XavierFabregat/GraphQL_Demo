export const querySchema = `
  type Query {
    getAllUsers: [User!]!
    getUserById(id: String!): User
    getAllPosts: [Post!]!
    getPostById(id: Int!): Post
  }
`