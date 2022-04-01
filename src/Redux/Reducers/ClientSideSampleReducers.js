export default function ClientSideSampleReudcer(state = { loading: true, list:[]}, action) {
    if (action.type === "clientSideSample/setLoading") {
        return {
            ...state,
            loading: action.payload,
        };
    }
    else if (action.type === "clientSideSample/fetchListSuccess") {
        return {
            ...state,
            list: action.payload,
        };
    }
    return state;
}