import React, { useState } from "react";
import moment from "moment";
import { postToDB } from "../../redux/action/post_actions";
import { connect } from "react-redux";

const BlogForm = ({ postToDB }) => {
    const [data, setUser] = useState({
        title: "",
        body: "",
        created_at: moment().format("llll"),
    });

    const submit = async (e) => {
        e.preventDefault();
        postToDB(data);
    };

    const change = (e) => {
        setUser({ ...data, [e.target.name]: e.target.value });
    };
    return (
        <>
            <form className="blog-form" onSubmit={submit}>
                <input
                    type="text"
                    name="title"
                    value={data.title}
                    placeholder="Enter a title"
                    onChange={change}
                />
                <textarea
                    name="body"
                    placeholder="Enter your content"
                    value={data.body}
                    onChange={change}
                ></textarea>
                <input type="submit" />
            </form>
        </>
    );
};

export default connect(null, { postToDB })(BlogForm);
