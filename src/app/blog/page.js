import posts from '@/data/posts.js';
import Link from 'next/link';
import '@/style/blog.css';
export default function Blog(){
  const data = posts;
  return (
    <main id="blog" className="flex flex-col place-items-center">
      <h1 id="heading" className="text-6xl mt-8">Blog Feed</h1>
      <div id="feed" className="mt-20" >
        <h2 id="subheading" className="text-5xl">Latest Posts</h2>
        <ul id="posts" className="flex flex-col place-items-center">
        {posts.map((post) => (
          <li className="mt-10" key={post.id}>
            <Link href={`./blog/${post.id}`}>
              <h1 className="text-4xl underline">
              {post.id}. {post.title}
              </h1>
            </Link>
          </li>
        ))}
        </ul>
      </div>
    </main>
  )
}