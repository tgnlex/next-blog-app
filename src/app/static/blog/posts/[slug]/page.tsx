'use client'
import React from 'react'
import getPosts from '@/app/api/posts/route';
import {Suspense} from 'react';
import Loading from '@/app/loading';
import {useSearchParams} from 'next/navigation';
import Post from './showPost'
 const Page = ({slug}: {
  slug: number, 
  }) => { 
  const query = useSearchParams();
  const q = query.get('slug'); 
  const id = Number(q);
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <Post id={id} />
      </div>
    </Suspense>
  )
} 

export default Page;