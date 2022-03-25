export const ChangeTheme = (type) => {
    return{
        type : 'app/changeTheme',
        payload: type,
    }
}

export const ChangeLanguage = (lang) => {
    return{
        type : 'app/changeLang',
        payload: lang,
    }
}

export const ChangeBreakPoint = (breakpoint) => {
    return{
        type : 'app/changeBreakPoint',
        payload: breakpoint,
    }
}