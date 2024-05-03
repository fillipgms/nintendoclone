import { cn } from "@/lib/utils";
import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
    text: string;
    icon?: React.ReactElement;
    className?: string;
}

const Button = ({ text, icon, className }: ButtonProps) => {
    return (
        <button
            className={cn(
                className,
                "hover:animate-button-hover flex items-center text-2xl gap-3 justify-center bg-nintendoRed hover:bg-[rgb(172,_0,_13)] transition-all text-white py-4 rounded-xl font-bold"
            )}
        >
            {icon}
            {text}
        </button>
    );
};

export default Button;
