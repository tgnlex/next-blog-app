import './home.css';
import Link from 'next/link';
export default function Home() {
  return (
  <main id="home" className="flex flex-col place-items-center">
    <h1 className="h-10 text-6xl" id="heading">Welcome Home!</h1>
    <section id="links" className="flex flex-col place-items-center">
      <p className="mt-20">
        Lorem ipsum ipsum lorem lorem ipsum <br/>
        Lorem lorem lorem ipsum ipsum lorem <br/>
        Lorem ipsum ipsum lorem lorem lorem <br/>
        Lorem lorem Ipsum Ipsum lorem Ipsum <br/>
      </p>
    </section>
  </main>
  )
}