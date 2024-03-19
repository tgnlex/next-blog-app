import Image from 'next/image';
export default function Profile({user}: {
  user: { name: string, username: string, email: string, avatar: string | null}
}) {
  const User = {
    name: "Xander",
    username: "Admin",
    email: "admin@admin.com",
    avatar: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-588935825.jpg"
  }
  return (
  <main className="container-fluid flex flex-col place-items-center mt-20">
  <h1 className="text-6xl">My Profile</h1>
  <section className="mt-28" id="profile">
    <img  className="mb-14" width={300} height={300} src={User.avatar} alt="Profile Picture Here" />
    <h2 className=" text-2xl"><span className="mr-14 underline">Name:</span> {User.name}</h2>
    <h2 className="text-2xl"><span className="mr-16 underline">User:</span> {User.username}</h2>
    <h2 className="text-2xl"><span className="mr-14 underline">Email:</span> {User.email}</h2>
  </section>
  </main>
  )
}