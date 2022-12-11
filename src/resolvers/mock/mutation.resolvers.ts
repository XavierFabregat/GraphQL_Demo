import { db } from "../../Types"

type createUserArgTypes = {
    username: string,
    password: string
}

type addPostArgTypes = {
    content: string,
    picUrl?: string,
    userId: string
}

export const mutationResolvers = {
    createUser: (_: unknown, {username, password}: createUserArgTypes, db: db) => {
        console.log('hello at resolvers')
        return db.addUser(username,password)
    },
    addPost: (_: unknown, {content, picUrl, userId}: addPostArgTypes, db: db) => {
        return db.addPost(content, picUrl, userId)
    }
}