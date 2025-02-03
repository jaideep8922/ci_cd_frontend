import { createSlice } from '@reduxjs/toolkit'

interface Data {
    id: number,
    name: string

}

interface blogData {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

interface State {
    value: number;
    data: Data[],
    posts: any,
    toggle: boolean,
    blogData: blogData[]
}

const initialState: State = {
    value: 0,
    data: [
        {
            id: 1,
            name: "jai"
        },
        {
            id: 2,
            name: "jaid"
        },
        {
            id: 3,
            name: "jaideep"
        },
    ],
    posts: [],
    toggle: false,
    blogData: [
        {
            "albumId": 1,
            "id": 1,
            "title": "accusamus beatae ad facilis cum similique qui sunt",
            "url": "https://via.placeholder.com/600/92c952",
            "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        },
        {
            "albumId": 1,
            "id": 2,
            "title": "reprehenderit est deserunt velit ipsam",
            "url": "https://via.placeholder.com/600/771796",
            "thumbnailUrl": "https://via.placeholder.com/150/771796"
        },
        {
            "albumId": 1,
            "id": 3,
            "title": "officia porro iure quia iusto qui ipsa ut modi",
            "url": "https://via.placeholder.com/600/24f355",
            "thumbnailUrl": "https://via.placeholder.com/150/24f355"
        },
        {
            "albumId": 1,
            "id": 4,
            "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
            "url": "https://via.placeholder.com/600/d32776",
            "thumbnailUrl": "https://via.placeholder.com/150/d32776"
        }]

}

const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        setPosts: (state, action: any) => {
            state.posts = action.payload
        },
        toggle: (state) => {
            state.toggle = !state.toggle
        },
        blog: (state) => {
            state.blogData
        }




    }
})

export const { increment, decrement, setPosts, toggle } = apiSlice.actions

export default apiSlice.reducer
