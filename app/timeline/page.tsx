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
}

// Function to fetch data from the new API endpoint
async function getTimelineData(): Promise<TimelineEvent[]> {
  // NOTE: Next.js treats `fetch` inside Server Components intelligently.
  // It automatically caches the result and dedupes requests for performance.
  const res = await fetch('http://localhost:3000/api/timeline', {
    // Setting `cache: 'force-cache'` explicitly tells Next.js to cache 
    // the data aggressively, enabling Static Site Generation (SSG) on the server.
    cache: 'force-cache'
  });
  
  if (!res.ok) {
    // Trigger Next.js error boundary if the API call fails
    throw new Error('Failed to fetch timeline data');
  }

  // The Route Handler returns JSON, so we parse it here.
  return res.json();
}

// The component is now an async Server Component
const Page = async () => {
  // Fetch the data on the server before rendering
  const data = await getTimelineData();
  
  // We'll use the first 4 events for the 4-column grid
  const events = data.slice(0, 4);
  console.log(data, "data");
  

  return (
	<div className='grid grid-cols-4 gap-0 bg-black p-5 h-dvh'>
      {/* Map through the fetched data instead of hardcoding divs */}
      {events.map((event) => (
          <div key={event.id} className='relative group w-full h-11/12'>
             {/* The src is now a string path returned from the API */}
             <Image 
                src={event.src} 
                className='w-full h-full object-cover' 
                alt={event.alt} 
                // Add explicit width/height since it's now a string src
                width={500} 
                height={700}
            />
            <div className='absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <p className='text-white font-bold text-lg'>View</p>
            </div>
          </div>
      ))}
	</div>
  )
}

export default Page