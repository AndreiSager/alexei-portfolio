type Game = {
    id: number
    background_image: string 
    rating: number 
    name: string
}

const getGames = async (): Promise<Game[]> => {
    const res = await fetch(
        'https:https://api.rawg.io/api/games?key${process.env.RAWG}'
        )
    if(!res.ok) {
        throw new Error('failed to fetch')
    }
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const data = await res.json()
    return data.results
}

async function Home() {
    const games = await getGames()
    return (
        <main className="m-24 rounded-md grid grid-cols-4 gap-12">
            {games.map((game) => (
                <div className="col-span-4 md:col-span-2" key={game.id}>
                    <h1>{game.name}</h1>
                    <p>{game.rating}</p>
                    <div className='aspect-video relative'>
                        <img
                            src={game.background_image}
                            className="object-cover rounded-md"
                            alt={game.name}
                        />
                    </div>
                </div>
            ))}
        </main>
    )
}

export default Home;