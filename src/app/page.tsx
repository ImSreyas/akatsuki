import { UserProfile, auth ,SignOutButton} from '@clerk/nextjs'
import React from 'react'

const Home = async () => {
  const user = await auth();

  return (
    <div>
      <UserProfile />
      <SignOutButton />
    </div>
  )
}

export default Home