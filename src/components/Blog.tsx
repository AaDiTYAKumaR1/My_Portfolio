
interface Post{
    id: number;
    title: string;
    content: string;
    author: string;
    date: Date;
    category: string;
    body: string;
}
export default async function Blog() {
    const data = await fetch('https://api.vercel.app/blog')
    const posts:Post[] = await data.json()
    return (
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    )
  }