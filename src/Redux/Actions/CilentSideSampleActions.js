import { clientSidePageAPI } from "../../Services/_APIs";

export const SetLoadingList = (status) => {
    return {
        type: "clientSideSample/setLoadingList",
        payload: status
    }
}
export const SetLoadingTodo = (status) => {
    return {
        type: "clientSideSample/setLoadingTodo",
        payload: status
    }
}
export const FetchList = () => {
    return async (dispatch) => {
        dispatch(SetLoadingList(true));
        try {
            let res = await clientSidePageAPI.list();
            dispatch(SetLoadingList(false));
            dispatch({ type: 'clientSideSample/fetchListSuccess', payload: res.data });
        }
        catch (error) {
            console.log(error);
        }
    }
}

export const FetchTodo = (id) => {
    return async (dispatch) => {
        dispatch(SetLoadingTodo(true));
        try {
            let res = await clientSidePageAPI.todo(id);
            dispatch(SetLoadingTodo(false));
            dispatch({ type: 'clientSideSample/fetchTodoSuccess', payload: res.data });
        }
        catch (error) {
            console.log(error);
        }
    }
}

export const ClearAllData = () => {
    return {
        type:'clientSideSample/clearAll',
    }
}