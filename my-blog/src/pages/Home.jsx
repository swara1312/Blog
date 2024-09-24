import React from 'react'
import {Link} from "react-router-dom";

const Home = () => {

  const posts = [
    {
      id:1,
      title:"lorem ipsum",
      desc: "this is the description ! this is the description ! this is the description ! this is the description ! this is the description ! this is the description !  this is the description ! this is the description ! this is the description ! ",
      img:"https://plus.unsplash.com/premium_photo-1661962685099-c6a685e6c61d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id:2,
      title:"lorem ipsum",
      desc: "this is the description ! this is the description ! this is the description ! this is the description ! this is the description ! this is the description !  this is the description ! this is the description ! this is the description ! ",
      img:"https://plus.unsplash.com/premium_photo-1661962685099-c6a685e6c61d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id:3,
      title:"lorem ipsum",
      desc: "this is the description ! this is the description ! this is the description ! this is the description ! this is the description ! this is the description !  this is the description ! this is the description ! this is the description ! ",
      img:"https://plus.unsplash.com/premium_photo-1661962685099-c6a685e6c61d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id:4,
      title:"lorem ipsum",
      desc: "this is the description ! this is the description ! this is the description ! this is the description ! this is the description ! this is the description !  this is the description ! this is the description ! this is the description ! ",
      img:"https://plus.unsplash.com/premium_photo-1661962685099-c6a685e6c61d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id:5,
      title:"lorem ipsum",
      desc: "this is the description ! this is the description ! this is the description ! this is the description ! this is the description ! this is the description !  this is the description ! this is the description ! this is the description ! ",
      img:"https://plus.unsplash.com/premium_photo-1661962685099-c6a685e6c61d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id:6,
      title:"lorem ipsum",
      desc: "this is the description ! this is the description ! this is the description ! this is the description ! this is the description ! this is the description !  this is the description ! this is the description ! this is the description ! ",
      img:"https://plus.unsplash.com/premium_photo-1661962685099-c6a685e6c61d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id:7,
      title:"lorem ipsum",
      desc: "this is the description ! this is the description ! this is the description ! this is the description ! this is the description ! this is the description !  this is the description ! this is the description ! this is the description ! ",
      img:"https://plus.unsplash.com/premium_photo-1661962685099-c6a685e6c61d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id:8,
      title:"lorem ipsum",
      desc: "this is the description ! this is the description ! this is the description ! this is the description ! this is the description ! this is the description !  this is the description ! this is the description ! this is the description ! ",
      img:"https://plus.unsplash.com/premium_photo-1661962685099-c6a685e6c61d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ];

  return (
    <div className='home'>
      <div className='posts'>
        {posts.map((post)=>(
          <div className='post' key={post.id}>
            <div className='img'>
              <img src={post.img} alt=""/>
            </div>
            <div className='content'>
              <Link className='link' to={`/post/${post.id}`}>
              <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home