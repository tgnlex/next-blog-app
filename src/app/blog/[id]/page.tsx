import BackBtn from '@/components/btn-back';
import {getPost} from '@/lib/getPost.js';
import Link from 'next/link';
import '@/style/posts.css';
export default async function Post ({params}: {
  params: {
    id: string
  }
}) { 
  const post = await getPost(params.id);
  if (post != undefined) {
   return ( 
    <main className="flex flex-col place-items-center">
      <h1 
      id="title" 
      className="text-6xl mt-20 underline"
      >
        {post.title}
      </h1>
      <p 
      id="content"
      className="text-xl mt-20">
        {post.body}
      </p>
      <BackBtn />
    </main>
  ) 
  } else {
    return (
      <main className="flex flex-col place-items-center">
        <h1>Error: Post data not found.</h1>
        <BackBtn />
      </main>
    )
  }
 //const file = await fs.readFile(process.cwd() +'/src/data/posts.json')
 
}