export default function ClientSideSampleReudcer(state = { loadingTodo: true,loadingList: true, list:[], todo:{}}, action) {
    if (action.type === "clientSideSample/setLoadingList") {
        return {
            ...state,
            loadingList: action.payload,
        };
    }
    else if (action.type === "clientSideSample/setLoadingTodo") {
        return {
            ...state,
            loadingTodo: action.payload,
        };
    }
    else if (action.type === "clientSideSample/fetchListSuccess") {
        return {
            ...state,
            list: action.payload,
        };
    }
    else if (action.type === "clientSideSample/fetchTodoSuccess") {
        return {
            ...state,
            todo: action.payload,
        };
    }
    else if (action.type === "clientSideSample/clearAll") {
        return {
            ...state,
            todo: {},
            list:[],
            loadingList:true,
            loadingTodo: true
        };
    }
    return state;
}