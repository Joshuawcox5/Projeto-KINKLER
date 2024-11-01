import { Img } from "../Img";
import React from "react";

export default function Footer({ ...props }) {
    return (
        <footer {...props} className={`${props.className} flex flex-col items-center py-8 sm:py-5 border-t border-solid`}>
            <div className="container-xs flex flex-col items-center mb-1 px-2 md:px-5">
                <Img src="/assets/images/img_television.svg" alt="Main Logo" className="h-[34px] object-contain" />
                <p className="text-center text-gray-600 mt-4">
                    Feito por alunos apenas para estudo e aprendizado.
                </p>
            </div>
        </footer>
    );
}
