import Link from 'next/link'
import React from 'react'
import { SignOutButton } from "@clerk/nextjs";

const Nav = () => {
  return (
    <nav className='flex justify-between py-8 px-16'>
        <div className=''></div>
        <div className='flex justify-center'>
            <Link href={"/"} className='px-4'>
                Home
            </Link>
            <Link href={"/donation/request"} className='px-5'>
                Request
            </Link>
            <Link href={"/donation/donate"} className='px-5'>
                Donate
            </Link>
            <Link href={"/history"} className='px-5'>
                History
            </Link>
            <Link href={"/profile"} className='px-5'>
                Profile
            </Link>
            <h4 className='px-5'>
                <SignOutButton>
                    <button>Sign out</button>
                </SignOutButton>
            </h4>
        </div>
    </nav>
  )
}

export default Nav