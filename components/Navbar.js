import React from 'react'
import Link from 'next/link'
import { signIn, signOut, useSession} from 'next-auth/react'

const Navbar = () => {
  const {data: session, status} = useSession();
  return (
    <div className='bg-gray-500 px-2 py-2 flex flex-row'>
     <h2 className='font-bold text-3xl'>NEXTAUTH</h2>
     <div className='flex flex-row w-full'>
      <ul className='flex ml-96 space-x-5 items-center w-auto'>
        <li>
          <Link href={'/'}>
           <h3 className='text-green-500 font-bold'>Home</h3>
          </Link>
        </li>
        { status == 'authenticated' ? <li>
          <Link href={'/dashboard'}>
           <h3 className='text-green-500 font-bold'>DASHBOARD</h3>
          </Link>
        </li>:null}
        
        <li>
          <Link href={'/blog'}>
           <h3 className='text-green-500 font-bold'>BLOG</h3>
          </Link>
        </li>
        {status == 'unauthenticated' ? <li>
          <Link href={'/api/auth/signin'}>
           <a onClick={e => {e.preventDefault(); signIn('github');}} className='text-green-500 font-bold'>SIGN IN</a>
          </Link>
        </li> : null}
        { status == 'authenticated' ? <li>
          <Link href={'/api/auth/signout'}>
           <a onClick={e => {e.preventDefault(); signOut();}} className='text-green-500 font-bold'>SIGN OUT</a>
          </Link>
        </li>: null}
      </ul>
     </div>
     {status == 'loading'  ?<div>
      <h3>Authenticating!</h3>
     </div>: null}
    </div>
  )
}

export default Navbar