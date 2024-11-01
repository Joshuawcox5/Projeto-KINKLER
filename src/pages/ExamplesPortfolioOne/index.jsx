import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import TelevisionHeaderSection from "./TelevisionHeaderSection";
import React, { useState } from "react";
import { Button, Text, Input, Heading } from "../../components";

export default function ExamplesPortfolioOnePage() {
    const [newGame, setNewGame] = useState({
        name: "",
        description: "",
        link: "",
        image: "" // Adicionando o campo de imagem
    });

    const handleChange = (e) => {
        if (e && e.target) {
            const { name, value } = e.target;
            setNewGame((prevGame) => ({
                ...prevGame,
                [name]: value
            }));
        }
    };

    const handleAddGame = () => {
        const storedGames = JSON.parse(localStorage.getItem("games")) || [];
        const updatedGames = [...storedGames, newGame];
        localStorage.setItem("games", JSON.stringify(updatedGames));
        setNewGame({ name: "", description: "", link: "", image: "" }); // Resetando todos os campos
        alert("Jogo adicionado com sucesso!"); // Você pode considerar uma notificação aqui
    };

    return (
        <>
            <Helmet>
                <title>KINKLER - Envie seu jogo</title>
                <meta name="description" content="Coloque seu jogo no Kinkler!" />
            </Helmet>
            <div className="flex w-full flex-col gap-[146px] bg-gray-900_11 md:gap-[109px] sm:gap-[73px]">
                <TelevisionHeaderSection />
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
                                <Text as="p" className="text-[16px] font-semibold">
                                    Nome do Jogo
                                </Text>
                                <Input
                                    name="name"
                                    value={newGame.name}
                                    onChange={handleChange}
                                    placeholder="Digite o nome do jogo"
                                    className="self-stretch rounded-lg border-[1px] border-gray-900_12 px-4 bg-gray-800 text-gray-100 focus:border-blue-500"
                                />
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <Text as="p" className="text-[16px] font-semibold">
                                    Descrição
                                </Text>
                                <Input
                                    name="description"
                                    value={newGame.description}
                                    onChange={handleChange}
                                    placeholder="Digite a descrição do jogo"
                                    className="self-stretch rounded-lg border-[1px] border-gray-900_13 px-4 bg-gray-800 text-gray-100 focus:border-blue-500"
                                />
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <Text as="p" className="text-[16px] font-semibold">
                                    Link do Jogo
                                </Text>
                                <Input
                                    name="link"
                                    value={newGame.link}
                                    onChange={handleChange}
                                    placeholder="Digite o link do jogo"
                                    className="self-stretch rounded-lg border-[1px] border-gray-900_12 px-4 bg-gray-800 text-gray-100 focus:border-blue-500"
                                />
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <Text as="p" className="text-[16px] font-semibold">
                                    Imagem do Jogo (URL)
                                </Text>
                                <Input
                                    name="image"
                                    value={newGame.image}
                                    onChange={handleChange}
                                    placeholder="Digite a URL da imagem"
                                    className="self-stretch rounded-lg border-[1px] border-gray-900_12 px-4 bg-gray-800 text-gray-100 focus:border-blue-500"
                                />
                            </div>
                        </div>
                        <Button 
                            onClick={handleAddGame} 
                            shape="round" 
                            className="self-stretch rounded-lg border border-blue-600 bg-blue-600 text-white bg-blue-700 hover:bg-blue px-[33px] sm:px-5"
                        >
                            Adicionar
                        </Button>
                    </div>
                </div>
                <Footer className="border-t border-gray-900 bg-gray-900_04" />
            </div>
        </>
    );
}
