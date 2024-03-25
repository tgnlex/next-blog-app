import NextCors from 'nextjs-cors';
import {NextApiRequest, NextApiResponse} from 'next';

async function getPosts () {   

  const res = await fetch('https://api.vercel.app/blog', {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
  })
  console.log(res.headers);
  return res.json();

}

export default getPosts;