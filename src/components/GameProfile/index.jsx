import { Text } from "../Text";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { Img } from "../Img";
import React from "react";
import PropTypes from "prop-types"; // Certifique-se de importar PropTypes

export default function GameProfile({
    gameTitle = "Nome do Jogo",
    gameLink = "Link do Jogo",
    faqContent = "Perguntas frequentes serão respondidas mediante envio!",
    ...props
}) {
    return (
        <div {...props} className={`${props.className} flex items-center py-[62px] md:py-5 bg-gray-900`}>
            <div className="flex w-full">
                <div className="container-xs flex px-10 md:flex-col md:px-5">
                    <Img src="images/img_image.png" alt="Game Image" className="h-[256px] w-[46%] object-contain md:w-full"/>
                    <div className="flex flex-1 flex-col gap-6 md:self-stretch">
                        <div>
                            <div className="mb-[58px] flex pl-16 pr-14 md:px-5">
                                <Heading
                                    as="h4"
                                    className="text-[24px] font-semibold tracking-[-0.48px] text-gray-100 md:text-[22px]"
                                >
                                    {gameTitle}
                                </Heading>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-6">
                            <Button
                                color="deep_purple_500" // Corrigido de "collor" para "color"
                                shape="round"
                                className="min-w-[504px] rounded-lg border border-deep_purple-800 px-[33px] sm:px-5"
                            >
                                {gameLink}
                            </Button>
                            <div className="flex w-[88%] justify-center rounded-lg border border-solid border-blue_gray-100 bg-gray-900 p-3.5 md:w-full">
                                <Text as="p" className="w-full text-[16px] font-normal leading-[140%] text-gray-100">
                                    {faqContent}
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Adicionando PropTypes para validação das props
GameProfile.propTypes = {
    gameTitle: PropTypes.string,
    gameLink: PropTypes.string,
    faqContent: PropTypes.string,
    className: PropTypes.string, // Caso você queira passar uma classe adicional
};
