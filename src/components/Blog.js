import React from "react";
import POSTS from "../data/posts.js"
import "../css/Blog.css"


function Blog() {
    const bloglist = [];
    for (let i in POSTS) {
        bloglist.push(
            <div key={i} className="postItem">
                <div className="postPictureBlock">
                    <img src={POSTS[i].picture} alt={POSTS[i].name}></img>
                </div>
                <div className="date">{POSTS[i].date}</div>
                <div className="title">{POSTS[i].name}</div>
                <div className="button">Read more</div>
            </div>
        )
    }
    return (
        <>
            <div className="mainTitle">Our Blog</div>
            <div className="blogs">
                {bloglist}
            </div>
        </>
    )
}





export default Blog;