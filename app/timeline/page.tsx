import React from 'react'
import Image from 'next/image'
import TTY3 from "@/img/TTY3.jpg"
import TTY1 from "@/img/TTY1.jpg"
import TTY2 from "@/img/TTY2.jpg"


const page = () => {
  return (
	<div>
	  	 <Image src={TTY2} className='w-fit h-fit' alt="demo"  />
	  	 <Image src={TTY3} className='w-fit h-fit' alt="demo"  />
	  	 <Image src={TTY1} className='w-fit h-fit' alt="demo"  />

	</div>
  )
}

export default page
