import { getSession } from 'next-auth/react'
import React from 'react'

function blog({data}) {
  return (
    <div>
      <h3 className='font-bold text-2xl'>{data}</h3>
    </div>
  )
}

export default blog

// show content by checking user is logged in or not
export async function getServerSideProps(context){
  const session = await getSession(context)
  
  // 1. if user not loged in then send visitor to signin page.
  //    below code restricet unauthorized user to see blog page
  if(!session){
    return {
      redirect: {
        destination : `/api/auth/signin?callbackUrl=http://localhost:3000/blog`,
        permanent: false,
      },
    }
  }
  
  // 2. this code allow user without login to see blog with free posts only
  return {
    props: {
      data:session ? 'List of 100 personalized blogs':'List of 100 free blogs',
    },
  }
}