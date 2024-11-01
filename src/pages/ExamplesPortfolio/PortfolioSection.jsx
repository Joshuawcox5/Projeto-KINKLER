import { Heading } from "../../components";
import UserProfile from "../../components/UserProfile";
import React, { Suspense, useEffect, useState } from "react";

export default function PortfolioSection() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const storedGames = JSON.parse(localStorage.getItem("games")) || [];
    setGames(storedGames);
  }, []);

  return (
    <>
      {/* Portfolio section */}
      <div>
        <div className="flex flex-col items-center justify-center bg-gray-900_11 py-[62px] md:py-5">
          <div className="container-xs flex flex-col items-start gap-[42px] px-10 md:px-5">
            <Heading as="h2" className="text-[24px] font-semibold tracking-[-0.48px] text-gray-100_01 md:text-[22px]">
              Jogos Adicionados
            </Heading>
            <div className="grid grid-cols-3 gap-12 self-stretch md:grid-cols-2 sm:grid-cols-1">
              <Suspense fallback={<div>Loading feed...</div>}>
                {games.map((game, index) => (
                  <UserProfile
                    key={index} // Usando o índice como chave
                    userTitle={game.name} // Título do jogo
                    userDescription={game.description} // Descrição do jogo
                    userLink={game.link} // Link do jogo
                    userImage={game.image} // Imagem do jogo
                  />
                ))}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
