import Image from "next/image";
import React from "react";
import stardewValley from "@/public/stardewvalley.png";
import { FaRegHeart } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";

const GamgeHero = () => {
    return (
        <div className="max-w-6xl py-6 px-14 space-y-3 bg-white text-nintendoGray mx-auto shadow-xl rounded-xl translate-y-8">
            <div>
                <ol className="flex capitalize gap-5 text-xs  font-bold ">
                    <li>Loja</li>
                    <li>Jogos</li>
                    <li>Stardew Valley</li>
                </ol>
            </div>
            <div className="flex gap-14">
                <div className=" flex-[1.5_1.5_0]">
                    <Image
                        {...stardewValley}
                        alt="stardew valley"
                        className="aspect-video object-cover rounded-xl"
                    />
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

                    <button className="bg-nintendoRed flex gap-3 justify-center items-center font-bold rounded-xl w-full py-3 text-2xl text-white hover:scale-105 transition-all">
                        <FiDownload />
                        Download direto
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GamgeHero;
