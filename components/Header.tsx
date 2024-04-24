import React from "react";

import BrazilFlag from "@/public/FlagBrazilIconRegionSelect.webp";

import { SiNintendoswitch } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import { BiSolidJoystickButton } from "react-icons/bi";
import { IoChatboxEllipses } from "react-icons/io5";
import { RiQuestionnaireFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa6";

import { MdPerson } from "react-icons/md";
import NintendoLogo from "@/public/NintendoLogo";
import Image from "next/image";

const Header = () => {
    const linkStyle = "flex items-center gap-1";

    return (
        <header className="bg-white border-2 text-sm border-nintendoLightGray text-nintendoGray font-bold">
            <div className="flex justify-between border-b-2 border-nintendoLightGray ">
                <div className="flex items-center gap-3">
                    <div className="bg-nintendoRed text-white h-full  flex items-center justify-center px-5">
                        <NintendoLogo />
                    </div>
                    <div>SearchBar</div>
                </div>
                <div className="flex gap-6 items-center py-3 pr-8">
                    <div className={linkStyle}>
                        <RiQuestionnaireFill />
                        Assistência
                    </div>
                    <div className={linkStyle}>
                        <FaHeart />
                        Lista de desejos
                    </div>
                    <div className={linkStyle}>
                        <MdPerson />
                        Iniciar sessão / Criar uma conta
                    </div>
                    <div>
                        <Image {...BrazilFlag} alt="brazil flag" />
                    </div>
                </div>
            </div>
            <div>
                <ul className="flex gap-6 justify-center py-3">
                    <li className={linkStyle}>
                        <BiSolidJoystickButton />
                        Jogos
                        <IoIosArrowDown />
                    </li>
                    <li className={linkStyle}>
                        <SiNintendoswitch />
                        Nintendo Switch
                        <IoIosArrowDown />
                    </li>
                    <li className={linkStyle}>
                        <IoChatboxEllipses />
                        Novidades e eventos
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
