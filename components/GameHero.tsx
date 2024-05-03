import Image from "next/image";
import React, { ReactElement } from "react";

import { FaRegHeart } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import coin from "@/public/my-nintendo-gold-coin.avif";
import GameImagesCaroussel from "./GameImagesCaroussel";
import ClassificacaoIndicativa from "./ClassificacaoIndicativa";
import Button from "./Button";

const GameHero = ({ game }: { game: models.Game }) => {
    return (
        <div className="md:max-w-7xl w-full py-6 md:px-14 px-4 space-y-3 bg-white text-nintendoGray mx-auto shadow-xl rounded-xl md:translate-y-8">
            <div>
                <ol className="flex capitalize gap-5 text-xs  font-bold ">
                    <li>Loja</li>
                    <li>Jogos</li>
                    <li>Stardew Valley</li>
                </ol>
            </div>
            <div className="flex md:flex-row flex-col gap-12">
                <div className=" flex-[1.5_1.5_0]">
                    <GameImagesCaroussel {...game} />
                    <ClassificacaoIndicativa className=" max-md:!hidden" />
                </div>
                <div className="flex-1 space-y-5">
                    <span className="border-l-[3px] pl-2 border-nintendoRed capitalize font-light text-sm">
                        Nintendo Switch
                    </span>
                    <h1 className="text-3xl font-bold">{game.name}</h1>
                    <div className="flex justify-between">
                        <h2 className="text-2xl font-bold">R$ 24,99</h2>
                        <div className="text-nintendoRed text-2xl">
                            <FaRegHeart />
                        </div>
                    </div>

                    <div className="flex items-center text-sm gap-3">
                        <Image {...coin} alt="coin" width={20} height={20} />
                        <p>
                            Elegível para até{" "}
                            <span className="font-bold">17</span> pontos de ouro
                        </p>
                    </div>

                    <Button
                        text="Download direto"
                        icon={<FiDownload />}
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default GameHero;
