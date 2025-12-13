


async function fetchYear() {
    const VERCELURL = "static-site-97tt.vercel.app";
    const host = typeof window === 'undefined' ? `https://${VERCELURL}` : window.location.origin;
	
    try {
		const API_URL = `${host}/api/years`;
        const response = await fetch(API_URL);

        if (!response.ok) {
            // If we get an error status (404, 500 etc.), read the body as text to see the HTML error page
            throw new Error(`Failed to fetch years: ${response.statusText}`);
        }

        // Try to parse the response as JSON
        return await response.json();

    } catch (error) {
        console.error("Error during fetch or JSON parsing:", error);
        // Re-throw the error or return a default value
        throw error; 
    }
}

export default async function YearContainer () {
	const data = await fetchYear(); 
    console.log(data, "Year");
}