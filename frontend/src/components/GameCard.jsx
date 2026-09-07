function GameCard({ game }) {
    return (
        <div>
            <img
                src={game.background_image}
                alt={game.name}
                width="300"
            />

            <h2>{game.name}</h2>

            <p>Rating: {game.rating}</p>

            <p>Released: {game.released}</p>
        </div>
    );
}

export default GameCard;