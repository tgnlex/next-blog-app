import {Suspense} from 'react';
import Loading from './loading';
import SampleText from '@/components/sampleText'
import Header from '@/components/header';
import '@/style/home.css';
import Link from 'next/link';

export default function Home() {
  const heading = "Welcome Home!"
  return (
    <Suspense fallback={<Loading />}>
      <div id="page">
        <Header text={heading} />
        <main id="home" 
          className="container-fluid m-auto p-10 flex flex-col place-items-center">
          <h2 id="sub-heading" className="text-3xl">
            Bulletin
          </h2>
          <section id="content" 
            className="flex flex-col  place-items-center">
            <SampleText />
          </section>
        </main>
      </div>
    </Suspense>
  )
}