import { users } from './user.mocks.js'
import { posts } from './post.mocks.js'
import { v4 as uuidv4 } from 'uuid'
import { db, Post, User } from '../Types.js';

export const promiseDb = new Promise((resolve, reject) => {
    try {
        const addUser = (username: string, password: string) => {
            console.log('hello')
            const newUser: User = {
                id: uuidv4(),
                username,
                password,
                posts: []
            }
            console.log(newUser)
            users.push(newUser);
            return newUser
        }

        const addPost = (content: string, picUrl: string | null = null, userId: string) => {
            const postId = posts[posts.length-1].id + 1;
            const newPost: Post = {
                id: postId,
                content,
                date: String(Date.now()),
                picUrl,
                userId
            }
            posts.push(newPost)

            const userWhoPosted = users.find(user => user.id === userId);
            userWhoPosted.posts.push(postId)
            return newPost
        }
        const db: db = { users, posts, addPost, addUser };
        resolve(db)
    } catch (error) {
        console.log(error)
        reject(error)
    }
})