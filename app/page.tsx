import GameHero from "@/components/GameHero";
import { getSpecificGame } from "@/api/igdb";

export default async function Home() {
    const game = await getSpecificGame("Stardew Valley");

    return (
        <main>
            <section className="bg-nintendoLightBlue relative">
                <GameHero game={game[0]} />
            </section>
        </main>
    );
}
