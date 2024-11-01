import { Text, Img } from "./..";
import React from "react";
import { Link } from "react-router-dom"; // Importando o Link do React Router

export default function Header({ ...props }) {
    return (
        <header
            {...props}
            className={`${props.className} flex items-center py-[22px] sm:py-5 border-gray-900_04 border-b border-solid bg-gray-900_06`}
        >
            <div className="container-xs flex items-center justify-between gap-5 px-2 md:px-5 sm:flex-col">
                <div className="flex items-center gap-6">
                    <Link to="/"> {/* Link para a página inicial, se necessário */}
                        <Img src="/assets/images/img_television.svg" alt="Television Image" className="h-[34px]" />
                    </Link>
                    <Text
                        size="texts"
                        as="p"
                        className="text-[36.34px] font-normal text-backgrounds-primary md:text-[34px] sm:text-[32px]"
                    >
                        KINKLER
                    </Text>
                </div>
                <ul className="!mr-2 flex flex-wrap items-center gap-12 md:mr-0">
                    <li>
                        <Link to="/examplesportfolioone" className="cursor-pointer"> {/* Link para a página de envio de jogos */}
                            <Text
                                size="single_line_body_base"
                                as="p"
                                className="px-5 py-1 text-[16px] font-normal text-gray-100_01 hover:rounded-lg hover:bg-gray-300"
                            >
                                Enviar Jogos
                            </Text>
                        </Link>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex cursor-pointer items-center justify-center rounded-lg border border-solid border-gray-600_01 bg-gray-300"
                        >
                            <Text
                                size="single_line_body_base"
                                as="p"
                                className="px-5 py-1 text-[16px] font-normal text-gray-900_05 hover:text-gray-100_01"
                            >
                                Login
                            </Text>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex cursor-pointer items-center justify-center rounded-lg border border-solid border-blue_gray-900_01 bg-blue"
                        >
                            <Text
                                size="single_line_body_base"
                                as="p"
                                className="px-1.5 py-1 text-[16px] font-normal hover:bg-gray-300 hover:text-gray-100_01"
                            >
                                Registrar
                            </Text>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
