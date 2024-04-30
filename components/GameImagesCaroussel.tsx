"use client";
import { getArtworkById } from "@/api/igdb";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlinePlayCircle } from "react-icons/md";
import YouTube from "react-youtube";

const GameImagesCarousel = (game: models.Game) => {
    const arrowStyles = "absolute h-full z-10 text-white text-3xl px-4";
    const carousselStyles = "flex-[0_0_100%]";
    const carousselThumbnailStyles =
        "aspect-video min-w-16 rounded-xl cursor-pointer object-center overflow-hidden relative after:h-1 after:w-full after:bg-nintendoRed after:block after:absolute hover:after:bottom-0 after:transition-all after:duration-300 after:-bottom-10 before:block before:w-full before:h-full before:bg-white/25 hover:before:bg-transparent before:absolute";

    const activeSlide =
        "after:h-1 after:w-full after:bg-nintendoRed after:block after:absolute after:bottom-0 before:bg-transparent";

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
            <div className="aspect-video rounded-2xl overflow-hidden relative">
                <button
                    className={cn(arrowStyles, "left-0")}
                    onClick={() => {
                        goToSlide(
                            carouselIndex - 1 < 1 ? 7 : carouselIndex - 1
                        );
                    }}
                >
                    <IoIosArrowBack />
                </button>
                <ul
                    className="flex absolute"
                    style={{
                        transform: `translateX(calc(-${
                            100 * (carouselIndex - 1)
                        }%))`,
                        transition: "transform 0.5s ease-in-out",
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
                        <YouTube
                            videoId={imagesAndVideos.videos[0][0].video_id}
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
                <button
                    className={cn(arrowStyles, "right-0")}
                    onClick={() => {
                        goToSlide(
                            carouselIndex + 1 > 7 ? 1 : carouselIndex + 1
                        );
                    }}
                >
                    <IoIosArrowForward />
                </button>
            </div>

            <div className="mt-8">
                <ul className="flex gap-3 overflow-x-scroll">
                    <li
                        className={cn(
                            carousselThumbnailStyles,
                            carouselIndex === 1 ? activeSlide : ""
                        )}
                        onClick={() => {
                            goToSlide(1);
                        }}
                    >
                        <Image
                            src={imageUrl(imagesAndVideos.cover[0].image_id)}
                            width={1280}
                            height={720}
                            alt={game.name}
                        />
                    </li>
                    <li
                        className={cn(
                            carousselThumbnailStyles,
                            carouselIndex === 2 ? activeSlide : "",
                            "relative"
                        )}
                        onClick={() => {
                            goToSlide(2);
                        }}
                    >
                        <span className="absolute text-4xl text-white shadow-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <MdOutlinePlayCircle />
                        </span>

                        <Image
                            src={thumbnailUrl(
                                imagesAndVideos.videos[0][0].video_id
                            )}
                            width={1280}
                            height={720}
                            alt={game.name}
                        />
                    </li>

                    {imagesAndVideos.screenshots.map(
                        (screenshot: any, i: number) => (
                            <li
                                className={cn(
                                    carousselThumbnailStyles,
                                    carouselIndex === i + 3 ? activeSlide : ""
                                )}
                                onClick={() => {
                                    goToSlide(i + 3);
                                }}
                            >
                                <Image
                                    src={imageUrl(screenshot[0].image_id)}
                                    width={1280}
                                    height={720}
                                    alt={game.name}
                                />
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
};

export default GameImagesCarousel;
