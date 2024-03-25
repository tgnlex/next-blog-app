import {Suspense } from 'react';
import Link from 'next/link'
import Loading from '@/app/loading';
import ListPosts from './listPosts';
import '@/style/blog.css';




export default async function Blog() {
  return (
    <Suspense fallback={<Loading />}>
    <main id="blog" className="flex flex-col place-items-center place-content-center">
      <h1 id="heading" className="text-6xl mt-8">Blog Feed</h1>
      <div id="feed" className="mt-20" >
        <h2 id="subheading" className="text-5xl">Latest Posts</h2>
        <ul id="posts" className="flex flex-col place-items-center">
          <ListPosts />      
        </ul>
      </div>
    </main>
    </Suspense>
  )
}