"use client";
import React, { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import Button from "./Button";
import { cn } from "@/lib/utils";

const ScrollHeader = () => {
    const [isAppearing, setIsAppearing] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsAppearing(true);
            } else {
                setIsAppearing(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={cn(
                "fixed md:w-full flex md:rounded-none rounded-t-xl md:justify-around transition-all max-md:px-5 max-md:pb-8 items-center py-3 shadow-md md:top-0  max-md:bottom-16 w-11/12 md:translate-x-0 md:left-0 left-1/2 -translate-x-1/2 bg-nintendoLightGray z-20",
                isAppearing
                    ? ""
                    : "md:-translate-y-full max-md:translate-y-[calc(100%_+_5rem)]"
            )}
        >
            <h2 className="font-bold text-lg hidden md:block">
                Stardew Valley
            </h2>
            <div className="flex items-center gap-3  md:justify-normal justify-between md:w-fit w-full ">
                <p className=" text-xs flex items-center gap-2 md:flex-row flex-col">
                    Versão digital <span className="text-base">R$ 24,99</span>
                </p>
                <Button
                    text="Download direto"
                    icon={<FiDownload />}
                    className=" !text-base !py-2 !rounded-full px-6"
                />
            </div>
        </div>
    );
};

export default ScrollHeader;
