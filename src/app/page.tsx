"use client"

import { PrismaClient } from '@prisma/client'
import React from 'react'

const prisma = new PrismaClient();

const Home = () => {
  const handleClick  = async () => {
    const data = await prisma.User.create({
      email: "sreyas@gmail.com"
    })
    console.log(data);
  }

  return (
    <div>
      <button onClick={handleClick}>hello</button>
    </div>
  )
}

export default Home