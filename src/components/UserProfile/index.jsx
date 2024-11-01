import { Text } from "../Text";
import { Heading } from "../Heading";
import { Img } from "../Img";
import React from "react";

export default function UserProfile({
    userTitle = "CS2",
    userDescription = "Counter-Strike 2 - Um jogo de tiro em primeira pessoa altamente competitivo.",
    userLink = "https://www.counter-strike.net/",
    userImage = "images/img_image.png", // Usar uma imagem padrão, caso não seja fornecida
    ...props
}) {
    return (
        <div
            {...props}
            className={`${props.className} flex flex-col items-center justify-center w-full gap-5 p-[22px] sm:p-5 border-gray-900_12 border border-solid bg-gray-900_10 rounded-lg`}
        >
            <Img src={userImage} alt="Card Image" className="h-[160px] w-full object-cover" />
            <div className="flex flex-col items-start gap-1.5 self-stretch">
                <Heading as="h4" className="text-[24px] font-semibold tracking-[-0.48px] text-gray-100_01">
                    {userTitle}
                </Heading>
                <Text as="p" className="w-full text-[16px] font-normal leading-[140%] text-gray-400">
                    {userDescription}
                </Text>
                <a href={userLink} target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-500 hover:underline">
                    Link do jogo
                </a>
            </div>
        </div>
    );
}
