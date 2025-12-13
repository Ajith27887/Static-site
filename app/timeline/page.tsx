import Image from 'next/image'
import YearContainer from '../components/YearContainer';
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

	const VERCELURL = "static-site-97tt.vercel.app"

	const host = VERCELURL ? `https://${VERCELURL}` : 'http://localhost:3000';
  
  	const API_URL = `${host}/api/timeline`;


  const res = await fetch(API_URL, {
    cache: 'no-store'
  });



  if (!res.ok) {
    throw new Error('Failed to fetch timeline data');
  }

  return res.json();
}

const Page = async () => {
  const data = await getTimelineData();  
  const events = data.slice(0, 6);  

  return (
	<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 bg-black p-5 min-h-screen'>
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
	  <YearContainer/>
	</div>
  )
}

export default Page