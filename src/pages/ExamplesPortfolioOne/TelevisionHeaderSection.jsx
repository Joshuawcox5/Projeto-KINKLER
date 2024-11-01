import { Text, Img } from "../../components";
import React from "react";
import { useNavigate } from "react-router-dom"; // Importando useNavigate

export default function TelevisionHeaderSection() {
    const navigate = useNavigate(); // Obtendo a função de navegação

    return (
        <div className="flex border-b border-gray-900_03 bg-gray-900_04 py-[22px] sm:py-5">
            <div className="container-xs flex items-center gap-6 px-2 md:px-5">
                <Img
                    src="/assets/images/img_television.svg"
                    alt="Television Image"
                    className="h-[34px]"
                    onClick={() => navigate('/examplesportfolio')} // Navegando para a página inicial ao clicar na imagem
                />
                <Text
                    sizes="texts"
                    as="p"
                    className="text-[36px] font-normal text-backgrounds-primary md:text-[34px] sm:text-[32px]"
                    onClick={() => navigate('/examplesportfolio')} // Navegando para a página inicial ao clicar no texto
                >
                    KINKLER
                </Text>
            </div>
        </div>
    );
}
