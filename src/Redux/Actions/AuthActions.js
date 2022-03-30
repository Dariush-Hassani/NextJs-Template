export const SetToken = (token) => {
    return {
        type: 'auth/setToken',
        payload: token,
    }
}

export const RemoveToken = () => {
    return {
        type: 'auth/removeToken',
    }
}