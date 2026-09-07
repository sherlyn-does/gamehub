import { useEffect, useState } from "react";
import GameCard from "./components/GameCard";

function App() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/games")
            .then((response) => response.json())
            .then((data) => {
                setGames(data.results);
            })
            .catch((error) => {
                console.error("Error fetching games:", error);
            });
    }, []);

    return (
        <div>
            <h1>GameHub 🎮</h1>

            {games.map((game) => (
                <GameCard
                    key={game.id}
                    game={game}
                />
            ))}
        </div>
    );
}

export default App;