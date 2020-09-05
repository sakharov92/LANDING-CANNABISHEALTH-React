import React from "react";
import POSTS from "../data/posts.js"
import "../css/Blog.css"


function Blog() {
    const bloglist = [];
    for (let i in POSTS) {
        bloglist.push(
            <section key={i} className="postItem">
                <div className="postPictureBlock">
                    <img src={POSTS[i].picture} alt={POSTS[i].name}></img>
                </div>
                <div className="date">{POSTS[i].date}</div>
                <h2 className="title">{POSTS[i].name}</h2>
                <button className="button">Read more</button>
            </section>
        )
    }
    return (
        <>
            <section id="blog" className="container">
                <h2 className="mainTitle">Our Blog</h2>
                <section className="blogs">
                    {bloglist}
                </section>
            </section>
        </>
    )
}





export default Blog;