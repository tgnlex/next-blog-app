import { Suspense } from 'react';
import Loading from '@/app/loading';
import Header from '@/components/header';
import SampleText from '@/components/sampleText';
import '@/style/globals.css'
export default function About() {
  let heading = "About Us"
  return (
    
    <Suspense fallback={<Loading/>}>
      <div id="page">
       <Header text={heading} />
        <main className="container-fluid mt-10">
          <SampleText />
          <SampleText />
          <SampleText />
          <SampleText />
        </main>
      </div>
    </Suspense>
  )
}