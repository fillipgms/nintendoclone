"use client";
import { useEffect, useState } from "react";
import GameHero from "@/components/GameHero";
import { getSpecificGame } from "@/api/igdb";

export default function Home() {
    const [game, setGame] = useState<models.Game | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const gameDataArray = await getSpecificGame("Stardew Valley");
                if (gameDataArray && gameDataArray.length > 0) {
                    const gameData = gameDataArray[0];
                    setGame(gameData);
                }
            } catch (error) {
                console.error("Error fetching game data:", error);
            }
        };

        fetchData();
    }, []);

    if (!game) return <p>loading...</p>;

    return (
        <main>
            <section className="bg-nintendoLightBlue relative">
                <GameHero {...game} />
            </section>
        </main>
    );
}
