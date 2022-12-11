import { User } from "../../models/user.model.js"

export const postResolvers = {
    user: async ({ userId }: {userId: string} , _: unknown, __: unknown) => {
        return await User.findOne({ where: { id: userId} })
    }
}