import posts from '@/data/posts.js'
export async function getPost(slug) {
  return posts.find((post) => post.id === slug)
}