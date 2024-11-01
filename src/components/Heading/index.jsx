import React from "react";

const sizes = {
    title_hero: "tracking-[-2.16px] text-[72px] font-bold md:text-[48px]",
    heading: "tracking-[-0.48px] text-[24px] font-semibold md:text-[22px]",
};

const Heading = ({ children, className = "", size = "heading", as: Component = "h6", ...restProps }) => {
    return (
        <Component className={`text-gray-100_01 font-inter ${className} ${sizes[size]}`} {...restProps}>
            {children}
        </Component>
    );
};

export { Heading };
