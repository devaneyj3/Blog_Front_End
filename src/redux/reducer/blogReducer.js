import { GET_POST, POST_ENTRY } from "../action/post_actions";

const initial_state = {
    posts: [],
};

const blogReducer = (state = initial_state, action) => {
    switch (action.type) {
        case GET_POST:
            return {
                ...state,
            };
        case POST_ENTRY:
            return {
                posts: action.payload,
            };
        default:
            return state;
    }
};

export default blogReducer;
