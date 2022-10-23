import React from 'react'
import {useSession, signIn} from 'next-auth/react'

function dashboard() {
    const {data: session, status} = useSession()
  return (
    <div>
     {status == 'unauthenticated' ? signIn() : <h3>DASHBOARD</h3>}
    </div>
  )
}

export default dashboard