import Link from 'next/link';
export default function Blog(){
  return (
    <main className=" flex flex-col place-items-center">
      <h1 className="text-6xl mt-8">My Blog</h1>
      <div className="mt-20"id="feed">
        <h2 className="text-4xl">Latest Posts:</h2>
        <ul id="posts" className="flex flex-col place-items-center">
          <Link className="text-2xl underline" href="./blog/1">Post One</Link>
          <Link className="text-2xl underline" href="./blog/2">Post Two</Link>
        </ul>
      </div>
    </main>
  )
}