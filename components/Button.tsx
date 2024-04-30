import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
    text: string;
    icon?: React.ReactElement;
}

const Button = ({ text, icon }: ButtonProps) => {
    return (
        <button className="flex items-center text-2xl gap-3 justify-center w-full bg-nintendoRed hover:bg-[rgb(172,_0,_13)] transition-all text-white py-3 rounded-xl font-bold">
            {icon}
            {text}
        </button>
    );
};

export default Button;
