"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const ExpandableText = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="space-y-6 text-nintendoGray font-light">
                <p>
                    Você herdou a antiga fazenda do seu avô em Stardew Valley.
                    De posse de ferramentas usadas e de um punhado de moedas,
                    você parte em direção à sua nova vida. Você conseguirá
                    aprender a viver da terra e transformar o campo coberto de
                    mato em um próspero lar? Não vai ser fácil. Desde que a
                    Corporação Joja chegou à cidade, as antigas tradições quase
                    desapareceram. O centro comunitário, que já fora o centro de
                    atividade mais animado da cidade, agora está em ruínas. Mas
                    parece que o vale está repleto de oportunidades. Com um
                    pouco de dedicação, você poderá ser responsável por
                    restaurar a grandeza de Stardew Valley!
                </p>

                <p className={cn(isOpen ? "block" : "hidden")}>
                    Agora com Multijogador! Convide 1-3 jogadores para que se
                    juntem a você como “trabalhadores” on-line! Os jogadores
                    podem trabalhar juntos para construir uma Fazenda próspera,
                    compartilhar recursos e criar laços com moradores da cidade
                    ou entre si. Já que quanto mais mãos, melhor, os jogadores
                    terão a opção de aumentar sua margem de lucro na venda de
                    produtos para obter uma experiência mais desafiadora.
                </p>
                <p className={cn(isOpen ? "block" : "hidden")}>
                    Novo Conteúdo para um Jogador – Incluindo o Novo Festival do
                    Mercado de Inverno, mais itens colecionáveis, cenas de
                    personagens adicionadas e até mesmo chapéus para seu cavalo!
                    Além disso, muito mais coisas a serem exploradas...
                </p>
            </div>
            <button
                onClick={() => toggleOpen()}
                className="flex text-nintendoRed items-center font-bold text-lg gap-2 mt-3"
            >
                {isOpen ? (
                    <>
                        <FaMinus />
                        Menos Detalhes
                    </>
                ) : (
                    <>
                        <FaPlus />
                        Saiba mais
                    </>
                )}
            </button>
        </div>
    );
};

export default ExpandableText;
