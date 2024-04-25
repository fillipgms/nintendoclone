import GameHero from "@/components/GameHero";

export default async function Home() {
    return (
        <main>
            <section className="bg-nintendoLightBlue relative">
                <GameHero />
            </section>
        </main>
    );
}
