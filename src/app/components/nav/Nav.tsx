import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className='flex justify-between py-6 px-16'>
        <div className=''></div>
        <div className='flex justify-center'>
            <Link href={"/"} className='px-4'>
                Home
            </Link>
            <Link href={"/requests"} className='px-4'>
                Request
            </Link>
            <Link href={"/donate"} className='px-4'>
                Donate
            </Link>
            <Link href={"/history"} className='px-4'>
                History
            </Link>
            <Link href={"/profile"} className='px-4'>
                Profile
            </Link>
        </div>
    </nav>
  )
}

export default Nav