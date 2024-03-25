import {Suspense} from 'react';
import Header from  '@/components/header';
import Loading from '@/app/loading'; 
import SampleText from '@/components/sampleText'
import '@/style/globals.css';
export default function Profile() {
  const User = {
    name: "Xander",
    username: "Admin",
    email: "admin@admin.com",
    avatar: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-588935825.jpg"
  }
  const heading=`${User.username}'s Profile`
  return (
    <Suspense fallback={<Loading/>}>
      <div id="page">
      <Header text={heading} />
        <main className="container-fluid flex flex-roww place-items-center mt-20">
          <section className="border p-20 mb-8 mt-16" id="profile">
            <h2 className="text-4xl ml-24 mb-12">Info: </h2>
            <img className="mb-4" width={300} height={300} src={User.avatar} alt="Profile Picture Here" />
            <h2 className=" text-xl">
              <span className="mr-14 underline">
                Name:
              </span>
                {User.name}
            </h2>
            <h2 className="text-xl">
              <span className="mr-16 underline">
                User:
              </span> 
              {User.username}
            </h2>
            <h2 className="text-xl">
              <span className="mr-14 underline">
                Email:
              </span> 
              {User.email}
            </h2>
          </section>  
          <section id="bio"
          className="ml-40 mt-8 border p-8">
            <h2 className="text-4xl mb-8" id="sub-heading">
              Biography: 
            </h2>
            <div id="bio-text">
              <SampleText />
              <SampleText />
              <SampleText />
            </div>
          </section>
        </main>
      </div>
    </Suspense>
  )
}