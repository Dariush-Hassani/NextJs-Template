import React, { useEffect } from 'react'
import { ssrSamplePageAPI } from '../../src/Services/_APIs'
import Todo from '../../src/Components/ssr-sample-page/Todo';

const todo = ({ data }) => {
    return (
        <Todo data={data}/>
    )
}

export async function getServerSideProps(context) {
    let id = context.query.todo;
    let res = await ssrSamplePageAPI.todo(id);
    let data = res.data;
    return { props: { data } }
}

export default todo;