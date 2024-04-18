import { SignOutButton, UserProfile } from '@clerk/nextjs'
import React from 'react'

const Profile = () => {
  return (
    <div>
        <div className="flex justify-center">
            <UserProfile />
        </div>
        <SignOutButton />
    </div>
  )
}

export default Profile