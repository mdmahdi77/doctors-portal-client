import React from 'react';
import './BlogPost.css'

const BlogPost = ({blog}) => {
    const {img, author, title, date, description, background} = blog
    return (
        <div className={`blog-container m-3 py-4 px-3 blog-${background}`}>
            <div className="d-flex align-items-center">
                <img style={{height: '70px'}} src={img} alt=""/>
                <div className="mt-2 ml-3">
                    <h5 style={{color: '#1cc7c1'}}>{author}</h5>
                    <p className="text-secondary">{date}</p>
                </div>
            </div>
            <div className="">
                <h4 className="my-4" style={{color: '#3a4256'}}>{title}</h4>
                <p className="text-secondary text-justify">{description}</p>
            </div>
        </div>
    );
};

export default BlogPost;