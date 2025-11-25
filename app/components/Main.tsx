"client"
import Image from "next/image"
import Link from "next/link"
import TTY3 from "@/img/TTY3.jpg"

const Main = () => {
  return (
	<div className='relative'> 
	  <Image src={TTY3} className='w-fit h-fit' alt="demo"  />
	  <div>
		<Link href="/timeline" className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black p-3 w-48 text-2xl rounded-2xl" passHref>
			Timeline
		</Link>
	  </div>
	</div>
  )
}

export default Main
