import { clientSidePageAPI } from "../../Services/_APIs";

export const SetLoading = (status) => {
    return {
        type: "clientSideSample/setLoading",
        payload: status
    }
}
export const FetchList = () => {
    return async (dispatch) => {
        dispatch(SetLoading(true));
        try {
            let res = await clientSidePageAPI.list();
            dispatch(SetLoading(false));
            dispatch({ type: 'clientSideSample/fetchListSuccess', payload: res.data });
        }
        catch (error) {
            console.log(error);
        }
    }
}