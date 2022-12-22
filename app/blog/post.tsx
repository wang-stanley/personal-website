import Link from 'next/link';
import Image from 'next/image';

function Post({ post }: any) {
  const { id, title, content, created, image } = post || {};

  return (
    <Link href={`/blog/${id}`}>
      <div>
        <h2>{title}</h2>
        <Image 
          src={`http://127.0.0.1:8090/api/files/blog_posts/${id}/${image}`} 
          width={500} 
          height={500} 
          alt='Post image'
        />
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </Link>
  )
}

export default Post;