import { PrismaClient } from '@prisma/client'
import React from 'react'

const prisma = new PrismaClient();

const Home = async () => {
  const get = async () => {
    const data = prisma.user.create({
      data: {
        name: "sreyas",
        email: "sreyas123@gmail.com"
      }
    })
  }
  get();

  return (
    <div>
      <button className='border rounded-sm px-6 py-2'>button</button>
    </div>
  )
}

export default Home