export default async function Years ({ params } : {
	params : Promise<{years : string; }>
}) {

	const { years } = await params;
	return (
		<h1>Timiline year {years} </h1>
	)
}