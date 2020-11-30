import React, { useState } from "react";
import moment from "moment";

import "./blog.scss";

const Blog = () => {
    const [data, setUser] = useState({
        title: "",
        body: "",
        created_at: moment().format("llll"),
    });

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
    };

    const change = (e) => {
        setUser({ ...data, [e.target.name]: e.target.value });
    };
    return (
        <section className="blog">
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
        </section>
    );
};

export default Blog;
