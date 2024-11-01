import { Button, Text, Img, Input, TextArea, Heading } from "../../components";
import React from "react";

export default function GameInformationSection() {
    return (
        <div className="flex flex-col items-center rounded-lg border border-solid border-gray-900_13 bg-gray-900_10 py-[22px] sm:py-5">
            <div className="container-xs flex flex-col gap-6 md:px-5">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-start">
                        <Heading as="h1" className="text-[24px] font-semibold text-gray-100 md:text-[22px]">
                            Informações do jogo
                        </Heading>
                        <Text as="p" className="text-[16px] font-normal text-gray-300">
                            Insira as informações do jogo para que possa ser enviado para a plataforma.
                        </Text>
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <Text as="p" className="text-[16px] font-semibold text-black">
                            Nome do Jogo
                        </Text>
                        <Input
                            name="Game Name Field"
                            placeholder=""
                            className="self-stretch rounded-lg border border-gray-900_12 px-4 bg-gray-800 text-black"
                        />
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <Text as="p" className="text-[16px] font-semibold text-black">
                            Descrição
                        </Text>
                        <TextArea
                            shape="round"
                            name="Description Field"
                            placeholder=""
                            className="self-stretch rounded-lg border border-gray-900_13 px-3.5 bg-gray-800"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    {['Steam', 'Epic Games', 'Nuuvem'].map((platform) => (
                        <div key={platform} className="mr-[26px] md:mr-0">
                            <div className="flex items-center gap-3 py-1.5">
                                <div className="flex rounded border border-solid border-black-900 bg-blue_gray-900_01 px-2 shadow-xs">
                                    <Img src="images/img_check.svg" alt={`${platform} Checkmark`} className="h-[16px] w-[16px]" />
                                </div>
                                <Text as="p" className="text-[16px] font-semibold text-black">
                                    {platform}
                                </Text>
                            </div>
                            <Input
                                shape="round"
                                name={`${platform} Link Field`}
                                placeholder="link do jogo"
                                suffix={
                                    <Img
                                        src="images/img_arrowright.png"
                                        alt="Arrow Right"
                                        className="my-1.5 h-[10px] w-[4px] object-cover"
                                    />
                                }
                                className="ml-7 gap-4 rounded-[20px] border border-gray-900_12 bg-gray-800 text-white pl-4"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex flex-col items-start">
                    <div className="flex items-center gap-3 self-stretch">
                        <div className="flex flex-col rounded bg-blue_gray-900_01">
                            <Img src="images/img_check.svg" alt="Terms Checkmark" className="h-[16px] rounded" />
                        </div>
                        <Text as="p" className="text-[16px] font-normal text-gray-100">
                            Eu declaro que li e aceito os termos
                        </Text>
                    </div>
                    <Text as="p" className="ml-7 text-[16px] font-normal text-gray-600 underline md:ml-0">
                        Leia nossos Termos aqui
                    </Text>
                </div>
                <Button shape="round" className="self-stretch rounded-lg bg-blue-600 text-white bg-blue-700 border border-blue_gray-900 px-[33px] sm:px-5">
                    Adicionar
                </Button>
            </div>
        </div>
    );
}
