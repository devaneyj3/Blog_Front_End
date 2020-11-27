import { GET_POST } from "../action/post_actions";

const initial_state = {
    posts: [],
};

const blogReducer = (state = initial_state, action) => {
    switch (action.type) {
        case GET_POST:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default blogReducer;
