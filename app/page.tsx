import GameHero from "@/components/GameHero";
import { getSpecificGame } from "@/api/igdb";
import Image from "next/image";
import hero from "@/public/hero.avif";
import Button from "@/components/Button";
import ExpandableText from "@/components/ExpandableText";
import ClassificacaoIndicativa from "@/components/ClassificacaoIndicativa";
import TvIcon from "@/public/TvIcon";
import SemiPortableIcon from "@/public/SemiPortableIcon";
import PortableIcon from "@/public/PortableIcon";

export default async function Home() {
    const game = await getSpecificGame("Stardew Valley");
    const consoleStyles =
        "bg-nintendoGray text-white p-4 w-full flex items-center justify-center rounded-xl";

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
            <section className="xl:px-52 md:px-14 px-4 flex md:flex-row flex-col *:bg-nintendoLightGray gap-5 *:flex-1 *:py-8 *:px-6 *:flex *:items-center *:justify-center *:rounded-xl *:flex-col *:gap-5">
                <div>
                    <h3 className="font-bold">Classificação Indicativa</h3>
                    <div className="bg-white w-fit py-4 px-8 rounded-xl shadow-xl">
                        <ClassificacaoIndicativa />
                    </div>
                </div>
                <div>
                    <h3 className="font-bold">Modos de jogo compatíveis</h3>
                    <div className=" text-center text-nintendoGray *:space-y-4 font-bold w-full *:flex-1 flex gap-6">
                        <div>
                            <div className={consoleStyles}>
                                <TvIcon />
                            </div>
                            <h4>TV</h4>
                        </div>
                        <div>
                            <div className={consoleStyles}>
                                <SemiPortableIcon />
                            </div>
                            <h4>Semiportátil</h4>
                        </div>
                        <div>
                            <div className={consoleStyles}>
                                <PortableIcon />
                            </div>
                            <h4>Portátil</h4>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
