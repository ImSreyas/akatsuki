import { PrismaClient } from '@prisma/client';
import React from 'react'

const prisma = new PrismaClient();

const Home = async () => {

  const putUser = async () => {
    prisma.$connect();
    const data = await prisma.user.create({
      data: {
        email: "manu@gmail.com",
        name: "manu"
      }
    })
  }
  // putUser();

  return (
    <div>
      
    </div>
  )
}

export default Home