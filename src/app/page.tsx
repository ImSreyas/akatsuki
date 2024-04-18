import prisma from '@/utils/db';
import { auth } from '@clerk/nextjs';
import { PrismaClient } from '@prisma/client';
import React from 'react'

// const prisma = new PrismaClient();

const Home = async () => {
  // const user = await auth();



  return (
    <div className="flex flex-col justify-center items-center text-center py-14">
      <div className='first-section w-2/3 py-16 px-32'>
        <h1 className='text-[80px] tracking-tighter py-4'>Zero Hunger</h1>
        <div className='desc text-xl px-32'>
          Lets make the dream of Zero Hunger possible by making donations to people needy or starving food which would be a way for us to show our caring for fellow beings and helping humanity to be hunger free. We need your help for making this dream a reality. Please make a donation and become a part of this vision.
        </div>
      </div>
      <div className='second-section w-2/3 py-16 mt-32'>
        <h1 className='text-[80px] tracking-tighter py-4'>Zero Hunger</h1>
        <div className='desc text-xl px-32'>
          Lets make the dream of Zero Hunger possible by making donations to people needy or starving food which would be a way for us to show our caring for fellow beings and helping humanity to be hunger free. We need your help for making this dream a reality. Please make a donation and become a part of this vision.
        </div>
      </div>
    </div>
  )
}

export default Home