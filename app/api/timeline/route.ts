import { NextResponse } from "next/server";
export interface TimelineEvent {
  id: string;
  src: string;
  date: string;
  event: string;
  alt: string;
  content : string;
  heading : string
}

const timelineData: TimelineEvent[] = [
  {
    id: "TTY1",
    src: "/img/TTY2.jpg", 
    date: "2022-07-24",
    event: "Taipei Open 2022",
    alt: "Tai Tzu Ying smiling at Taipei Open",
	heading : "Intro",
	content : "Influenced by her father, a firefighter and director of the local badminton committee.Started playing in elementary school.Became the youngest-ever player to compete in Taiwan's first division tournaments.First international event: 2007 Vietnam International Reached her first Superseries final at the 2010 Singapore Open on her 16th birthday (lost to Saina Nehwal).",
  },
  {
    id: "TTY2",
    src: "/img/20190922_1448_ChinaOpen2019_BPYL8841.jpg", 
    date: "2019-09-22",
    event: "China Open 2019",
    alt: "Tai Tzu Ying celebrating at China Open",
	heading : "",
	content : "Influenced by her father, a firefighter and director of the local badminton committee.Started playing in elementary school.Became the youngest-ever player to compete in Taiwan's first division tournaments.First international event: 2007 Vietnam International Reached her first Superseries final at the 2010 Singapore Open on her 16th birthday (lost to Saina Nehwal).",

  },
  {
    id: "TTY3",
	src: "/img/433360434_316747551417457_6529359403919003594_n.jpg", 
    date: "2019-10-26",
    event: "French Open 2019",
    alt: "Tai Tzu Ying hitting a shot at French Open",
	heading : "",
	content : "Influenced by her father, a firefighter and director of the local badminton committee.Started playing in elementary school.Became the youngest-ever player to compete in Taiwan's first division tournaments.First international event: 2007 Vietnam International Reached her first Superseries final at the 2010 Singapore Open on her 16th birthday (lost to Saina Nehwal).",

  },
  {
    id: "TTY4",
    src: "/img/20190414_1350_SingaporeOpen2019_BPMR_2141.jpg", 
    date: "2019-04-14",
    event: "Singapore Open 2019",
    alt: "Tai Tzu Ying in action at Singapore Open",
	heading : "",
	content : "Influenced by her father, a firefighter and director of the local badminton committee.Started playing in elementary school.Became the youngest-ever player to compete in Taiwan's first division tournaments.First international event: 2007 Vietnam International Reached her first Superseries final at the 2010 Singapore Open on her 16th birthday (lost to Saina Nehwal).",


  },
    {
    id: "TTY5",
    src: "/img/433382265_1386991928670009_1505019636007372111_n.jpg", 
    date: "2019-04-14",
    event: "Singapore Open 2019",
    alt: "Tai Tzu Ying in action at Singapore Open",
	heading : "",
	content : "Influenced by her father, a firefighter and director of the local badminton committee.Started playing in elementary school.Became the youngest-ever player to compete in Taiwan's first division tournaments.First international event: 2007 Vietnam International Reached her first Superseries final at the 2010 Singapore Open on her 16th birthday (lost to Saina Nehwal).",

  },
    {
    id: "TTY6",
    src: "/img/20191026_1712_FrenchOpen2019_BPYN2406.jpg", 
    date: "2019-04-14",
    event: "Singapore Open 2019",
    alt: "Tai Tzu Ying in action at Singapore Open",
	heading : "",
	content : "Influenced by her father, a firefighter and director of the local badminton committee.Started playing in elementary school.Became the youngest-ever player to compete in Taiwan's first division tournaments.First international event: 2007 Vietnam International Reached her first Superseries final at the 2010 Singapore Open on her 16th birthday (lost to Saina Nehwal).",

  },
];

/**
 * Route Handler for GET /api/timeline
 * This function handles GET requests and returns the timeline data.
 */
export async function GET() {
  return NextResponse.json(timelineData);
}