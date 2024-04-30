import Classificacao from "@/public/classificacao";
import React from "react";

const ClassificacaoIndicativa = () => {
    return (
        <a
            href="https://www.gov.br/mj/pt-br/assuntos/seus-direitos/classificacao-1"
            target="_blank"
            className="hidden md:flex items-center text-xs gap-6"
        >
            <Classificacao />
            <div className="flex flex-col">
                <p className="pb-1">Violência, Drogas Lícitas</p>
                <p className="border-t border-black pt-1">
                    Interação de usuários
                </p>
            </div>
        </a>
    );
};

export default ClassificacaoIndicativa;
