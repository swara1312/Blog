import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const Menu = ({cat}) => {

  const[posts,setPosts] = useState([]);

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const res = await axios.get(`/posts/?cat=${cat}`)
        setPosts(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchData();
  },[cat]);

    // const posts = [
    //     {
    //       id:1,
    //       title:"lorem ipsum",
    //       desc: "this is the description ! this is the description ! this is the description ! this is the description ! this is the description ! this is the description !  this is the description ! this is the description ! this is the description ! ",
    //       img:"https://plus.unsplash.com/premium_photo-1661962685099-c6a685e6c61d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //     },
    //     {
    //       id:2,
    //       title:"lorem ipsum",
    //       desc: "this is the description ! this is the description ! this is the description ! this is the description ! this is the description ! this is the description !  this is the description ! this is the description ! this is the description ! ",
    //       img:"https://plus.unsplash.com/premium_photo-1661962685099-c6a685e6c61d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //     },
    //     {
    //       id:3,
    //       title:"lorem ipsum",
    //       desc: "this is the description ! this is the description ! this is the description ! this is the description ! this is the description ! this is the description !  this is the description ! this is the description ! this is the description ! ",
    //       img:"https://plus.unsplash.com/premium_photo-1661962685099-c6a685e6c61d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //     },
    //     {
    //       id:4,
    //       title:"lorem ipsum",
    //       desc: "this is the description ! this is the description ! this is the description ! this is the description ! this is the description ! this is the description !  this is the description ! this is the description ! this is the description ! ",
    //       img:"https://plus.unsplash.com/premium_photo-1661962685099-c6a685e6c61d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //     },
    //     {
    //       id:5,
    //       title:"lorem ipsum",
    //       desc: "this is the description ! this is the description ! this is the description ! this is the description ! this is the description ! this is the description !  this is the description ! this is the description ! this is the description ! ",
    //       img:"https://plus.unsplash.com/premium_photo-1661962685099-c6a685e6c61d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //     },
    //   ];

  return (
    <div className='menu'>
        <h1>Other posts you may like </h1>
        {posts.map(post=>(
            <div className='post' key={post.id}>
                <img src={`../uploads/${post?.img}`} alt='image here'/>
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}

export default Menu