import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import Todo from '../../src/Components/client-side-sample-page/Todo';
import { ClearAllData, FetchTodo } from '../../src/Redux/Actions/CilentSideSampleActions';

const todo = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    useEffect(()=>{
        const id = router.query.todo;
        dispatch(FetchTodo(id));
        return () => {
            dispatch(ClearAllData());
        }
    },[])
    return (
        <Todo/>
    )
}

export default todo;