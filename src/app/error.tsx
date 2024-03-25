"use client"
import BackBtn from '@/components/backBtn';
export default function Error () {
  return (
    <main id="error" className="flex flex-col place-items-center mt-24">
      <h1 className="text-6xl mt-20">An Error Occurred</h1>
      <h2 className="text-4xl mt-20">Something went wrong.</h2>
      <BackBtn />
    </main>
    
  )
}