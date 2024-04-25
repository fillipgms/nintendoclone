"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchSpecificGame } from "@/api/igdb";

interface GameInfo {
    info: any;
    cover: any;
}

const GameImagesCarousel = () => {
    const [game, setGame] = useState<GameInfo | null>(null);

    useEffect(() => {
        const getGame = async () => {
            try {
                const gameData = await fetchSpecificGame("Stardew Valley");
                setGame(gameData);
            } catch (error) {
                console.error("Error fetching game data:", error);
            }
        };

        getGame();
    }, []);

    return (
        <div className="w-full">
            {game && game.cover && (
                <Image
                    src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.png`}
                    alt={game.info.name}
                    width={300}
                    height={300}
                    className="aspect-video w-full object-cover rounded-xl"
                />
            )}
        </div>
    );
};

export default GameImagesCarousel;
