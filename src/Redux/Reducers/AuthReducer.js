import { initToken } from "../../Utils/Functions";

const token = initToken();

export default function AuthReducer(state = { token: token, isAuth: token !== '' }, action) {
    if (action.type === "auth/setToken") {
        localStorage.setItem('token',action.payload);
        return {
            ...state,
            token: action.payload,
            isAuth: true
        };
    }
    else if (action.type === "auth/removeToken") {
        localStorage.setItem('token','');
        return {
            ...state,
            token: '',
            isAuth: false
        }
    }
    return state;
}