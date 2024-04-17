import prisma from '@/utils/db';
import { UserProfile, auth ,SignOutButton} from '@clerk/nextjs'
import { PrismaClient } from '@prisma/client';
import React from 'react'

// const prisma = new PrismaClient();

const Home = async () => {

  return (
    <div>
      <UserProfile />
      <SignOutButton />
    </div>
  )
}

export default Home