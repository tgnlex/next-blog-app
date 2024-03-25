import React from 'react'
import getPosts from '@/app/api/posts/route';
import Link from 'next/link';
import type Post from '@/types/PostType';
async function ListPosts () {
  const posts = await getPosts();
  return (
    <>
    {posts.map((post: Post) => (
      <li id="list-item" className="text-lg mt-5" key={post.id}>
        <Link 
        className="flex flex-col place-items-center place-content-center" 
        href={`/static/blog/posts/${post.id}?slug=${post.id}`}>
          <p id="post-title">{post.id}. {post.title}</p>
          <p id="post-author"> by: {post.author}</p>
        </Link> 
       </li>
    ))}
  </>
  )
}

export default ListPosts;