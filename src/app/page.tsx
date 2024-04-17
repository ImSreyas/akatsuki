import prisma from '@/utils/db';
import { UserProfile, auth ,SignOutButton} from '@clerk/nextjs'
import React from 'react'

const Home = async () => {
  const user = await auth();

  const data = await  prisma.user.create({
   data: {
    email: "aswinko@gmail.com",
     name: "Aswin",
   }

  

  })

  return (
    <div>
      <UserProfile />
      <SignOutButton />
    </div>
  )
}

export default Home