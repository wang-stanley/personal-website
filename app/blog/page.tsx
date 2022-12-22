import Post from './post'

async function getBlogPosts() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/blog_posts/records?page=1&perPage=10');
  const data = await res.json();
  return data?.items as any[];
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();
  
  return (
    <div>
      <h1>
        Blog
      </h1>
      <div>
        {blogPosts?.map((post) => {
          return <Post key={post.id} post={post}/>
        })}
      </div>
    </div>
  );
}