import GameHero from "@/components/GameHero";
import { getSpecificGame } from "@/api/igdb";
import Image from "next/image";
import hero from "@/public/hero.avif";
import Button from "@/components/Button";
import ExpandableText from "@/components/ExpandableText";

export default async function Home() {
    const game = await getSpecificGame("Stardew Valley");

    return (
        <main>
            <section className="bg-nintendoLightBlue relative">
                <GameHero game={game[0]} />
            </section>
            <section className="md:py-28 py-20 xl:px-52 md:px-14 px-4 flex flex-col md:flex-row md:*:flex-1 gap-10">
                <div className="space-y-3">
                    <h2 className=" text-xl font-bold text-nintendoGray">
                        O modo Multijogador chegou ao vale!
                    </h2>
                    <ExpandableText />
                    <Button
                        text="explore o site oficial deste jogo"
                        className="px-7 !text-lg capitalize !py-3"
                    />
                </div>
                <div>
                    <div>
                        <Image
                            {...hero}
                            alt="stardew valley"
                            className="rounded-xl"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
