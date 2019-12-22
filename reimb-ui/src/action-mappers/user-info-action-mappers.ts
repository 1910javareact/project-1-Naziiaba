import { User } from "../models/user"

export const oUserTypes = {
    USER_SUCCESSFUL: 'USER_FOUND_SUCCESSFUL'
}

export const userAction = (user: User) => {
    return {
        type: oUserTypes.USER_SUCCESSFUL,
        payload: {
            user
        }
    }
}