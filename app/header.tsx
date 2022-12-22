import Link from 'next/link';

function Header() {
  return (
    <div className='p-5 bg-blue-500'>
      <Link href='/'>Home</Link>
      <Link href='/blog'>Blog</Link>
    </div>
  )
}

export default Header;