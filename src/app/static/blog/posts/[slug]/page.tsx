import React from 'react'
import {getPostByID} from '@/app/api/posts/route';
import {Suspense} from 'react';
import Loading from '@/app/loading';
import {useSearchParams} from 'next/navigation';
import Post from './showPost'
async function Page ({slug}: {slug: number}) { 
  const post = await getPostByID(slug)
  
  return (
    <Suspense fallback={<Loading />}>
      <div>
      <Post post={post} />
      </div>
    </Suspense>
  )
} 

export default Page;