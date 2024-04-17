import { UserProfile, auth ,SignOutButton} from '@clerk/nextjs'
import React from 'react'

const Donation = async () => {
  const user = await auth();

  return (
    <div>
      {/* <SignIn /> */}
    </div>
  )
}

export default Donation