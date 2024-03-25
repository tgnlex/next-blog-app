import {Suspense } from 'react';
import Loading from '@/app/loading';
import '@/style/blog.css';
export async function getPosts() {
  const res = await fetch('https://api.vercel.app/blog')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json();
}
export type Post = {
  id: number, 
  title: string, 
  content: string, 
  author: string, 
  date: string,
  category: string
}
export async function Posts() {
  const { posts } = await getPosts();  

  return (
    <>
    {posts.map(({post}: {
      id: number, 
      post: Post,
    }) => {
      <li key={post.id}>
        <p>{post.title}</p>
      </li>
      
    })}
    </>
  )

}
export default function Blog(){
  return (
    <Suspense fallback={<Loading />}>
    <main id="blog" className="flex flex-col place-items-center">
      <h1 id="heading" className="text-6xl mt-8">Blog Feed</h1>
      <div id="feed" className="mt-20" >
        <h2 id="subheading" className="text-5xl">Latest Posts</h2>
        <ul id="posts" className="flex flex-col place-items-center">
          <Posts />
        </ul>
      </div>
    </main>
    </Suspense>
  )
}