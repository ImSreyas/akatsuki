import prisma from '@/utils/db';
import { UserProfile, auth ,SignOutButton} from '@clerk/nextjs'
import React from 'react'

const Home = async () => {
  // const user = await auth();

  try {
    const newUser = await prisma.users.create({
      data: {
        email: "aswinko@gmail.com",
        name: "Aswin",
        // Add any other required fields here
      }
    });
    console.log("User created successfully:", newUser);
  } catch (error) {
    console.error("Error creating user:", error);
  }


  return (
    <div>
      <UserProfile />
      <SignOutButton />
    </div>
  )
}

export default Home