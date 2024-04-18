import prisma from '@/utils/db';
import { auth } from '@clerk/nextjs';
import { PrismaClient } from '@prisma/client';
import React from 'react'

// const prisma = new PrismaClient();

const Home = async () => {
  // const user = await auth();



  return (
    <div>
      <div className='first-section'>
        <h1 className='text-[50px]'>Zero Hunger</h1>
        <div className='desc'>
          Lets make the dream of Zero Hunger possible by making donations to people needy or starving food which would be a way for us to show our caring for fellow beings and helping humanity to be hunger free. We need your help for making this dream a reality. Please make a donation and become a part of this vision.
        </div>
      </div>
      <div className='second-section'></div>
    </div>
  )
}

export default Home