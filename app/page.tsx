import GameHero from "@/components/GameHero";
import { getSpecificGame } from "@/api/igdb";

export default async function Home() {
    const game = await getSpecificGame("Stardew Valley");

    return (
        <main>
            <section className="bg-nintendoLightBlue relative">
                <GameHero game={game[0]} />
            </section>
            <section className="mt-28 px-52">
                <h2 className=" text-xl font-bold text-nintendoGray">
                    O modo Multijogador chegou ao vale!
                </h2>
            </section>
        </main>
    );
}
