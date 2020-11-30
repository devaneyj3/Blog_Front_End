import React from "react";
import { connect } from "react-redux";
import BlogForm from "../components/BlogForm/BlogForm";

import "./blog.scss";

const Blog = ({ posts }) => {
    return (
        <section className="blog">
            <BlogForm />
            {posts.length > 0
                ? posts.map((post) => {
                      return (
                          <>
                              <h1>{post.title}</h1>
                              <p>{post.body}</p>
                          </>
                      );
                  })
                : null}
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    };
};

export default connect(mapStateToProps, {})(Blog);
