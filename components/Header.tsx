import React from "react";

import BrazilFlag from "@/public/FlagBrazilIconRegionSelect.webp";

import { SiNintendoswitch } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import { BiSolidJoystickButton } from "react-icons/bi";
import { IoChatboxEllipses } from "react-icons/io5";
import { RiQuestionnaireFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";

import { MdPerson } from "react-icons/md";
import NintendoLogo from "@/public/NintendoLogo";
import Image from "next/image";
import MyNintendoStore from "@/public/MyNintendoStore";
import Button from "./Button";
import { FiDownload } from "react-icons/fi";
import ScrollHeader from "./ScrollHeader";

const Header = () => {
    const linkStyle =
        "flex items-center gap-1 hover:text-nintendoRed cursor-pointer";

    return (
        <header className="md:bg-white bg-nintendoRed md:border-2  border-nintendoLightGray text-nintendoGray font-bold">
            <div className="flex justify-between md:border-b-2 border-nintendoLightGray ">
                <div className="flex items-center gap-3">
                    <div className="bg-nintendoRed text-white h-full  flex items-center justify-center px-5">
                        <NintendoLogo />
                    </div>
                    <div className="md:block hidden">SearchBar</div>
                </div>
                <div className="md:hidden flex gap-3 py-3 pr-8 text-white">
                    <MyNintendoStore />
                    <div>
                        <Image {...BrazilFlag} alt="brazil flag" />
                    </div>
                </div>
                <div className="md:flex hidden  gap-6 items-center py-3 pr-8">
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
                <ul className="md:flex hidden gap-6  justify-center py-3">
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
            <div className="md:hidden bg-white fixed bottom-4 w-[95%] z-50 shadow-2xl rounded-full  left-1/2 -translate-x-1/2">
                <ul className="flex text-3xl justify-between px-6 items-center">
                    <li>
                        <GiHamburgerMenu />
                    </li>
                    <li>
                        <FaHeart />
                    </li>
                    <li className="bg-nintendoRed text-white py-4 px-4 -translate-y-4 rounded-full">
                        <FaSearch />
                    </li>
                    <li>
                        <BiSolidJoystickButton />
                    </li>
                    <li>
                        <MdPerson />
                    </li>
                </ul>
            </div>
            <ScrollHeader />
        </header>
    );
};

export default Header;
