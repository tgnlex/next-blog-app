import NextCors from 'nextjs-cors';

export async function getPosts () {   

  const res = await fetch('https://api.vercel.app/blog', {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
  })
  if (!res.ok) {
    throw new Error;

  }
  console.log(res.headers);
  const data = res.json();
  return data;
}

export async function getPostByID (id: number) {
  const res = await fetch(`https://api.vercel.app/blog/${id}`)
  let data = res.json();
  return data

}
