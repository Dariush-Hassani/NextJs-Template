export const ChangeTheme = (type) => {
    return{
        type : 'app/changeTheme',
        payload: type,
    }
}

export const ChangeBreakPoint = (breakpoint) => {
    return{
        type : 'app/changeBreakPoint',
        payload: breakpoint,
    }
}