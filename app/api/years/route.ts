import { NextResponse } from "next/server"

export interface TimelineEntry {
  year: number;
  event: string;
  detail: string;
}

export interface YearsData {
	player : string;
	country : string;
	category : string;
	timeline: TimelineEntry[]
}

const Year: YearsData = {
	  "player": "Tai Tzu-ying (戴資穎)",
	  "country": "Chinese Taipei (Taiwan)",
	  "category": "Women's Singles",
	  "timeline": [
	    {
	      "year": 2007,
	      "event": "International Debut",
	      "detail": "Played her first international tournament at the Vietnam International."
	    },
	    {
	      "year": 2009,
	      "event": "First Major Junior Medal & Senior Final",
	      "detail": "Won a silver medal at the Asian Junior Championships. Became runner-up at the Vietnam Open (Grand Prix tournament) at age 15."
	    },
	    {
	      "year": 2010,
	      "event": "First Superseries Final",
	      "detail": "Reached her first Superseries final at the Singapore Open on her 16th birthday, starting from the qualifying rounds."
	    },
	    {
	      "year": 2011,
	      "event": "First International Title",
	      "detail": "Won her first international title at the U.S. Open (Grand Prix Gold) at age 17."
	    },
	    {
	      "year": 2012,
	      "event": "Olympic Debut & First Superseries Title",
	      "detail": "Competed in her first Olympic Games (London 2012). Won her first Superseries title at the Japan Open, becoming the youngest player at the time to win a Superseries title."
	    },
	    {
	      "year": 2014,
	      "event": "First Major Games & Tour Finals Gold",
	      "detail": "Won Taiwan's first badminton medal at the Asian Games (Bronze). Won her first BWF Superseries Finals title in Dubai (Taiwan's first title in this event)."
	    },
	    {
	      "year": 2016,
	      "event": "World Number One",
	      "detail": "Won the Indonesia Open and Hong Kong Open, earning enough points to become the World Number One for the first time on December 1. Also won her second Superseries Finals title."
	    },
	    {
	      "year": 2017,
	      "event": "Asian Champion & All England Win",
	      "detail": "Won her first All England Open title and her first Asian Championships gold medal. Achieved a 27-match winning streak."
	    },
	    {
	      "year": 2018,
	      "event": "Asian Games Gold",
	      "detail": "Won the gold medal at the Asian Games (Jakarta), a first for a Taiwanese athlete in women's singles badminton."
	    },
	    {
	      "year": 2021,
	      "event": "Olympic Silver & World Championship Silver",
	      "detail": "Won the Silver medal at the Tokyo 2020 Olympics (held in 2021), becoming the first woman from Chinese Taipei to win an Olympic badminton medal. Also won Silver at the BWF World Championships."
	    },
	    {
	      "year": 2023,
	      "event": "Fourth World Tour Finals Title",
	      "detail": "Won her fourth BWF World Tour Finals title, creating history as the first woman to achieve this feat."
	    },
	    {
	      "year": 2025,
	      "event": "Retirement Announcement",
	      "detail": "Announced her retirement from the sport in November, after a glittering 16-year career, citing injury concerns. She holds the record for the longest total time as BWF World No. 1 (214 weeks)."
	    }
	  ]
}


export async function GET() {
	return NextResponse.json(Year)
} 
