import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">Use this api to get data related to differnt diseases limited to 30 calls per day</p>
      <Link className="btn btn-primary" href='/docs'>Docs</Link>
    </div>
  </div>
</div>
  )
}

export default Hero