import React from "react";
import Image from "next/image";
import stardewValley from "@/public/stardewvalley.png";

const GameImagesCaroussel = () => {
    return (
        <div className="w-full">
            <Image
                {...stardewValley}
                alt="stardew valley"
                className="aspect-video object-cover rounded-xl"
            />
        </div>
    );
};

export default GameImagesCaroussel;
