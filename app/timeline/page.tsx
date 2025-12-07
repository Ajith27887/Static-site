import Image from 'next/image'
// REMOVE: No need for hardcoded static image imports anymore!
// import TTY2 from "@/img/TTY2.jpg"
// import TTY4 from "@/img/20190414_1350_SingaporeOpen2019_BPMR_2141.jpg"
// import TTY5 from "@/img/20190922_1448_ChinaOpen2019_BPYL8841.jpg"
// import TTY6 from "@/img/20191026_1712_FrenchOpen2019_BPYN2406.jpg"

// Define the shape of a single event (re-used from the API file for consistency)
interface TimelineEvent {
  id: string;
  src: string;
  date: string;
  event: string;
  alt: string;
  content : string
  heading : string
}

async function getTimelineData(): Promise<TimelineEvent[]> {
  const res = await fetch('http://localhost:3000/api/timeline', {
    cache: 'no-store'
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch timeline data');
  }

  return res.json();
}

// The component is now an async Server Component
const Page = async () => {
  const data = await getTimelineData();  
  const events = data.slice(0, 6);
  console.log(data, "data");
  

  return (
	<div className='grid grid-cols-4 gap-5 bg-black p-5 h-dvh'>
      {events.map((event) => (
          <div key={event.id} className='relative group w-full h-11/12'>
             <Image 
                src={event.src} 
                className='w-full h-full object-cover rounded-3xl' 
                alt={event.alt} 
                width={500} 
                height={500}
            />
            <div className='absolute inset-0 bg-black/50 flex p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            	<p className='text-white mt-5 float-left font-bold '>{event.content}</p>
            </div>
          </div>
      ))}
	</div>
  )
}

export default Page