import { getArtworkById } from "@/api/igdb";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const GameImagesCarousel = (game: models.Game) => {
    const carousselThumbnailStyles = "aspect-video object-cover";
    const [imagesAndVideos, setImagesAndVideos] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const artworkDataArray = await getArtworkById(
                    game.cover,
                    game.videos,
                    game.screenshots
                );
                setImagesAndVideos(artworkDataArray);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [game.cover, game.videos, game.screenshots]);

    if (!imagesAndVideos) return <p>carrengando...</p>;
    console.log(imagesAndVideos);

    const imageUrl = (imageId: string) => {
        return `https://images.igdb.com/igdb/image/upload/t_original/${imageId}.webp`;
    };

    const thumbnailUrl = (videoId: string) => {
        return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    };

    return (
        <div className="w-full">
            <div className="mt-8">
                <ul className=" flex gap-3">
                    <li>
                        <Image
                            src={imageUrl(imagesAndVideos.cover[0].image_id)}
                            width={1280}
                            height={720}
                            alt={game.name}
                            className={carousselThumbnailStyles}
                        />
                    </li>
                    <li>
                        <Image
                            src={thumbnailUrl(
                                imagesAndVideos.videos[0][0].video_id
                            )}
                            width={1280}
                            height={720}
                            alt={game.name}
                            className={carousselThumbnailStyles}
                        />
                    </li>

                    {imagesAndVideos.screenshots.map((screenshot) => (
                        <li>
                            <Image
                                src={imageUrl(screenshot[0].image_id)}
                                width={1280}
                                height={720}
                                alt={game.name}
                                className={carousselThumbnailStyles}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default GameImagesCarousel;
