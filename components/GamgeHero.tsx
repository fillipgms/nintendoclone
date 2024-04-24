import Image from "next/image";
import React from "react";

import { FaRegHeart } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import coin from "@/public/my-nintendo-gold-coin.avif";
import GameImagesCaroussel from "./GameImagesCaroussel";

const GamgeHero = () => {
    return (
        <div className="max-w-7xl py-6 px-14 space-y-3 bg-white text-nintendoGray mx-auto shadow-xl rounded-xl translate-y-8">
            <div>
                <ol className="flex capitalize gap-5 text-xs  font-bold ">
                    <li>Loja</li>
                    <li>Jogos</li>
                    <li>Stardew Valley</li>
                </ol>
            </div>
            <div className="flex gap-12">
                <div className=" flex-[1.5_1.5_0]">
                    <GameImagesCaroussel />
                </div>
                <div className="flex-1 space-y-5">
                    <span className="border-l-[3px] pl-2 border-nintendoRed capitalize font-light text-sm">
                        Nintendo Switch
                    </span>
                    <h1 className="text-3xl font-bold">Stardew Valley</h1>
                    <div className="flex justify-between">
                        <h2 className="text-2xl font-bold">R$ 24,99</h2>
                        <div className="text-nintendoRed text-2xl">
                            <FaRegHeart />
                        </div>
                    </div>

                    <div className="flex items-center text-sm gap-3">
                        <Image {...coin} alt="coin" width={20} />
                        <p>
                            Elegível para até{" "}
                            <span className="font-bold">17</span> pontos de ouro
                        </p>
                    </div>

                    <button className="flex items-center text-2xl gap-3 justify-center w-full bg-nintendoRed hover:bg-[rgb(172,_0,_13)] transition-all text-white py-3 rounded-xl font-bold">
                        <FiDownload /> Download direto
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GamgeHero;
