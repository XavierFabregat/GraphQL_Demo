export const typeSchema = `
  type User {
    id: String!
    username: String!
    password: String!
    posts: [Post]!
  }

  type Post {
    id: String!
    content: String!
    date: String!
    picUrl: String
    user: User!
  }
`