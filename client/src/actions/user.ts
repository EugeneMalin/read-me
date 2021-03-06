import { IUser } from "../data/user";

export enum UserAction {
    Update = 'user_update',
    Unset = 'user_unset',
    Set = 'user_set'
}

export interface IUserAction {
    type: UserAction,
    user?: IUser|Partial<IUser>
}

export const set = (user: IUser) => {
    return {
        type: UserAction.Set,
        user
    }
}

export const unset = () => {
    return {
        type: UserAction.Unset
    }
}

export const update = (user: Partial<IUser>) => {
    return {
        type: UserAction.Update,
        user
    }
}

export const actions = {
    set, unset, update
}