import {getPostByID} from '@/app/api/posts/route';
import {Suspense} from 'react';
import Loading from '@/app/loading';
async function Page ({ slug}: { 
   slug: {
     slug: number;
  }, 
},
  
)
 { 
  const post = await getPostByID(1)

  return (
    <Suspense fallback={<Loading />}>
      <div>
        <h1>{post.title}</h1>
        <h2>By: {post.author}</h2>
        <h3>{post.date}</h3>
        <p>{post.content}</p>
      </div>
    </Suspense>
  )
} 

export default Page;