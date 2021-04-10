import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import './Blog.css'
import aliza from '../../../images/aliza.png'
import caucil from '../../../images/wilson.png'
import ema from '../../../images/ema.png'


const blogData = [
    {
        img: aliza,
        author: 'Dr. Aliza',
        date: '29 april, 2020',
        title: 'Check at least a doctor in a year for your teeth',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        background: 'primary'
    },
    {
        img: caucil,
        author: 'Dr. Caucil',
        date: '29 april, 2020',
        title: 'Two time brush in a day can keep you healthy',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        background: 'white'
    },
    {
        img: ema,
        author: 'Dr. Ema',
        date: '29 april, 2020',
        title: 'The tooth cancer is taking a challenge',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        background: 'white'
    }
]

const Blog = () => {
    return (
        <section className="blogs">
            <div className="container">
                <div className="text-center">
                    <h5 style={{ color: '#1cc7c1' }}>OUR BLOG</h5>
                    <h2 className="my-4" style={{ color: '#3a4256' }}>From Our Blogs News</h2>
                </div>
                <div className="my-5 d-flex justify-content-between">
                    {
                        blogData.map(blog => <BlogPost blog={blog}></BlogPost>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;