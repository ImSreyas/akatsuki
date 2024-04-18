import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className='flex justify-between py-8 px-16'>
        <div className=''></div>
        <div className='flex justify-center'>
            <Link href={"/"} className='px-4'>
                Home
            </Link>
            <Link href={"/requests"} className='px-5'>
                Request
            </Link>
            <Link href={"/donate"} className='px-5'>
                Donate
            </Link>
            <Link href={"/history"} className='px-5'>
                History
            </Link>
            <Link href={"/profile"} className='px-5'>
                Profile
            </Link>
        </div>
    </nav>
  )
}

export default Nav