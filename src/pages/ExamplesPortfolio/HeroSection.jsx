import { Heading } from "../../components";
import React, { useState } from "react";

export default function HeroSection() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <>
            {/* hero section */}
            <div>
                <div className="flex bg-gray-900_09 py-40 md:py-5">
                    <div className="container-xs mb-8 flex flex-col items-center justify-center px-14 md:px-5">
                        <Heading
                            size="title_hero"
                            as="h1"
                            className="text-[72px] font-bold tracking-[-2.16px] text-gray-100_01 md:text-[48px]"
                        >
                            Pesquise jogos no Kinkler
                        </Heading>
                        {/* Barra de pesquisa */}
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            placeholder="Pesquise seu jogo aqui..."
                            className="mt-4 w-full max-w-md rounded-lg border border-gray-400 p-2 text-gray-900"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
