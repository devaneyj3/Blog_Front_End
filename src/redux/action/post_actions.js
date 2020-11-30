import { axiosInstance } from "../../util/axios";

export const GET_POST = "GET_POST";
export const POST_ENTRY = "POST_ENTRY";

export const get_posts = () => async (dispatch) => {
    try {
        const response = await axiosInstance().get("/post/");
        dispatch({ type: GET_POST, payload: response.data });
    } catch (err) {
        dispatch({ type: GET_POST, payload: err.message });
    }
};
export const postToDB = (data) => async (dispatch) => {
    try {
        const response = await axiosInstance().post("/post/", data);
        dispatch({ type: POST_ENTRY, payload: response.data });
    } catch (e) {
        dispatch({ type: POST_ENTRY, payload: e.message });
    }
};
