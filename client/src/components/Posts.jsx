import React, { useState } from 'react'
import PostItem from './PostItem';

import { DUMMY_POSTS } from '../data';
  


const Posts = () => {

    const [posts, setPosts] = useState(DUMMY_POSTS)

  return (
    <section className='posts'>
      {
        posts.length > 0 ? <div>
           {
            posts.map((post)=> 
            <PostItem key={post.id} {...post}/>)
        }

        </div> : <h2>No Posts found</h2>
      }
       
    </section>
  )
}

export default Posts
