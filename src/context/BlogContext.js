import React, { useState } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    const [ blogPosts, setBlogPosts ] = useState();

    // Goal of this function is to use our setter to add new blog posts
    const addBlogPost = () => {
        setBlogPosts([ ...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` } ]);
    };

    return (
        <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost }}>
           {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;