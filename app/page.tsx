import GameHero from "@/components/GameHero";
import { getSpecificGame } from "@/api/igdb";

export default async function Home() {
    const game = await getSpecificGame("Stardew Valley");

    return (
        <main>
            <section className="bg-nintendoLightBlue relative">
                <GameHero game={game[0]} />
            </section>
            <section className="mt-28 xl:px-52 md:px-14 px-4 flex md:*:flex-1">
                <div className="space-y-3">
                    <h2 className=" text-xl font-bold text-nintendoGray">
                        O modo Multijogador chegou ao vale!
                    </h2>
                    <p>
                        Você herdou a antiga fazenda do seu avô em Stardew
                        Valley. De posse de ferramentas usadas e de um punhado
                        de moedas, você parte em direção à sua nova vida. Você
                        conseguirá aprender a viver da terra e transformar o
                        campo coberto de mato em um próspero lar? Não vai ser
                        fácil. Desde que a Corporação Joja chegou à cidade, as
                        antigas tradições quase desapareceram. O centro
                        comunitário, que já fora o centro de atividade mais
                        animado da cidade, agora está em ruínas. Mas parece que
                        o vale está repleto de oportunidades. Com um pouco de
                        dedicação, você poderá ser responsável por restaurar a
                        grandeza de Stardew Valley!
                    </p>
                </div>
                <div></div>
            </section>
        </main>
    );
}
