"use client"
import Image from "next/image"
import Link from "next/link"
import TTY3 from "@/public/img/TTY3.jpg"

const Main = () => {
  return (
	<div className='relative'> 
	  <Image src={TTY3} className='w-full h-full object-cover' alt="demo"  />
	  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
	  	<h1 className="  text-4xl font-bold text-white">TTY</h1>
		<Link href="/timeline" className="mt-6 tracking-widest text-red-500 font-extrabold text-center bg-white hover:bg-gray-200 text-black p-3 w-48 text-2xl rounded-2xl" passHref>
			Timeline
		</Link>
	  </div>
	</div>
  )
}

export default Main
