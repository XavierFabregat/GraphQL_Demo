import { User } from "../../models/user.model.js"
import { Post } from "../../models/post.models.js"

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
    createUser: async (_: unknown, {username, password}: createUserArgTypes, __: unknown) => {
        try {
            const userCreated = await User.create({
                username,
                password
            })
            console.log(userCreated)
            return userCreated
        } catch (error) {
            console.log('Error in resolver createUser ==> ', error);
            return { error }
        }
    },
    addPost: async (_: unknown, {content, picUrl, userId}: addPostArgTypes, __: unknown) => {
        try {
            const postCreated = await Post.create({
                content,
                picUrl,
                userId
            })
            console.log(postCreated)
            return postCreated
        } catch (error) {
            console.log('Error in resolver addPost ==> ', error);
            return { error }
        }
    }
}