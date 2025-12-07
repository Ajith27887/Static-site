import Image from 'next/image'
import TTY2 from "@/img/TTY2.jpg"
import TTY4 from "@/img/20190414_1350_SingaporeOpen2019_BPMR_2141.jpg"
import TTY5 from "@/img/20190922_1448_ChinaOpen2019_BPYL8841.jpg"
import TTY6 from "@/img/20191026_1712_FrenchOpen2019_BPYN2406.jpg"


const page = () => {
  return (
	<div className='grid grid-cols-4 gap-0 bg-black p-5 h-dvh'>
	  	 <div className='relative group w-full h-11/12'>
			<Image src={TTY2} className='w-full h-full object-cover' alt="demo"  />
			<div className='absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
				<p className='text-white font-bold text-lg'>View</p>
			</div>
		 </div>
		 <div className='relative group w-full h-11/12'>
		 	<Image src={TTY5} className='w-full h-full object-cover' alt='demo' />
			<div className='absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
				<p className='text-white font-bold text-lg'>View</p>
			</div>
		 </div>
 		<div className='relative group w-full h-11/12'>
			<Image src={TTY6} className='object-cover w-full h-full ' alt='demo' />
			<div className='absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
				<p className='text-white font-bold text-lg'>View</p>
			</div>
		</div>
		<div className='relative group w-full h-11/12'>
			<Image alt='demo' src={TTY4} className='w-full h-full object-cover' />
			<div className='absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
				<p className='text-white font-bold text-lg'>View</p>
			</div>
		</div>
	</div>
  )
}

export default page
