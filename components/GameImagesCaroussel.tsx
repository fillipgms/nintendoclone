"use client";
import { getArtworkById } from "@/api/igdb";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const GameImagesCarousel = (game: models.Game) => {
    const carousselStyles = "flex-[0_0_100%]";
    const carousselThumbnailStyles = "aspect-video cursor-pointer object-cover";

    const imageUrl = (imageId: string) => {
        return `https://images.igdb.com/igdb/image/upload/t_original/${imageId}.webp`;
    };

    const thumbnailUrl = (videoId: string) => {
        return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    };

    const [carouselIndex, setCarouselIndex] = useState<number>(1);
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

    const goToSlide = (index: number) => {
        setCarouselIndex(index);
    };

    return (
        <div className="w-full">
            <div className=" aspect-video rounded-2xl overflow-hidden relative">
                <ul
                    className="flex absolute"
                    style={{
                        transform: `translateX(calc(-${
                            100 * (carouselIndex - 1)
                        }%))`,
                        transition: "transform 0.5s ease-in-out", // Adicionando transição suave
                    }}
                >
                    <li className={carousselStyles}>
                        <Image
                            src={imageUrl(imagesAndVideos.cover[0].image_id)}
                            width={1280}
                            height={720}
                            alt={game.name}
                        />
                    </li>
                    <li className={carousselStyles}>
                        <Image
                            src={thumbnailUrl(
                                imagesAndVideos.videos[0][0].video_id
                            )}
                            width={1280}
                            height={720}
                            alt={game.name}
                        />
                    </li>
                    {imagesAndVideos.screenshots.map((screenshot: any) => (
                        <li className={carousselStyles}>
                            <Image
                                src={imageUrl(screenshot[0].image_id)}
                                width={1280}
                                height={720}
                                alt={game.name}
                            />
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-8">
                <ul className=" flex gap-3">
                    <li>
                        <Image
                            src={imageUrl(imagesAndVideos.cover[0].image_id)}
                            width={1280}
                            height={720}
                            alt={game.name}
                            className={carousselThumbnailStyles}
                            onClick={() => {
                                goToSlide(1);
                            }}
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
                            onClick={() => {
                                goToSlide(2);
                            }}
                        />
                    </li>

                    {imagesAndVideos.screenshots.map(
                        (screenshot: any, i: number) => (
                            <li>
                                <Image
                                    src={imageUrl(screenshot[0].image_id)}
                                    width={1280}
                                    height={720}
                                    alt={game.name}
                                    className={carousselThumbnailStyles}
                                    onClick={() => {
                                        goToSlide(i + 2);
                                    }}
                                />
                            </li>
                        )
                    )}
                </ul>
            </div>
            <div className="mt-8">10 ANOS</div>
        </div>
    );
};

export default GameImagesCarousel;
