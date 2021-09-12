import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 0, post: 'йо', likesCount: '00'},
            {id: 1, post: 'Привет', likesCount: '11'},
            {id: 2, post: 'Шалом', likesCount: '22'},
            {id: 3, post: 'Вечер в хату', likesCount: '33'},
            {id: 4, post: 'Здравствуйте', likesCount: '44'}
        ],
    },

    dialogsPage: {
        messages: [
            {id: 0, message: 'йо'},
            {id: 1, message: 'Привет'},
            {id: 2, message: 'Шалом'},
            {id: 3, message: 'Вечер в хату'},
            {id: 4, message: 'Здравствуйте'}
        ],
        dialogs: [
            {id: 0, name: 'Arkadiy'},
            {id: 1, name: 'Roman'},
            {id: 2, name: 'Kate'},
            {id: 3, name: 'Dasha'},
            {id: 4, name: 'Sasha'}
        ],
    },

}


export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        post: postMessage,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state)
}

export default state;