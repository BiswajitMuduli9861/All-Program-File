import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <div className=''>
      <h3>Logo</h3>
        <nav className='flex gap-4'>
            <ul className=''>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="about/aboutteam">AboutTeam</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navigation
