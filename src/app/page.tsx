import { UserProfile, auth ,SignOutButton} from '@clerk/nextjs'
import { PrismaClient } from '@prisma/client';
import React from 'react'

const prisma = new PrismaClient();

const Home = async () => {
  const user = await auth();

  const putUser = async () => {
    prisma.$connect();
    const data = await prisma.user.create({
      data: {
        email: "manu@gmail.com",
        name: "manu"
      }
    })
  }
  await putUser();

  return (
    <div>
      <UserProfile />
      <SignOutButton />
    </div>
  )
}

export default Home