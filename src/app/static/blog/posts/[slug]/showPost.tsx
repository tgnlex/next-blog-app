import React from 'react'
import Post from '@/types/PostType' ;
import getPosts from '@/app/api/posts/route'
async function Post({id} : {
  id: number, 
}) {
  const posts = await getPosts()
  const post: Post = posts[id];
  return (
    <div>
       <div className="container flex flex-col place-items-center place-content-center" id="page">
        <h1>{post.title}</h1>
        <h2>By: {post.author}</h2>
        <h3>{post.date}</h3>
        <p>{post.content}</p>
      </div>
    </div>
  )
}

export default Post;